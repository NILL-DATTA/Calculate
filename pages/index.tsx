import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { useState } from "react";
export default function Home() {
  const [rows, setRows] = useState<number>(4);
  const [columns, setColumns] = useState<number>(4);
  const [tables, setTables] = useState([]);
  const [tables1, setTable1] = useState([]);
  const generateTable = () => {
    const newtable = [];

    const table = (
      <table className="table">
        <tbody>
          {Array.from({ length: rows }).map((_, rowIndex) => (
            <tr>
              {Array.from({ length: columns }).map((_, colIndex) => (
                <td>{rowIndex + colIndex}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );

    newtable.push(table);

    const table1 = (
      <table className="table">
        <tbody>
          {Array.from({ length: rows }).map((_, rowIndex) => (
            <tr>
              {Array.from({ length: columns }).map((_, colIndex) => (
                <td>{rowIndex * colIndex}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
    newtable.push(table1);

    setTables(newtable);
  };

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main}`}>
        <div className="container">
          <div className="inputs">
            <label htmlFor="rows">Rows</label>
            <input
              type="number"
              id="rows"
              name="rows"
              min="1"
              value={rows}
              onChange={(e) => setRows(parseInt(e.target.value))}
            />
            <label htmlFor="columns">Columns</label>
            <input
              type="number"
              id="columns"
              name="columns"
              min="1"
              value={columns}
              onChange={(e) => setColumns(parseInt(e.target.value))}
            />
            <button onClick={generateTable} className="generate-btn">
              Generate Tables
            </button>
          </div>
          <div className="table-container">{tables}</div>
        </div>
      </main>
    </>
  );
}
