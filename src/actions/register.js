let nextUserId = 0

export const addUser = () => ({
  type: 'ADD_USER',
  id: nextUserId++
})
