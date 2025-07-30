import Papa from 'papaparse';
import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [sortKey, setSortKey] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  // Load CSV file on component mount
  useEffect(() => {
    Papa.parse(process.env.PUBLIC_URL + "/clustered_output.csv", {
      header: true,
      download: true,
      complete: function (results) {
        setData(results.data);
      }
    });
  }, []);

  // Handle sorting by column
  const handleSort = (key) => {
    const order = sortOrder === "asc" ? "desc" : "asc";
    const sorted = [...data].sort((a, b) => {
      const aVal = parseFloat(a[key]) || 0;
      const bVal = parseFloat(b[key]) || 0;
      return order === "asc" ? aVal - bVal : bVal - aVal;
    });
    setData(sorted);
    setSortKey(key);
    setSortOrder(order);
  };

  return (
    <div className="App">
      <h2>Clustered Event Table</h2>
      <table>
        <thead>
          <tr>
            <th onClick={() => handleSort("EventID")}>Event Count</th>
            <th onClick={() => handleSort("Duration")}>Event Duration</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr key={idx}>
              <td>{row.EventID}</td>
              <td>{row.Duration}</td>
              <td>{`(${row.Latitude}, ${row.Longitude})`}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;