import { useEffect, useState } from "react";

export default function Table() {
  const [tableData, setTableData] = useState([]);
  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch("/src/assets/data.json");
        if (!response.ok) {
          throw new Error("Couldn't fetch data");
        }
        const { data } = await response.json();
        setTableData(data);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    }

    getData();
  }, []);
  let content;
  if (tableData.length) {
    console.log("Table data", tableData);
    content = tableData.map((item) => (
      <tr key={item.id}>
        <td>{item.attributes.reference}</td>
        <td>{item.attributes["order-type"]}</td>
        <td>{item.attributes["creation-date"]}</td>
        <td>{item.attributes["market-direction"]}</td>
      </tr>
    ));
  }
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
        <tbody>{content}</tbody>
      </table>
    </>
  );
}
