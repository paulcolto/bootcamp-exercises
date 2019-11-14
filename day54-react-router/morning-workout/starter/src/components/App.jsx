import React, { useState } from "react";

const formStyle = { display: "flex", flexDirection: "column", height: '300px', width:  '300px', alignItems: 'space-between'}
const divStyle = { display: "flex", width:  '300px', justifyContent: 'space-between' }
const buttonStyle = { border: '1px solid blue', margin: '5px'}

const URL = 'https://nemadywgu6.execute-api.us-west-2.amazonaws.com/prod'
const App = props => {
  // Declare the proper variables for state using useState
  const [ formInputValues , setFormInputValues ] = useState( {email: '', password: ''});
  const [ formSubmitSuccess, setFormSubmitSuccess ] = useState();

  // Make the inputs 'controlled input' using the function below
  const handleTextValueChange = e => {
    setFormInputValues ({
      ...formInputValues,
      [e.target.id]: e.target.value
    })
  };

  const handleSubmitClick = (e) => {
    e.preventDefault()
    // When the submit button is clicked, submit a POST request to the above URL
    // It will always return an error
    // Find the error message in the returned body and add the error message to the bottom of the form
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
    <form style={formStyle}>
      <div style={divStyle}>
        <p>Email</p>
        <input
          type="email"
          id="email"
          value={formInputValues.email}
          onChange={handleTextValueChange}
        />
      </div>
      <div style={divStyle}>
        <p>Password</p>
        <input
          type="password"
          id="password"
          value={formInputValues.password}
          onChange={handleTextValueChange}
        />
      </div>
      <button style={buttonStyle} onClick={handleSubmitClick}>Submit</button>
      {formSubmitSuccess === true && <h3>Congrats!</h3>}
      {formSubmitSuccess === false && <h3 style={{ color: 'red' }}>Error Ocurred, try again laster</h3>}
    </form>
  );
};

export default App;