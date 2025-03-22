export function currencyConverter(dir, amountCents, buyCurrency, sellCurrency) {
  const amount = (amountCents / 100).toFixed(2);
  if (dir === 'buy') {
    return (
      <>
        <td data-cell="buy" className="">
          {`${amount} `}
          <strong>{sellCurrency}</strong>
        </td>{' '}
        <td data-cell="sell">{sellCurrency}</td>
      </>
    );
  } else if (dir === 'sell') {
    return (
      <>
        <td data-cell="buy">{buyCurrency}</td>
        <td data-cell="sell" className="">
          {`${amount} `}
          <strong>{sellCurrency}</strong>
        </td>
      </>
    );
  }
  return (
    <>
      <td data-cell="buy">No data</td>
      <td data-cell="sell">No data</td>
    </>
  );
}
