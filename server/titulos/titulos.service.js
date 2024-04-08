const repository = require("./titulos.repository");

async function deleteById(id) {
  return await repository.deleteById(id);
}

async function getAllByCowboyId(id) {
  return await repository.getAllByCowboyId(id);
}

async function saveTitulo(cowboyId, data) {
  return await repository.saveTitulo(cowboyId, data);
}

module.exports = {
  deleteById,
  getAllByCowboyId,
  saveTitulo,
};
