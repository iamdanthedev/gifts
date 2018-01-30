import * as firebase from 'firebase'
const FIREBASE_DB_NAME = '/users';

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDOmyk0c2aEfVLoevdihwbcCUmWarQHQmQ",
  authDomain: "eventplanner-13e0d.firebaseapp.com",
  databaseURL: "https://eventplanner-13e0d.firebaseio.com",
  projectId: "eventplanner-13e0d",
  storageBucket: "",
  messagingSenderId: "714064956270"
}
firebase.initializeApp(firebaseConfig);

let id = 0;

export const register = (id, reg_email, reg_username, reg_pass) => {
  const user = {
    id,
    reg_email,
    reg_username,
    reg_pass
  };
  id++;
  return new Promise((resolve, reject) => {
    firebase.database().ref(FIREBASE_DB_NAME + '/' + id).set({
      id, reg_email, reg_username, reg_pass
    }, error => {
      if (error) {
        reject(error);
      } else {
        resolve(user);
      }
    });
    console.log('3. dodje do promisa register.. ');
  });
  // firebase.auth().createUserWithEmailAndPassword(reg_email, reg_pass).catch(function(error) {
  // // Handle Errors here.
  // console.log('udje u autch');
  // // ...
  // 	});
};

export const login = (log_email, log_password) => {
  const user = {
    log_email,
    log_password
  };
  return new Promise((resolve, reject) => {
    firebase.database().ref(FIREBASE_DB_NAME + '/' + id).set({
      log_email, log_password
    }, error => {
      if (error) {
        reject(error);
      } else {
        resolve(user);
      }
    });
    console.log('3. dodje do promisa register.. ');
  });
}
