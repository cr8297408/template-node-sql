const Joi = require('joi');
const Ejemplo = require('./model');

/**
 * @export
 * @class EjemploValidation
 * 
 */
class EjemploValidation {
    /**
     * create an instance of EjemploValidation
     * @memberof EjemploValidation
     * @param {Ejemplo}
     * @returns {Joi.validationResult}
     */

    createEjemplo(body){
      const schema = Joi.object().keys({
        name: Joi.string().required(),
        description: Joi.string(),
        correo: Joi.string()
      })

      return schema.validate(body)
    }

    /**
     * @param {{ id: string }} body
     * @returns {Joi.ValidationResult<{ id: string }>}
     * @memberof UserValidation
     */
     getEjemplo(id) {
      const schema = Joi.string().required();

      return schema.validate(id);
  }
}
module.exports = new EjemploValidation();