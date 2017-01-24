function createApi(rootRoute, initialItems) {
    let currentId = 0;
    const itemIds = [];
    const itemsById = new Map();

    const getAllRoute = rootRoute;
    const getByIdRoute = `${rootRoute}/:id`;

    function getById(req, res) {
        const numericId = parseInt(req.params.id, 10);
        res.send(itemsById.get(numericId));
    }

    function getAll(req, res) {
        res.send([...itemsById.values()]);
    }

    function addItem(item) {
        itemIds.push(item.id);
        itemsById.set(item.id, item);
    }

    function addIdToItem(item) {
        item.id = getNewId();
        return item;
    }

    function getNewId() {
        const newId = currentId;
        currentId += 1;
        return newId;
    }

    function preseedItems(items) {
        items.map(addIdToItem).forEach(addItem);
    }

    preseedItems(initialItems);

    return {
        getById,
        getAll,
        getAllRoute,
        getByIdRoute,
    };
}

module.exports = createApi;