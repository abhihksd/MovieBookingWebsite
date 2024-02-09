import React, { useState } from 'react';

function RegistrationForm() {
  const [showCustomerForm, setShowCustomerForm] = useState(true);

  const toggleForm = () => {
    setShowCustomerForm(!showCustomerForm);
  };

  return (
    <div>
        <button onClick={toggleForm}>
        {showCustomerForm ? 'Switch to Theater Registration' : 'Switch to Customer Registration'}
      </button>
      {showCustomerForm ? (
        <div>
          <h2>Customer Registration</h2>
          <form>
            <input type="text" id="customerName" name="customerName" placeholder='enter name' /><br />
            <input type="email" id="customerEmail" name="customerEmail" placeholder='enter email' /><br />
            <input type='contact' id='customerContact' name='customerContact' placeholder='enter contact number' /><br/>
            <input type='date' id='customerDob' name='customerDob'/><br/>

            <button type="submit">Register</button>
          </form>
        </div>
      ) : (
        <div>
          <h2>Theater Registration</h2>
          <form>
            <label htmlFor="theaterName">Name:</label><br />
            <input type="text" id="theaterName" name="theaterName" /><br />
            <label htmlFor="theaterAddress">Address:</label><br />
            <input type="text" id="theaterAddress" name="theaterAddress" /><br />
            <button type="submit">Register</button>
          </form>
        </div>
      )}

      
    </div>
  );
}

export default RegistrationForm;
