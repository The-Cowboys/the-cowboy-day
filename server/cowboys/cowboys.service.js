const pool = require('./../database');

const crypto = require('crypto');
const hash = crypto.createHash('sha256');

function generateDay() {
  // Get current date in "YYYY-MM-DD" format
  const currentDate = new Date().toISOString().slice(0, 10); 
  return currentDate;
}

function generateIntegerForDay(currentDate, listLength) {
  const seed = `${currentDate}${listLength}`; 
  const hash = hash.update(seed).digest('hex');
  return parseInt(hash.slice(0, 8), 16);
}

function getPuto(putos, generatedInteger) {
  return putos[generatedInteger % putos.length];
}

async function getAll() {
  pool.query("SELECT * FROM cowboys ORDER BY name", (error, results) => {
    if (error) {
      throw error;
    }

    return results.rows;
  });
}

async function getToday() {
  pool.query("SELECT * FROM cowboys ORDER BY name", (error, results) => {
    if (error) {
      throw error;
    }

    const putos = results.rows;

    const date = generateDay();
    const generatedInteger = generateIntegerForDay(date, putos.length);
    const todayPuto = getPuto(putos, generatedInteger);

    return todayPuto;
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