const __name__Service = require('./service');


async function findAll(req, res, next) {
  try {
    const __name__s = await __name__Service.findAll()
    res.status(200).json(__name__s)
  } catch (error) {
    res.json(error.message)
  }
}

async function create(req, res, next){
  try {
    const __name__ = await __name__Service.create(req.body);
    res.status(201).json(__name__)
  
  } catch (error) {
    res.json(error.message)
  }
}


module.exports = {
  findAll,
  create
}