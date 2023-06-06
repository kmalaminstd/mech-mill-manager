import { useState } from 'react'
import logo from '../stat-images/logo.jpg'
import * as yup from 'yup'
import {useForm} from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

const schema = yup.object({
    firstname: yup.string().required().min(2, 'length must be 2 or more'),
    lastname: yup.string().required().min(2, 'length must be 2 or more'),
    username: yup.string().required().min(5, 'length must be 5 or more'),
    email: yup.string().required().email('Must be a valid email address'),
    phonenumber: yup.string().required().min(11, 'Phone number must be 11 digit').max(11, 'Phone Number should be more them 11'),
    password: yup.string().required().min(8, 'length must be 8 or more'),
    confirmpassword: yup.string().required().oneOf([yup.ref('password')], 'Conform password does not match').min(8, 'Password must be 8 or more')
  })




function Register() {
    const [data, setData] = useState({})
    const [changeData, setChangeData] = useState('')
  
    const { register, handleSubmit, formState:{errors}} = useForm({
      resolver: yupResolver(schema)
    })
    
  
    const onSubmit = (e)=>{
        setData(e)
        console.log(data);
    }

    const btnChanger = (e)=>{
        setChangeData(
          {
            ...changeData,
            [e.target.name]: e.target.value
          }
        )
    }
    
    // console.log(!!changeData.username && !!changeData.password);

  return (
    <>  
        <div className="regPage">

            <h1>Mech Mill Manager</h1>
            <p style={{textAlign: 'center', fontSize: '21px', fontWeight: '200', color: '#00aeff'}}>Register</p>

            <div className="logo">
                <img src={logo} alt="logo or image" />
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>

                <input type="text" name="firstname" placeholder="First Name" value={data.firstname} {...register('firstname')} onChange={btnChanger} />
                <p style={{color: 'red', width: '90%', marginLeft: '5%'}}>{!changeData.firstname && errors?.firstname?.message}</p>
               

                <input type="text" name="lastname" placeholder="Last Name" value={data.lastname} {...register('lastname')} onChange={btnChanger} />
                <p style={{color: 'red', width: '90%', marginLeft: '5%'}}>{!changeData.lastname && errors?.lastname?.message}</p>
          
                <input type="text" name="username" placeholder="User Name" value={data.username} {...register('username')} onChange={btnChanger} />
                <p style={{color: 'red', width: '90%', marginLeft: '5%'}}>{!changeData.username && errors?.username?.message}</p>

                <input type="tel" name="phonenumber" placeholder="Enter Phone Number" value={data.phonenumber} {...register('phonenumber')} onChange={btnChanger} />
                <p style={{color: 'red', width: '90%', marginLeft: '5%'}}>{!changeData.phonenumber && errors?.phonenumber?.message}</p>

                <input type="email" name="email" placeholder="Email Address" value={data.email} {...register('email')} onChange={btnChanger} />
                <p style={{color: 'red', width: '90%', marginLeft: '5%'}}>{!changeData && errors?.email?.message}</p>
                


                <select name="gender" defaultValue={data.gender} onChange={btnChanger} id="gender" {...register('gender', {required: 'Please select your profession'})}>
                    <option value="male">Male</option>
                    <option value="emale">Female</option>
                    <option value="other">Other</option>
                </select>

                <input type="password" name="password" placeholder="Password" value={data.password} {...register('password')} onChange={btnChanger} />
                <p style={{color: 'red', width: '90%', marginLeft: '5%'}}>{!changeData.password && errors?.password?.message}</p>

                <input type="password" name="confirmpassword" placeholder="Confirm Password" value={data.confirmpassword} {...register('confirmpassword')} onChange={btnChanger} />
                <p style={{color: 'red', width: '90%', marginLeft: '5%'}}>{errors?.confirmpassword?.message}</p>

                <button type='submit'>Register</button>
            </form>


        </div>
    </>
  )
}

export default Register