const registerUser = (state = {
	users: []
}, action) => {
	switch (action.type) {
		case 'REGISTER_USER':
			return {
				...state,
				users: [
					...state.users, {
						'reg_email': action.reg_email,
						'reg_username': action.reg_username,
            'reg_pass': action.reg_pass
					}
				]
			}

		default:
			return state
	}
}
export default registerUser
