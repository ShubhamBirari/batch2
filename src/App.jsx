import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import Form from "./components/Form";

function App() {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((result) => {
        return result.json();
      })
      .then((data) => {
        setList(data);
        console.log(data[0]);
      });
  }, []);

  return (
    <>
      <div className="card">
        <Form setList={setList} list={list} />

        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {list?.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
