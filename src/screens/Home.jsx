import { useContext } from "react";
import Card from "../components/Card";
import { ApplicationContext } from "../App";

const Home = () => {
  const { selectedItems } = useContext(ApplicationContext);

  return (
    <div className="container">
      {selectedItems.map((book) => (
        <Card key={book.id} book={book} />
      ))}
    </div>
  );
};

export default Home;
