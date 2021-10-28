import logo from './logo.svg';
import './App.css';
import LoginPage from './components/LoginPage';
import MainPage from './components/MainPage';
import SignUp from './components/SignUp';
import Login from './components/Login';
import { SignUpProvider } from './components/SignUpContext';


function App() {

  return (
    <SignUpProvider>
    
    <div className="App">
            <LoginPage />

    </div>
    </ SignUpProvider>
    
  );


}

export default App;
