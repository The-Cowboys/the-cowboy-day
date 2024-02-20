const pool = require('./../database');

const crypto = require('crypto');

function generateDay() {
  // Get current date in "YYYY-MM-DD" format
  const currentDate = new Date().toISOString().slice(0, 10); 
  return currentDate;
}

function generateIntegerForDay(currentDate, listLength) {
  const seed = `${currentDate}${listLength}`; 
  const hash = crypto.createHash('sha256').update(seed).digest('hex');
  return parseInt(hash.slice(0, 8), 16);
}

function getPuto(putos, generatedInteger) {
  return putos[generatedInteger % putos.length];
}

async function getAll() {
  return new Promise((resolve, reject) => {+
    pool.query("SELECT * FROM cowboys ORDER BY name", (error, results) => {
      if (error) {
        return reject(error);
      }
  
      resolve(results.rows);
    });
  });
}

async function getToday() {
  return new Promise((resolve, reject) => {
    pool.query("SELECT * FROM cowboys ORDER BY name", (error, results) => {
      if (error) {
        return reject(error);
      }
  
      const putos = results.rows;
  
      const date = generateDay();
      const generatedInteger = generateIntegerForDay(date, putos.length);
      const todayPuto = getPuto(putos, generatedInteger);
  
      resolve(todayPuto);
    });

  });

  
}

async function getMultiple(page = 1){
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    `SELECT id, name, released_year, githut_rank, pypl_rank, tiobe_rank 
    FROM programming_languages LIMIT ?,?`, 
    [offset, config.listPerPage]
  );
  const data = helper.emptyOrRows(rows);
  const meta = {page};

  return {
    data,
    meta
  }
}

async function create(programmingLanguage){
  const result = await db.query(
    `INSERT INTO programming_languages 
    (name, released_year, githut_rank, pypl_rank, tiobe_rank) 
    VALUES 
    (?, ?, ?, ?, ?)`, 
    [
      programmingLanguage.name, programmingLanguage.released_year,
      programmingLanguage.githut_rank, programmingLanguage.pypl_rank,
      programmingLanguage.tiobe_rank
    ]
  );

  let message = 'Error in creating programming language';

  if (result.affectedRows) {
    message = 'Programming language created successfully';
  }

  return {message};
}

async function update(id, programmingLanguage){
  const result = await db.query(
    `UPDATE programming_languages 
    SET name=?, released_year=?, githut_rank=?, 
    pypl_rank=?, tiobe_rank=? 
    WHERE id=?`, 
    [
      programmingLanguage.name, programmingLanguage.released_year,
      programmingLanguage.githut_rank, programmingLanguage.pypl_rank,
      programmingLanguage.tiobe_rank, id
    ]
  );

  let message = 'Error in updating programming language';

  if (result.affectedRows) {
    message = 'Programming language updated successfully';
  }

  return {message};
}

async function remove(id){
  const result = await db.query(
    `DELETE FROM programming_languages WHERE id=?`, 
    [id]
  );

  let message = 'Error in deleting programming language';

  if (result.affectedRows) {
    message = 'Programming language deleted successfully';
  }

  return {message};
}

module.exports = {
  getAll,
  getToday,



  getMultiple,
  create,
  update,
  remove
}