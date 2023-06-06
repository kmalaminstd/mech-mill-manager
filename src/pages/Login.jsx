import { useState } from 'react'
import logo from '../stat-images/logo.jpg'
import * as yup from 'yup'
import {useForm} from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

const schema = yup.object({
  username: yup.string().required().min(5, 'length must be 5 or more'),
  password: yup.string().required().min(8, 'length must be 8 or more')
})

function Login() {

  const [data, setData] = useState('')
  const [changeData, setChangeData] = useState('')

  const { register, handleSubmit, formState:{errors}} = useForm({
    resolver: yupResolver(schema)
  })
  

  const onSubmit = (e)=>{
    // console.log(e);
    console.log(errors)
    setData(e)
  }

  const btnChanger = (e)=>{
    setChangeData(
      {
        ...changeData,
        [e.target.name]: e.target.value
      }
    )
  }

  console.log(!!changeData.username && !!changeData
    .password);

  return (
    <>
      <div className="login-page">
        <h1>Mech Mill Manager</h1>
        <p style={{textAlign: 'center', fontSize: '21px', fontWeight: '200', color: '#00aeff'}}>Login</p>

        <div className="logo">
          <img src={logo} alt="logo or image" />
        </div>


        <form onSubmit={handleSubmit(onSubmit)}>
          
            <input type="text" name="username" placeholder="User Name" value={data.username} {...register('username')} onChange={btnChanger} />
          
            <input type="password" name="password" placeholder="Password" value={data.password} {...register('password')} onChange={btnChanger} />
 
            <a className="forgotpasslink" href="#">Forgot login password?</a>

            <button type='submit' disabled={!changeData.username || !changeData.password ? true : false}>Login</button>
        </form>
        <button id="createAccBtn">Create New Account</button>

        <div className="lang-sec" style={{textAlign
        : 'center', marginTop: '20px'}}>
          <p><b>Language: </b> English</p>
        </div>
      </div>
    </>
  )
}

export default Login