import React from 'react';
import { NavLink,useLocation,useHistory } from 'react-router-dom';


import Googleicon from '../../../img/google.png'
import Githubicon from '../../../img/github.png'
;
import useAuth from '../../../Hook/useAuth';

const Login = () => {
	const {signInUsingGoolge,
		signInUsingGithub,
	
		error,
		setError,
		
		handelUserPassword,
		handleUserEmail,
		login}=useAuth()



let history=useHistory()
let location=useLocation()
const redirect_rui=location.state?.from || '/'

const googleHandeLogin=()=>{
	signInUsingGoolge()
	.then(result=>{
       history.push(redirect_rui)
    })
    .catch(error=>{
        setError(error.code)
    })
}

const githubHandeLogin=()=>{
	signInUsingGithub()
	.then(result2=>{
       history.push(redirect_rui)
    })
    .catch(error=>{
        setError(error.code)
    })
}
const HandeLogin=()=>{
	login()
	.then((userCredential) => {
		history.push(redirect_rui)
		setError('')
	  })
	  .catch(error=>{
		  setError(error.code)
	  })
	
}

    return (
        <div>
          <div className=" container mx-auto my-32 mx-auto grid md:grid-cols-2  justify-center items-center">
		<div className='ml-auto mb-6'>
<img  className='px-4' src={'Img'} alt="" />
		</div>
	<div className="md:ml-12 ">
		<div className="bg-white flex justify-center items-center">
			<div>
					<p className='text-red-500'>{error}</p>
				<from>
					<div>
						<span className="text-sm text-gray-900">Welcome back</span>
						<h1 className="text-2xl font-bold">Login to your account </h1>
					</div>
						<div className="my-3">
							<label className="block text-md mb-2" htmlFor="email">Email</label>
							<input onBlur={handleUserEmail} className="px-4 w-full border-2 py-2 rounded-md text-sm outline-none" type="email" placeholder="email"/>
        </div>
					<div className="mt-5">
						<label className="block text-md mb-2" htmlFor="password">Password</label>
						<input onBlur={handelUserPassword} className="px-4 w-full border-2 py-2 rounded-md text-sm outline-none" type="password" placeholder="********"/>
        </div>
						
		<button type='submit' onClick={HandeLogin}
		className="mt-4 mb-3 w-full bg-green-500 hover:bg-green-400 text-white py-2 rounded-md transition duration-100">Login now</button>
							
				</from>
				<p className=' text-xl text-green-400 text-center'>-- or --</p>
				<div className='mt-4 flex '>
					 <img onClick={googleHandeLogin} className='zoom-image duration-500 w-12 mx-3' src={Googleicon} alt="" />
					 <img onClick={githubHandeLogin} className='duration-500 w-12 h-12 mx-3 zoom-image' src={Githubicon} alt="" />
					 
				</div>


				<p className="mt-8"> Dont have an account? <NavLink className="cursor-pointer text-sm text-green-400" to='/register'> Join today</NavLink></p>
				<p className="mt-8"> Forgot your password? <NavLink className="cursor-pointer text-sm text-green-400" to='/forgotpassword'> Reset Password</NavLink></p>
			</div>
		</div>
	</div>
</div>
        </div>
    );
};

export default Login;