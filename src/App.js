import { useState } from "react";
import "./App.css";

function App() {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    email: "",
    newsletter: false,
  });

  function handleChange(event) {
    const { value, name, type, checked } = event.target;
    if (type === "number") {
      setUserData({ ...userData, [name]: Number(value) });
      // }
    } else if (type === "text" || type === "email") {
      setUserData({ ...userData, [name]: value });
    } else if (type === "checkbox") {
      setUserData({ ...userData, [name]: checked });
    }
    // console.log(`${name}: ${value}`);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (userData.age < 18) {
      alert("you must have more than 18 years old");
    } else {
      console.log(userData);
      console.log("submitted");
      setUserData({
        firstName: "",
        lastName: "",
        age: "",
        email: "",
        newsletter: false,
      });
    }
  }

  return (
    <div className="App">
      <h1>More USERS!</h1>
      <h2>Enter user credentials below:</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">Name:</label>
        <input
          value={userData.firstName}
          onChange={handleChange}
          type="text"
          name="firstName"
          required
        />
        <label htmlFor="lastName">Surname:</label>
        <input
          value={userData.lastName}
          onChange={handleChange}
          type="text"
          maxLength="20"
          name="lastName"
          required
        />
        <label htmlFor="age">Age:</label>
        <input
          value={userData.age}
          onChange={handleChange}
          type="number"
          name="age"
          required
        />
        <label htmlFor="email">Email:</label>
        <input
          value={userData.email}
          onChange={handleChange}
          type="email"
          name="email"
          required
        />
        <div className="newsletter">
          <input
            value={userData.newsletter}
            onChange={handleChange}
            type="checkbox"
            name="newsletter"
            checked={userData.newsletter}
            required
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
