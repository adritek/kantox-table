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
        <td>{item.attributes.reference}</td>
        <td>{item.attributes['order-type']}</td>
        <td>{item.attributes['creation-date']}</td>
        <td>
          {item.attributes['market-direction']}
          {item.attributes['market-direction'] === 'buy' ? ' 📈' : ' 📉'}
        </td>
        {currencyConverter(
          item.attributes['market-direction'],
          item.attributes['amount-cents'],
          item.attributes['buy-currency'],
          item.attributes['sell-currency']
        )}
        <td>{item.attributes['value-date']}</td>
        <td>{item.attributes.status}</td>
      </tr>
    ));
  }
  return (
    <>
      {warnings}
      <table>
        <thead>
          <tr>
            <th>Reference</th>
            <th>Order Type</th>
            <th>Creation Date</th>
            <th>Market Direction</th>
            <th>Buy</th>
            <th>Sell</th>
            <th>Value Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>{content}</tbody>
      </table>
    </>
  );
}
