import * as firebase from 'firebase';
import fb from '../services/firebase';
import { User } from '../model/user';

let id = 0;

export const register = async (reg_email, reg_username, reg_pass) => {

  try {
    const fbUser = await firebase.auth().createUserWithEmailAndPassword(reg_email, reg_pass);

    const user = new User({
      email: fbUser.email,
      username: reg_username
    });

    return user;
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

  //
  // const user = {
  //   log_email,
  //   log_password
  // };
  // return new Promise((resolve, reject) => {
  //   firebase.database().ref(FIREBASE_DB_NAME + '/' + id).set({
  //     log_email, log_password
  //   }, error => {
  //     if (error) {
  //       reject(error);
  //     } else {
  //       resolve(user);
  //     }
  //   });
  //   console.log('3. dodje do promisa register.. ');
  // });
};

export const logout = async () => {
  await firebase.auth().signOut();
};
