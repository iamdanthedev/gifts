
const users = (state = { users: [], tempUser: {} }, action) => {
  switch (action.type) {
    case 'INPUT_CHANGE':
      return { ...state, tempUser: { ...state.tempUser, [action.name]: action.value } }
    case 'ADD_USER':
        return {
          ...state, users: [...state.users, state.tempUser]
        }
    default:
      return state
    }
}
export default users
