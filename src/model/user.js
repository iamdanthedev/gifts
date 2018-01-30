import fb from '../services/firebase';

/**
 * User Class
 * @class
 */
export class User {

  /**
   * Instantiates a user object
   * @param data
   */
  constructor(data) {
    /**
     * User uid (firebase uid)
     * @type {*|string|number}
     */
    this.uid = data.uid;

    /**
     * User email
     * @type {string}
     */
    this.email = data.email;

    /**
     * User name
     * @type {string}
     */
    this.username = data.username;
  }


  async save() {

    if (!this.uid) {
      throw new Error('missing user id');
    }

    try {
      // data to write
      const data = {
        username: this.username
      };

      // set
      await fb.users.ref(this.uid).set(data)
    }
    catch(e) {
      // TODO: log error
      return Promise.reject(e);
    }


  }
}
