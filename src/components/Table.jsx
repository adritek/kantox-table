import { useQuery } from '@tanstack/react-query';
import { getData } from '/src/utils/fetch.js';

export default function Table() {
  const currencyConverter = (muney) => (muney / 100).toFixed(2);

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['apiEvent'],
    queryFn: getData,
  });

  let content;
  let warnings;

  if (isLoading) {
    warnings = <p className="center">📊 Loading orders 📊</p>;
  }
  if (isError) {
    warnings = <p className="center text-red-600">Error: {error.message}</p>;
  }

  if (data) {
    content = data.map((item) => (
      <tr
        key={item.id}
        className="even:bg-gray-100 odd:bg-white grid grid-cols-[20ch auto] md:table-row gap-[0.1rem]"
      >
        <td
          data-cell="reference: "
          className="md:p-3 md:table-cell md:first:pt-4 md:before:content-none block first:pt-8 text-gray-700 before:content-[attr(data-cell)] before:font-bold px-2 py-0.5 pl-12 capitalize"
        >
          <a href="#" className="font-bold text-blue-500 hover:underline">
            {item.attributes.reference}
          </a>
        </td>
        <td
          data-cell="order type: "
          className="md:p-3 md:table-cell block text-gray-700 before:content-[attr(data-cell)] before:font-bold md:before:content-none gap-2 px-2 py-0.5 pl-12 capitalize"
        >
          {item.attributes['order-type']}
        </td>
        <td
          data-cell="creation date: "
          className="md:p-3 md:table-cell block text-gray-700 before:content-[attr(data-cell)] before:font-bold md:before:content-none gap-2 px-2 py-0.5 pl-12 capitalize"
        >
          {item.attributes['creation-date']}
        </td>
        <td
          data-cell="market direction: "
          className="md:p-3 md:table-cell block text-gray-700 before:content-[attr(data-cell)] before:font-bold md:before:content-none gap-2 px-2 py-0.5 pl-12 capitalize"
        >
          {item.attributes['market-direction']}
          {item.attributes['market-direction'] === 'buy' ? ' 📈' : ' 📉'}
        </td>
        <td
          data-cell="buy: "
          className=" md:p-3 md:table-cell block text-gray-700 before:content-[attr(data-cell)] before:font-bold md:before:content-none gap-2 px-2 py-0.5 pl-12 capitalize"
        >
          {item.attributes['market-direction'] === 'buy' ? (
            <>
              {currencyConverter(item.attributes['amount-cents'])}{' '}
              <strong>{item.attributes['buy-currency']}</strong>
            </>
          ) : (
            item.attributes['buy-currency']
          )}
        </td>
        <td
          data-cell="sell: "
          className="md:p-3 md:table-cell block text-gray-700 before:content-[attr(data-cell)] before:font-bold md:before:content-none gap-2 px-2 py-0.5 pl-12 capitalize"
        >
          {item.attributes['market-direction'] !== 'buy' ? (
            <>
              {currencyConverter(item.attributes['amount-cents'])}{' '}
              <strong>{item.attributes['sell-currency']}</strong>
            </>
          ) : (
            item.attributes['sell-currency']
          )}
        </td>
        <td
          data-cell="value date: "
          className="md:p-3 md:table-cell block text-gray-700 before:content-[attr(data-cell)] before:font-bold md:before:content-none gap-2 px-2 py-0.5 pl-12 capitalize"
        >
          {item.attributes['value-date']}
        </td>
        <td
          data-cell="status: "
          className=" md:p-3 md:table-cell last:pb-8 md:last:pb-4 block text-gray-700 before:content-[attr(data-cell)] before:font-bold md:before:content-none gap-2 px-2 py-0.5 pl-12 capitalize"
        >
          <span
            className={`whitespace-normal p-1.5 text-xs font-medium uppercase tracking-wider text-yellow-800 rounded-lg w-max
            ${item.attributes.status === 'new' ? 'bg-green-500/15 ' : ''} 
            ${item.attributes.status === 'failed' ? 'bg-red-500/15 ' : ''} 
            ${
              item.attributes.status !== 'new' &&
              item.attributes.status !== 'failed'
                ? 'bg-yellow-500/15 text-yellow-800'
                : ''
            }`}
          >
            {item.attributes.status.replace(/_/g, ' ')}
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
      className="overflow-x-auto max-w-full border-gray-300 rounded-lg shadow-2xs outline-gray-400"
    >
      {warnings}
      <table className="whitespace-nowrap w-full border-collapse m-0 border-0">
        <caption
          className="p-5 italic font-bold uppercase text-gray-700 tracking-wide caption-top md:text-right text-left mr-30"
          id="OrdersTable01"
        >
          Trading data
        </caption>
        <thead className="bg-gray-50 border-b-2 border-gray-200">
          <tr>
            <th
              className=" hidden md:table-cell p-3 text-small font-semibold tracking-wide text-left"
              scope="col"
            >
              Reference
            </th>
            <th
              className="whitespace-normal hidden md:table-cell p-3 text-small font-semibold tracking-wide text-left"
              scope="col"
            >
              Order Type
            </th>
            <th
              className="hidden md:table-cell p-3 text-small font-semibold tracking-wide text-left"
              scope="col"
            >
              Creation Date
            </th>
            <th
              className="whitespace-normal hidden md:table-cell p-3 text-small font-semibold tracking-wide text-left"
              scope="col"
            >
              Market Direction
            </th>
            <th
              className="hidden md:table-cell p-3 text-small font-semibold tracking-wide text-left"
              scope="col"
            >
              Buy
            </th>
            <th
              className="hidden md:table-cell p-3 font-semibold text-small tracking-wide text-left"
              scope="col"
            >
              Sell
            </th>
            <th
              className="hidden md:table-cell p-3 text-small font-semibold tracking-wide text-left"
              scope="col"
            >
              Value Date
            </th>
            <th
              className="hidden md:table-cell p-3 text-small font-semibold tracking-wide text-left"
              scope="col"
            >
              Status
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">{content}</tbody>
      </table>
    </div>
  );
}
