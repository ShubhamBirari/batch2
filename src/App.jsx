import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./screens/Home";
import Cart from "./screens/Cart";
import { createContext, useState } from "react";

export const ApplicationContext = createContext();

const bookList = [
  {
    id: "abc",
    name: "Book 1",
    quantity: 0,
    price: 100,
  },
  {
    id: "abc1",
    name: "Book 2",
    quantity: 0,
    price: 150,
  },
  {
    id: "abc2",
    name: "Book 3",
    quantity: 0,
    price: 200,
  },
  {
    id: "abc3",
    name: "Book 4",
    quantity: 0,
    price: 250,
  },
  {
    id: "abc4",
    name: "Book 5",
    quantity: 0,
    price: 350,
  },
  {
    id: "abc5",
    name: "Book 6",
    quantity: 0,
    price: 300,
  },
];

const App = () => {
  const [selectedItems, setSelectedItem] = useState(bookList);

  return (
    <>
      <ApplicationContext.Provider value={{ selectedItems, setSelectedItem }}>
        <Header />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/cart" Component={Cart} />
        </Routes>
      </ApplicationContext.Provider>
    </>
  );
};

export default App;
