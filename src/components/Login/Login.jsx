import React, {useState} from 'react'
import axios from 'axios';

function Login () {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get('http://localhost:3000/users', {
        params: {
          username: username,
          password: password
        }
      });

      const user = response.data.find(
        (user) => user.username === username && user.password === password
      );

      if (user) {
        setMessage('Login successful!');
        // Perform further actions, such as storing user data or redirecting
      } else {
        setMessage('Invalid username or password');
      }
    } catch (error) {
      console.error('Error during login:', error);
      setMessage('An error occurred. Please try again later.');
    }
  };


  return (
    <>
      <div className='login-page'>
          <div className='container'>
          <form onSubmit={handleSubmit}>
              <div>
                <label>Username:</label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div>
                <label>Password:</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button type="submit">Login</button>
            </form>
              {message && <p>{message}</p>}
          </div>
      </div>
    </>
  )
}

export default Login