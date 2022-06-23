function initState() {
  if (!localStorage.getItem("camisas")) {
    setData("camisas");
    setData("calcas");
    setData("shorts");
    setData("meias");
    setData("acessorios");
  }
}
function setData(type, data = []) {
  localStorage.setItem(type, JSON.stringify(data));
}
function addItem(type, item) {
  const items = getState(type);
  items.push(item);
  localStorage.setItem(type, JSON.stringify(items));
}
function editItem(item, type) {
  const items = getState(type);
  const index = { item };
  delete item.index;
  items.splice(index, 1, item);
  localStorage.setItem(type, JSON.stringify(items));
}
function deleteItem(type, index) {
  const items = getState(type);
  items.splice(index, 1);
  localStorage.setItem(type, JSON.stringify(items));
}
function getState(type) {
  return JSON.parse(localStorage.getItem(type));
}
module.exports = {
  initState,
  getState,
  addItem,
  editItem,
  deleteItem,
};
