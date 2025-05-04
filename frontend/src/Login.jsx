import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const handleSuccess = (credentialResponse) => {
    const userData = jwt_decode(credentialResponse.credential);
    localStorage.setItem('user', JSON.stringify(userData));
    navigate('/');
  };

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h2>Login to Continue</h2>
      <GoogleLogin onSuccess={handleSuccess} onError={() => alert('Login Failed')} />
    </div>
  );
}

export default Login;
