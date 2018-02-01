import firebase from 'firebase';

export const register = async (reg_email, reg_username, reg_pass) => {

  try {
    const user = await firebase.auth().createUserWithEmailAndPassword(reg_email, reg_pass);

    if (!user) {
      return Promise.reject('Unknown error');
    }

    const userInfo = {
      email: reg_email,
      username: reg_username
    };

    await firebase.database().ref(`users/${user.uid}`).set(userInfo);
  }
  catch (e) {
    // TODO: log error
    return Promise.reject(e);
  }
};

export const login = async (log_email, log_password) => {

  try {
    await firebase.auth().signInWithEmailAndPassword(log_email, log_password);
  }
  catch(e) {
    return Promise.resolve(e);
  }
};

export const logout = async () => {
  await firebase.auth().signOut();
};
