import "./App.css";
import { useState } from "react";
import { validateEmail } from "./utils";

const PasswordErrorMessage = (props) => {
  if (props.password.value.length<8 && props.password.isTouched ){
    return (
      <p className="FieldError">Password should have at least 8 characters</p>
    );
  }
};

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState({
    value: "",
    isTouched: false,
  });
  const [role, setRole] = useState("role");

  const getIsFormValid = () => {
    // Implement this function

    if(firstName != '' && validateEmail(email) && password.value.length> 8 && role!='role'){
      return true;
    }else{
      return false
    }
  };

  const clearForm = () => {
    // Implement this function
    setEmail('');
    setFirstName('');
    setLastName('');
    setRole('role')
    setPassword({
      value: '',
      isTouched : false
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Account created!");
    console.log(firstName,lastName,email,role,email,password)
    clearForm();

  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h2>Sign Up</h2>
          <div className="Field">
            <label>
              First name <sup>*</sup>
            </label>
            <input placeholder="First name" onChange={e=> setFirstName(e.target.value) } />
          </div>
          <div className="Field">
            <label>Last name</label>
            <input placeholder="Last name" onChange={e=> setLastName(e.target.value)} />
          </div>
          <div className="Field">
            <label>
              Email address <sup>*</sup>
            </label>
            <input placeholder="Email address" onChange={e=> setEmail(e.target.value)}  />
          </div>
          <div className="Field">
            <label>
              Password <sup>*</sup>
            </label>
            <input placeholder="Password" onChange={e=> setPassword({value : e.target.value, isTouched : true})} />
            <PasswordErrorMessage password = {password}/>
          </div>
          <div className="Field">
            <label>
              Role <sup>*</sup>
            </label>
            <select onChange={e=> setRole(e.target.value)}>
              <option value="role">Role</option>
              <option value="individual">Individual</option>
              <option value="business">Business</option>
            </select>
          </div>
          <button type="submit" disabled={!getIsFormValid()}>
            Create account
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default App;
