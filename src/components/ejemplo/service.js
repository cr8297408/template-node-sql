const db = require('../../config/connection/connectBd');
const EjemploValidation = require('./validation');
const Ejemplo = require('./model');
const Pagination = require('../../shared/middlewares/pagination')
const permissions = require('../../shared/middlewares/permissions')

sequelize = db.sequelize;

/**
 * @exports
 * @implements {Ejemplo} model
 */
const EjemploService = {
  /**
   * @exports
   * @implements {Ejemplo} model
   * @description get all Ejemplos 
   */
  async findAll(bearerHeader){
    try {
      const validatePermission = await permissions(bearerHeader, 'FIND_ALL')
      if (validatePermission) {
        const Ejemplos = await Ejemplo.findAll()
        return Ejemplos;
      } 
      return {
        message: 'no tienes permisos para esta acción',
        status: 401
      }
    } catch(error) {
      throw new Error(error.message)
    }
  },

  
  /**
   * @exports
   * @param {*} body
   * @implements {Ejemplo} model 
   */
  async create(bearerHeader, body) {
    try {
      const validatePermission = await permissions(bearerHeader, 'CREATE')
      if (validatePermission) {
        const validate = EjemploValidation.createEjemplo(body);
        if (validate.error) {
          throw new Error(validate.error)
        }
  
        const createEjemplo = await Ejemplo.create(body);
        return createEjemplo;
      } 
      return {
        message: 'no tienes permisos para esta acción',
        status: 401
      }
      
    } catch (error) {
      throw new Error(error.message)
    }
  },

  /**
   * @exports
   * @implements {Ejemplo} model
   */

  async findOne(bearerHeader, id){
    try {
      const validatePermission = await permissions(bearerHeader, 'FIND_ONE')
      if (validatePermission) {
        const validate = EjemploValidation.getEjemplo(id);
        if (validate.error) {
          throw new Error(validate.error)
        }
        const getEjemplo = await Ejemplo.findByPk(id)
        return getEjemplo;
      } 
      return {
        message: 'no tienes permisos para esta acción',
        status: 401
      }
    } catch (error) {
      throw new Error(error.message)
    }
  },
  /**
   * @exports
   * @param {*} id
   * @implements {Ejemplo} model
   */
  async delete(bearerHeader, id){
    try {
      const validatePermission = await permissions(bearerHeader, 'DELETE')
      if (validatePermission) {
        const validate = await EjemploValidation.getEjemplo(id)

        if (validate.error) {
          throw new Error(validate.error)
        }

        const getEjemplo = await Ejemplo.findByPk(id);
        let verificateUser = 'https://google.com'
        let contactLink = config.CONTACT_LINK;
  
        const emailFrom = config.MAIL_USER;
        const emailTo = body.email;
        const subject = 'Registro en Pos API'
        const textPrincipal = `te has registrado correctamete a conexion Pos, porfavor verifica tu cuenta en el siguiente link...`
        const html = TemplateSign(textPrincipal, body.username, verificateUser, contactLink)
        await sendMail('syscomp', emailFrom, emailTo, subject,html)
        await getEjemplo.destroy()

        return getEjemplo;
        
      } 
      return {
        message: 'no tienes permisos para esta acción',
        status: 401
      }
    } catch (error) {
      throw new Error(error)
    }
  },

  /**
   * @exports
   * @param {*} id 
   * @param {*} body 
   * @description update a Ejemplo in the db
   */
  async update(bearerHeader, id, body){
    try {
      const validatePermission = await permissions(bearerHeader, 'UPDATE')
      if (validatePermission) {
        
        const validateid = await EjemploValidation.getEjemplo(id);
        
        if (validateid.error) {
          throw new Error(validate.error)
        }
  
        const validateBody = await EjemploValidation.createEjemplo(body)
        if (validateBody.error) {
          throw new Error(validate.error)
        }
        const newEjemplo = await Ejemplo.update(
          {
            name: body.name,
            description: body.description,
            correo: body.correo 
          },
          {where: {id}}
        )
  
        return newEjemplo;
        
      } 
      return {
        message: 'no tienes permisos para esta acción',
        status: 401
      }
    } catch (error) {
      
    }
  },

  async findPagination(bearerHeader, sizeAsNumber, pageAsNumber, wherecond){
    try {
      const validatePermission = await permissions(bearerHeader, 'FIND_PAGINATION')
      if (validatePermission) {
        const Ejemplos = await Pagination('Ejemplos',sequelize,sizeAsNumber, pageAsNumber, wherecond)
        return Ejemplos
      } 
      return {
        message: 'no tienes permisos para esta acción',
        status: 401
      }
    } catch (error) {
        throw new Error(error.message);
    }
  },
}

module.exports = EjemploService;