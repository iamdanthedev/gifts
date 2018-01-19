import React, {Component} from 'react';
import CustomInput from '../customInput'

import {connect} from 'react-redux'
import {addUser} from '../../actions/register.js'
import PropTypes from 'prop-types'

import styles from './style.css';

let Register = ({dispatch}) => {
	const handleChange = (name) => (e) => {
		console.log('handleChange a name je: ' + name );
			dispatch({
					type: 'INPUT_CHANGE',
					value: e.target.value,
					name: name
			})
	}
	const submitForm = (e) => {
			e.preventDefault();
			console.log('submit form function');
			dispatch({
					type: 'ADD_USER'
			})
	}

	return (
		<div className="max-w connect-wrap flex-property flex-center">
		<div className="login-content">
			<form className="div-wrap white-form white-box flex-property" onSubmit={submitForm}>

				<h4>Register in few clicks!</h4>
				<div className='inputs-column flex-property div-wrap'>
					<div className="form-input-elements">
						<CustomInput
							inputPlaceholder="Enter email"
							inputType="text"
							inputId="reg_email"
							onChangeValue={handleChange('reg_email')}/>
						<CustomInput
							inputPlaceholder="Enter password"
							inputType="password"
							inputId="reg_password"
							onChangeValue={handleChange('reg_password')}/>
						<CustomInput
							inputPlaceholder="Choose username"
							inputType="text"
							inputId="reg_username"
							onChangeValue={handleChange('reg_username')}/>
					</div>
				</div>
				<div className="buttons-row flex-property">
					<input className="button-font submit" type="submit" value="Register"/>
				</div>
			</form>
		</div>
	</div>)
}

Register = connect()(Register)
export default Register;
