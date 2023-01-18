let itemList = [];
let id = 0;

function add(item) {
    id++;
    item.id = id;
    itemList.push(item);

    return item;
}

function getAll() {
    return itemList;
}

function getItem(id) {
    const item = itemList.find((item) => item.id == id);

    return item;
}

function updateItem(item) {
    const index = itemList.findIndex((itemList) => itemList.id == item.id);

    if (index >= 0) {
        itemList[index].name = item.name;
        itemList[index].value = item.value;

        return itemList[index];
    }

    throw new Error('Item não encontrado');
}

function deleteItem(id) {
    itemList = itemList.filter((itemList) => itemList.id != id);
}

module.exports = {
    add,
    getAll,
    getItem,
    updateItem,
    deleteItem
};