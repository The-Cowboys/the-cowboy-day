const pool = require("./../database");

const crypto = require("crypto");

function generateDay() {
  // Get current date in "YYYY-MM-DD" format
  const currentDate = new Date().toISOString().slice(0, 10);
  return currentDate;
}

function generateIntegerForDay(currentDate, listLength) {
  const seed = `${currentDate}${listLength}`;
  const hash = crypto.createHash("sha256").update(seed).digest("hex");
  return parseInt(hash.slice(0, 8), 16);
}

function getPuto(putos, generatedInteger) {
  return putos[generatedInteger % putos.length];
}

async function getAll() {
  return new Promise((resolve, reject) => {
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

module.exports = {
  getAll,
  getToday,
};
