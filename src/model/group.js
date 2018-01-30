/**
 * Group Class
 * @class
 */
export class Group {
  /**
   * Instantiates a group object
   * @param {Object} data
   */
  constructor(data) {
    /**
     * Group owner
     * @type {string|null}
     */
    this.owner = data.owner || null;

    /**
     * Group name
     * @type {string}
     * @default ''
     */
    this.name = data.name || '';

    /**
     * Group description
     * @type {string}
     * @default ''
     */
    this.description = data.description || '';

    /**
     * Group event date
     * @type {number}
     * @default Date.now()
     */
    this.date = data.date || Date.now();

    /**
     * Gift's cost
     * @type {number}
     * @default 0
     */
    this.cost = data.cost || 0;
  }
}
