import { useState } from 'react';
import './App.css';
import SignInPage from './components/SignInPage';
import SignUpPage from './components/SignUpPage';
import { useAuthContext } from './context/auth_context';
import Home from './components/Home';

function App() {

  const [LoginToggle, setLoginToggle] = useState(true)

  const onTap = () =>{
    setLoginToggle(!LoginToggle)
  }
  
  const {getUser, setUser } = useAuthContext()
  
  const [toggle, setToggle] = useState(true)

  document.addEventListener('visibilitychange', function (){
      setUser("")
      if(toggle){
        document.title = "Please don't Change Tab"
      }else {
        document.title = "Logical Quiz"
      }
      setToggle(!toggle)
  });
  
  if ( getUser() === ""){
    return (
      <div className="main bg-orange-200 h-screen">
        <div className="flex justify-center content-center">
          { LoginToggle && <SignInPage onTap={onTap}/> }
          {!LoginToggle && <SignUpPage onTap={onTap}/> }
        </div>
      </div>
    );
  } else {
    return (
      <div className="bg-orange-200 h-screen flex items-center justify-center">
        <Home />
      </div>
    )
    
  }
  
}

export default App;
