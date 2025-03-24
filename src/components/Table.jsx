import { useQuery } from '@tanstack/react-query';
import { getData } from '/src/utils/fetch.js';

// import { currencyConverter } from '../utils/currencyConverter';

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
      <tr key={item.id} className="even:bg-gray-100 odd:bg-white">
        <td data-cell="reference">
          <a href="#" className="font-bold text-blue-500 hover:underline">
            {item.attributes.reference}
          </a>
        </td>
        <td data-cell="order type">{item.attributes['order-type']}</td>
        <td data-cell="creation date">{item.attributes['creation-date']}</td>
        <td data-cell="market direction">
          {item.attributes['market-direction']}
          {item.attributes['market-direction'] === 'buy' ? ' 📈' : ' 📉'}
        </td>
        <td data-cell="buy">
          {item.attributes['market-direction'] === 'buy'
            ? `${item.attributes['amount-cents']} ${item.attributes['buy-currency']}`
            : `${item.attributes['buy-currency']}`}
        </td>
        <td data-cell="sell">
          {item.attributes['market-direction'] !== 'buy'
            ? `${item.attributes['amount-cents']} ${item.attributes['sell-currency']}`
            : `${item.attributes['sell-currency']}`}
        </td>
        <td data-cell="value date" className="">
          {item.attributes['value-date']}
        </td>
        <td data-cell="status">
          <span
            className={`p-1.5 text-xs font-medium uppercase tracking-wider text-yellow-800 rounded-xl 
            ${item.attributes.status === 'new' ? 'bg-green-500/15' : ''} 
            ${item.attributes.status === 'failed' ? 'bg-red-500/15' : ''} 
            ${
              item.attributes.status !== 'new' &&
              item.attributes.status !== 'failed'
                ? 'bg-yellow-500/15 text-yellow-800'
                : ''
            }`}
          >
            {item.attributes.status}
          </span>
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
      <table className="w-full border-collapse">
        <caption id="OrdersTable01">Trading data</caption>
        <thead className="bg-gray-50 border-b-2 border-gray-200">
          <tr>
            <th
              className="p-4 text-small font-semibold tracking-wide text-left"
              scope="col"
            >
              Reference
            </th>
            <th
              className="p-4 text-small font-semibold tracking-wide text-left"
              scope="col"
            >
              Order Type
            </th>
            <th
              className="p-4 text-small font-semibold tracking-wide text-left"
              scope="col"
            >
              Creation Date
            </th>
            <th
              className="p-4 text-small font-semibold tracking-wide text-left"
              scope="col"
            >
              Market Direction
            </th>
            <th
              className="p-4 text-small font-semibold tracking-wide text-left"
              scope="col"
            >
              Buy
            </th>
            <th
              className="p-4 font-semibold text-small tracking-wide text-left"
              scope="col"
            >
              Sell
            </th>
            <th
              className="p-4 text-small font-semibold tracking-wide text-left"
              scope="col"
            >
              Value Date
            </th>
            <th
              className="p-4 text-small font-semibold tracking-wide text-left"
              scope="col"
            >
              Status
            </th>
          </tr>
        </thead>
        <tbody>{content}</tbody>
      </table>
    </div>
  );
}
