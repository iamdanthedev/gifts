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
}
