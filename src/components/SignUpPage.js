import React, { useState } from 'react'
import TextField from '../common/TextField'
import Logo from '../assets/logo.jpg'
import { useAuthContext } from '../context/auth_context'
import { Button, useToast } from '@chakra-ui/react'

const SignUpPage = (props) => {

  const [authDetails,setAuthDetails] = useState({name:"",email:"",password:""})

  const onChange = (e) =>{
    setAuthDetails({...authDetails,[e.target.name] :e.target.value})
  }

  const toast = useToast()

  const {createAuthUser, setUser} = useAuthContext()

  const handleSubmit = async(e) =>{
    e.preventDefault()
    const name = authDetails.name.trim()
    const email = authDetails.email.trim()
    const password = authDetails.password.trim()

    if (name !== "" && email !== "" && password !== ""){
      const user = await createAuthUser(name, email, password)
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
    <div className="center my-24 w-1/3" >
        <div className='rounded-lg drop-shadow-2xl bg-slate-50 p-10'>
          <div className="flex flex-col justify-center align-middle my-3">
            <img src={Logo} alt='logo' height={170} width={170} className='rounded-full mr-3 p-2' />
            <h1 className='text-start text-2xl font-bold mx-3'>Register...</h1>
          </div>
          <form method="post">
            <TextField name="Name" nameValue="name" val={authDetails.name} onChange={onChange} />
            <TextField name="Email address" nameValue="email" val={authDetails.email} onChange={onChange} />
            <TextField name="Password" nameValue="password" val={authDetails.password} onChange={onChange} />
            <div className="container center my-4 flex justify-center">
              <Button className="rounded bg-orange-300 p-2" onClick={handleSubmit}>Register</Button>
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