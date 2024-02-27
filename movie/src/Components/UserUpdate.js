import React, { useState } from 'react';

function UpdateUserForm() {
  const [loginId, setLoginId] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a JSON object with the user data
    const userData = {
      login_id: loginId,
      name: name,
      email: email,
      phone_number: phoneNumber,
      address: address
    };

    try {
      // Send a POST request to the backend endpoint
      const response = await fetch('https://localhost:7063/api/GetProfileInfo/UpdateUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      });

      // Check if the request was successful
      if (response.ok) {
        // Update the message state to indicate success
        setMessage('User updated successfully.');
      } else {
        // Handle error cases where the request was not successful
        const errorMessage = await response.text();
        setMessage(`Error: ${errorMessage}`);
      }
    } catch (error) {
      // Handle network errors
      setMessage('Network error occurred. Please try again.');
    }
  };

  return (
    <div>
      <h2>Update User</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Login ID:</label>
          <input type="number" value={loginId} onChange={(e) => setLoginId(e.target.value)} />
        </div>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Phone Number:</label>
          <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
        </div>
        <div>
          <label>Address:</label>
          <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
        </div>
        <button type="submit">Update User</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default UpdateUserForm;