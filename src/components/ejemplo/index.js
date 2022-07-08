const EjemploService = require('./service');


async function findAll(req, res, next) {
  try {
    const Ejemplos = await EjemploService.findAll(req.headers['authorization'])
    res.status(200).json(Ejemplos)
  } catch (error) {
    res.json(error.message)
  }
}

async function create(req, res, next){
  try {
    const getEjemplo = await EjemploService.create(req.headers['authorization'],req.body);
    res.status(201).json(getEjemplo)
  
  } catch (error) {
    res.json(error.message)
  }
}

async function findOne(req, res, next){
  try {
    console.log(req.params.id)
    const getEjemplo = await EjemploService.findOne(req.headers['authorization'],req.params.id)
    res.status(200).json(getEjemplo)
  } catch (error) {
    res.status(404).json(error.message)
  }
}

async function deleteOne(req, res, next){
  try {
    const Ejemplo = await EjemploService.delete(req.headers['authorization'],req.params.id)

    res.json(Ejemplo)
  } catch (error) {
    res.json(error.message)
  }
}

async function updateOne(req, res){
  try {
    const Ejemplo = await EjemploService.update(req.headers['authorization'],req.params.id, req.body)
    res.json(Ejemplo)
  } catch (error) {
    res.json(error.message)
  }
}

async function findpagination(req, res){
  try {
    const sizeAsNumber = Number(req.query.size);
    const pageAsNumber = Number(req.query.page);
    const where = req.body.where;
    const Ejemplos = await EjemploService.findPagination(req.headers['authorization'],sizeAsNumber, pageAsNumber, where);
    res.json(Ejemplos)    
  } catch (error) {
      throw new Error(error.message)
  }
}

module.exports = {
  findAll,
  create,
  findOne,
  deleteOne,
  updateOne,
  findpagination
}