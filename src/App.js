import "./App.css";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [check, setCheck] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    console.log("!!! FORM SUBMITTED !!!");
    // console.log(`Name: ${event.target.firstName.value}`);
    // console.log(`Surname: ${event.target.lastName.value}`);
    // console.log(`Age: ${event.target.age.value}`);
    // console.log(`Email: ${event.target.email.value}`);
    // console.log(`Checkbox checked: ${event.target.newsletter.checked}`);
    setName("");
    setSurname("");
    setAge(0);
    setEmail("");
    setCheck(false);
    const userInformation = {
      name,
      surname,
      age,
      email,
      check,
    };
    console.log(userInformation);
  }

  function handleNameChange(event) {
    setName(event.target.value);
    // console.log(event.target.value);
  }

  function handleSurnameChange(event) {
    setSurname(event.target.value);
    // console.log(event.target.value);
  }

  function handleAgeChange(event) {
    setAge(event.target.value);
    // console.log(event.target.value);
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);
    // console.log(event.target.value);
  }

  function handleCheckboxChange(event) {
    setCheck(event.target.checked);
    // console.log(event.target.checked);
  }

  return (
    <div className="App">
      <h1>More USERS!</h1>
      <h2>Enter user credentials below:</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">Name:</label>
        <input
          onChange={handleNameChange}
          type="text"
          name="firstName"
          value={name}
        />
        <label htmlFor="lastName">Surname:</label>
        <input
          onChange={handleSurnameChange}
          type="text"
          name="lastName"
          value={surname}
        />
        <label htmlFor="age">Age:</label>
        <input
          onChange={handleAgeChange}
          type="number"
          name="age"
          value={age}
        />
        <label htmlFor="email">Email:</label>
        <input
          onChange={handleEmailChange}
          type="email"
          name="email"
          value={email}
        />
        <div className="newsletter">
          <input
            onChange={handleCheckboxChange}
            type="checkbox"
            name="newsletter"
            checked={check}
          />
          <label htmlFor="newsletter">
            Yes, I would like many more emails!
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
