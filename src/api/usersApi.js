import firebase from 'firebase';
import uniq from 'lodash.uniq';

/**
 * Register user
 * @param reg_email
 * @param reg_username
 * @param reg_pass
 * @returns {Promise<never>}
 */
export const register = async (reg_email, reg_username, reg_pass) => {
  try {
    const user = await firebase
      .auth()
      .createUserWithEmailAndPassword(reg_email, reg_pass);

    if (!user) {
      return Promise.reject('Unknown error');
    }

    const userInfo = {
      email: reg_email,
      username: reg_username,
    };

    await firebase
      .database()
      .ref(`users/${user.uid}`)
      .set(userInfo);
  } catch (e) {
    // TODO: log error
    return Promise.reject(e);
  }
};

/**
 * Login with password
 * @param log_email
 * @param log_password
 * @returns {Promise<any>}
 */
export const login = async (log_email, log_password) => {
  try {
    await firebase.auth().signInWithEmailAndPassword(log_email, log_password);
  } catch (e) {
    return Promise.resolve(e);
  }
};

/**
 * Logout
 * @returns {Promise<void>}
 */
export const logout = async () => {
  await firebase.auth().signOut();
};

