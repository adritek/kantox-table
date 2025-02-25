import { useEffect, useState } from 'react';

export default function Table() {
  const [respData, setRespData] = useState();
  // react-query in here, replace useEffect
  useEffect(() => {
    //reference this as a util function for react-query
    async function getData() {
      try {
        const response = await fetch('data.json');
        if (!response.ok) {
          throw new Error("Couldn't fetch data");
        }
        const { data } = await response.json();
        setRespData(data);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    }

    return getData();
  }, []);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Reference</th>
            <th>Order Type</th>
            <th>Creation Date</th>
            <th>Market Direction</th>
          </tr>
        </thead>
        <tbody>
          {respData.map((item) => (
            <tr key={item.id}>
              <td>{item.attributes.reference}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
