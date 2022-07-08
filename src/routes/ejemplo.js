const { Router } = require('express');
const { EjemploComponent } = require('../components');

const router = Router();

/**
 * @swagger
 *  /v1/Ejemplos:
 *      get:
 *          summary: get all the Ejemplos;
 *          tags: ["Ejemplos"]
 *          responses:
 *              200:
 *                  description: get Ejemplos successfully 
 *                  content:
 *                      application/json:
 *                          squema:
 *                              type: array
 *                              items:
 *                                  $ref: '#/components/schemas/Ejemplos'
 *              401:
 *                  description: error in get Ejemplos
 */
 router.get('/', EjemploComponent.findAll)

 /**
  * @swagger
  *  /v1/Ejemplos/{id}:
  *      get:
  *          summary: get one Ejemplo by id
  *          tags: ["Ejemplos"]
  *          responses:
  *              200:
  *                  description: get Ejemplo succefully  
  *              401:
  *                  description: user not authorized to get Ejemplo
  *          parameters: [
  *           {
  *              name: id,
  *              in: path,
  *              description: id of the Ejemplo,
  *              required: true,
  *              schema: {
  *                  type: string
  *              }
  *           },
  *          ]
  */
 
 router.get('/:id', EjemploComponent.findOne);
 
 /**
  * @swagger
  *  /v1/Ejemplos/{id}:
  *      delete:
  *          summary: delete a Ejemplo
  *          tags: ["Ejemplos"]
  *          responses:
  *              200:
  *                  description: Ejemplo deleted succesfully
  *              401:
  *                  description: user not authorized to delete Ejemplos
  *          parameters: [
  *           {
  *              name: id,
  *              in: path,
  *              description: id of the Ejemplo,
  *              required: true,
  *              schema: {
  *                  type: string,
  *              }
  *           },
  *          ]
  */
 router.delete('/:id', EjemploComponent.deleteOne);
 
 /**
  * @swagger
  *  /v1/Ejemplos/{id}:
  *      put:
  *          summary: put Ejemplo in the DB
  *          tags: ["Ejemplos"]
  *          requestBody:
  *              required: true
  *              content:
  *                  application/json:
  *                      schema:
  *                           $ref: '#/components/schemas/Ejemplos'
  *          responses:
  *              200:
  *                  description: update Ejemplo successfully
  *              401:
  *                  description: user not authorized to update Ejemplos
  *          parameters: [
  *           {
  *              name: id,
  *              in: path,
  *              description: id of the Ejemplo,
  *              required: true,
  *              schema: {
  *                  type: string,
  *              }
  *           },
  *          ]
  */
 
 router.put('/:id', EjemploComponent.updateOne);
 
 /**
  * @swagger
  *  /v1/Ejemplos:
  *      post:
  *          summary: added a Ejemplo
  *          tags: ["Ejemplos"]
  *          requestBody:
  *              required: true
  *              content:
  *                  application/json:
  *                      schema:
  *                          $ref: '#/components/schemas/Ejemplos'
  *          responses:
  *              200:
  *                  description: Ejemplo add successfully
  *              401:
  *                  description: user not authorized to add Ejemplos
  */
 router.post('/', EjemploComponent.create)
 
 /**
  * @swagger
  * tags:
  *  name: Ejemplos
  *  description: endpoints for managing api Ejemplos.
  * components:
  *  schemas:
  *      Ejemplos:
  *          type: object
  *          required:
  *              -name
  *          properties:
  *              id:
  *                  type: string
  *              name:
  *                  type: string,
  *              description:
  *                  type: string,
  *              correo:
  *                  type: string,
  *          example:
  *              name: unit prueba
  *              description: unit prueba
  *              correo: correo@prueba.mail.com
  *      Error:    
  *          type: object
  *          required:
  *              -status
  *              -message
  *          properties:
  *              status: 
  *                  type: integer
  *                  description: HTTP status code
  *                  example: 400
  *              message:
  *                  type: string
  *                  description: Error description
  *                  example: entity no created
  */
 
 module.exports = router;