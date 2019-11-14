import React, { useState } from "react";

const App = props => {
  const [formInputValues, setFormInputValues] = useState({ name: '', email: '', password: ''});
  const [formSubmitSuccess, setFormSubmitSuccess] = useState()

  const handleNameInputChange = e => {
    setFormInputValues({
      ...formInputValues,
      [e.target.id]: e.target.value
    })
  };

  const handleSubmitButtonClick = (e) => {
    e.preventDefault()

    console.log("clicked", formInputValues)
    fetch('https://nemadywgu6.execute-api.us-west-2.amazonaws.com/prod/')
    .then(() => {
      setFormSubmitSuccess(true)
    })
    .catch((e) => {
      setFormSubmitSuccess(false)
    })
  }
  return (
    <form style={{ display: 'flex', flexDirection: 'column'}}>
      <input
        id="name"
        type="text"
        value={formInputValues.name}
        onChange={handleNameInputChange}
      />
      <input
        id="email"
        type="email"
        value={formInputValues.email}
        onChange={handleNameInputChange}
      />
      <input
        id="password"
        type="password"
        value={formInputValues.password}
        onChange={handleNameInputChange}
      />
      <button onClick={handleSubmitButtonClick} style={{border: '1px solid blue', margin: '5px'}}>Submit</button>
      {formSubmitSuccess === true && <h3>Congrats!</h3>}
      {formSubmitSuccess === false && <h3 style={{ color: 'red'}}>Error Occurred, try again later</h3>}
    </form>
  );
};

export default App;
