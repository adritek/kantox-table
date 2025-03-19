import { useQuery } from '@tanstack/react-query';
import { getData } from '/src/utils/fetch.js';

import { currencyConverter } from '../utils/currencyConverter';

export default function Table() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['apiEvent'],
    queryFn: getData,
  });

  console.log(data);

  let content;
  let warnings;

  if (isLoading) {
    warnings = <p className="center">📊 Loading orders 📊</p>;
  }
  if (isError) {
    warnings = { error }; //todo better errors
  }

  if (data) {
    content = data.map((item) => (
      <tr key={item.id}>
        <td data-cell="order type">{item.attributes['order-type']}</td>
        <td data-cell="reference">{item.attributes.reference}</td>
        <td data-cell="creation date">{item.attributes['creation-date']}</td>
        <td data-cell="market direction">
          {item.attributes['market-direction']}
          {item.attributes['market-direction'] === 'buy' ? ' 📈' : ' 📉'}
        </td>
        {currencyConverter(
          item.attributes['market-direction'],
          item.attributes['amount-cents'],
          item.attributes['buy-currency'],
          item.attributes['sell-currency']
        )}
        <td data-cell="value date" className="border border-gray-300">
          {item.attributes['value-date']}
        </td>
        <td data-cell="status" className="border border-gray-300">
          {item.attributes.status}
        </td>
      </tr>
    ));
  }
  return (
    <div
      id="table-container"
      role="region"
      aria-labelledby="OrdersTable01"
      tabIndex="0"
    >
      {warnings}
      <table className="border-collapse border border-gray-400">
        <caption id="OrdersTable01">Trading data</caption>
        <thead>
          <tr>
            <th scope="col">Reference</th>
            <th scope="col">Order Type</th>
            <th scope="col">Creation Date</th>
            <th scope="col">Market Direction</th>
            <th scope="col">Buy</th>
            <th scope="col">Sell</th>
            <th scope="col">Value Date</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>{content}</tbody>
      </table>
    </div>
  );
}
