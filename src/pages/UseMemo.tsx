import { useState, useMemo, memo } from 'react'; 

const RegistrationForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  

  const isFormValid = useMemo(() => {
    console.log('Validating form');
    // Hypothetical expensive validation logic
    return username.length > 3 && email.includes('@') && password.length >= 8;
  }, [username, email, password]);

  return (
    <form>
      <input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        type="password"
      />
      <button type="submit" disabled={!isFormValid}>
        Register
      </button>
    </form>
  );
};

export default memo(RegistrationForm);
