const __name__ = require('./model');
const db = require('../../config/connection/connectBD');
const __name__Validation = require('./validation');

sequelize = db.sequelize;

/**
 * @exports
 * @implements {__name__} model
 */
const __name__Service = {
  async findAll(){
    try {
      const __name__s = await __name__.findAll()
      return __name__s;
    } catch(error) {
      throw new Error(error.message)
    }
  },

  /**
   * @exports
   * @param {*} body
   * @implements {__name__} model 
   */
  async create(body) {
    try {
      const validate = __name__Validation.create__name__(body);
      if (validate.error) {
        throw new Error(validate.error)
      }

      const __name__ = await __name__.create(body);
      return __name__;

    } catch (error) {
      throw new Error(error.message)
    }
  },


}

module.exports = __name__Service;