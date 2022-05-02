import React from 'react'
import useStore from '../useStore'
import {tips} from '../util'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

const Login = () => {
	const {call, update} = useStore()
	const updateStatus = (params: {[key: string]: string | number | boolean | Blob | any }) => setStates({ ...state, ...params })

	const [state, setStates] = React.useState({
		id : "",
		password:""
	})
	
	const submit = async() => {
		if(state.id.trim() === '') {tips("Invalid name"); return;}
		if(state.password === '') {tips("Invalid password"); return;}
		const response = await call("/admin/login", {id:state.id, password:state.password});
		if(response){
			switch(response['error']){
				case 0: tips("Success: Logined"); update({adminid:response['session'], adminname:state.id}); window.location.href = '/admin';  break; 
				case 1: tips("Error: Cannot found admin"); break; 
				case 2: tips("Error: Invalid password"); break; 
				default :  tips("Error: Unknown error"); break; 
				
			}
		}
	}
	
	return (
		<div className="pools">
				<Header type="login" />
				<div className="container" style={{minHeight:'70vh'}}>
						<div className="row center m3 p3">
							<div className="col-lg-6 col-sm-12">
								<div className="pool-details-card ">
									<h3 className='text-center'>Login</h3>
									<div className="row pl3 pr3">
										<p>Name</p>
										<input type="text" className='w100' value={state.id} onChange={(e)=> {updateStatus({id:e.target.value})}}/>
									</div>
									<div className="row pl3 pr3">
										<p>Password</p>
										<input type="text" className='w100' value={state.password} onChange={(e)=> {updateStatus({password:e.target.value})}}/>
									</div>
									<div className="row center mt3">
										<button className='btn-join active	w30' onClick={() => {submit()}}> Login </button>
									</div>
												
									<div className="row center mt3">
										<Link to="create-admin" style={{textDecoration:'underline'}}> Register </Link>
									</div>
								</div>
							</div>
						</div>
				</div>
				<Footer/>
		</div>
	)
}

export default Login
