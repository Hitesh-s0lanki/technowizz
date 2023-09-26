import React, { useState } from 'react'
import TextField from '../common/TextField'
import Logo from '../assets/logo.jpg'
import { useAuthContext } from '../context/auth_context'
import { Button, useToast } from '@chakra-ui/react'

const SignUpPage = (props) => {

  const [authDetails,setAuthDetails] = useState({name1:"",name2:"",email:"",password:""})

  const onChange = (e) =>{
    setAuthDetails({...authDetails,[e.target.name] :e.target.value})
  }

  const toast = useToast()

  const {createAuthUser, setUser} = useAuthContext()

  const handleSubmit = async(e) =>{
    e.preventDefault()
    const name1 = authDetails.name1.trim()
    const name2 = authDetails.name2.trim()
    const email = authDetails.email.trim()
    const password = authDetails.password.trim()

    if (name1 !== "" && name2 !== "" && email !== "" && password !== ""){
      const user = await createAuthUser(name1, name2, email, password)
      if(user.user !== ""){
        toast({
          title: 'Account created.',
          description: "We've created your account for you.",
          status: 'success',
          duration: 9000,
          isClosable: true,
        })
        await setUser(user.user)
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
    <div className="h-screen flex items-center justify-center">
        <div className='rounded-lg drop-shadow-2xl bg-slate-50 p-10 w-max'>
          <div className="flex flex-col items-center justify-center align-middle my-3">
            <img src={Logo} alt='logo' height={170} width={170} className='rounded-full mr-3 p-2' />
            <h1 className='text-start text-2xl font-bold mx-3'>Register...</h1>
          </div>
          <form method="post">
            <TextField name="Name of Participant 1" nameValue="name1" val={authDetails.name1} onChange={onChange} />
            <TextField name="Name of Participant 2" nameValue="name2" val={authDetails.name2} onChange={onChange} />
            <TextField name="Email address" nameValue="email" val={authDetails.email} onChange={onChange} />
            <TextField name="Password" nameValue="password" val={authDetails.password} onChange={onChange} />
            <div className="container center my-4 flex justify-center">
              <Button type='submit' className="rounded bg-orange-300 p-2" onClick={handleSubmit}>Register</Button>
            </div>
          </form>
          <div className="redirectText flex justify-center">
            <button className='text-center text-gray-900 ' onClick={props.onTap} >Login?Click here</button>
          </div>
        </div>
    </div>
  )
}

export default SignUpPage