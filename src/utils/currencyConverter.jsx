export function currencyConverter(dir, amountCents, buyCurrency, sellCurrency) {
  const amount = (amountCents / 100).toFixed(2);
  if (dir === 'buy') {
    return (
      <>
        <td className="border border-gray-300 highlight">
          {`${amount} `}
          <strong>{sellCurrency}</strong>
        </td>{' '}
        <td>{sellCurrency}</td>
      </>
    );
  } else if (dir === 'sell') {
    return (
      <>
        <td>{buyCurrency}</td>
        <td className="highlight">
          {`${amount} `}
          <strong>{sellCurrency}</strong>
        </td>
      </>
    );
  }
  return (
    <>
      <td>No data</td>
      <td>No data</td>
    </>
  );
}
