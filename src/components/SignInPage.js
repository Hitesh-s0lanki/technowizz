import React, { useState } from 'react'
import TextField from '../common/TextField'
import Logo from '../assets/logo.jpg'
import { useAuthContext } from '../context/auth_context'
import { Button, useToast } from '@chakra-ui/react'

const SignInPage = (props) => {

  const [authDetails,setAuthDetails] = useState({email:"",password:""})

  const onChange = (e) =>{
    setAuthDetails({...authDetails,[e.target.name] :e.target.value})
  }

  const { authVerification , setUser} = useAuthContext()

  const toast = useToast()

  const handleSubmit = async(e) =>{
    e.preventDefault()
    const email = authDetails.email.trim()
    const password = authDetails.password.trim()

    if ( email !== "" && password !== ""){
      const user = await authVerification( email, password)
      if(user.user !== ""){
        await setUser(user)
        toast({
          title: 'Login Account',
          description: "You have Successfully Logged In",
          status: 'success',
          duration: 3000,
          isClosable: true,
        })
      } else {
        toast({
          title: user.error,
          status: "error",
          isClosable: true,
        })
      }
    } else {
      toast({
        title: "Fill the complete details",
        status: "error",
        isClosable: true,
      })
    }

  }

  return (
    <div className="center my-24 w-1/3" >
        <div className='rounded-lg drop-shadow-2xl bg-slate-50 p-10'>
          <div className="flex flex-col justify-center align-middle my-3">
            <img src={Logo} alt='logo' height={170} width={170} className='rounded-full mr-3 p-2' />
            <h1 className='text-start text-2xl font-bold mx-3'>Login...</h1>
          </div>
          <form method="post">
            <TextField name="Email address" nameValue="email" val={authDetails.email} onChange={onChange} />
            <TextField name="Password" nameValue="password" val={authDetails.password} onChange={onChange} />
            <div className="container center my-4 flex justify-center">
              <Button className="rounded bg-orange-300 p-2" onClick={handleSubmit}>Submit</Button>
            </div>
          </form>
          <div className="redirectText flex justify-center">
            <button className='text-center text-gray-900 ' onClick={props.onTap} >Not Register Yet?Click here</button>
          </div>
        </div>
    </div>
  )
}

export default SignInPage
