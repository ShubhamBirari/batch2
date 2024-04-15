import { useState } from "react";

const Form = ({ setList, list }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handlSubmit = (event) => {
    event.preventDefault();

    let temp = [...list];

    temp.push({ name, email, phone });

    console.log(temp);
    setList(temp);
  };

  return (
    <div>
      <form className="form" onSubmit={handlSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={handleNameChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={phone}
          onChange={handlePhoneChange}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
