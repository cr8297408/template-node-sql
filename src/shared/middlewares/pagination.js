async function findPagination(tablename,sequelize, sizeAsNumber,pageAsNumber, wherecond){
  try {
    let page = 0;
    if (!Number.isNaN(pageAsNumber) && pageAsNumber > 0 ) {
        page = pageAsNumber - 1;
    }

    let size = 10;
    if (!Number.isNaN(sizeAsNumber) && sizeAsNumber > 0 && sizeAsNumber <= 10) {
        size = sizeAsNumber;
    }
    // if (sizeAsNumber > 10 ) {
    //   size = 10;
    // }
    const offset = page*size;
    if(wherecond){
      const array = wherecond.split('=')
      if (array.length < 2) {
        const pages = await sequelize.query(`SELECT * FROM ${tablename} WHERE ${wherecond} LIMIT ${offset},${size}`)
      return pages[0]
      } else {
        const condition = `${array[0]}='${array[1]}'`
        const pages =  await sequelize.query(`SELECT * FROM ${tablename} WHERE ${condition} LIMIT ${offset},${size}`)
        return pages[0]
      }
    }
    const pages = await sequelize.query(`SELECT * FROM ${tablename} LIMIT ${offset},${size}`)
    return pages[0];

  } catch (error) {
      throw new Error(error.message);
  }
}

module.exports = findPagination;