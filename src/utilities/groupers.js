export function groupByProperty(items, key) {
    const categories = {};
    items.forEach((item) => {
        if (categories[item[key]]) {
            const items = categories[item[key]];
            items.push(item);
        } else {
            categories[item[key]] = [ item ];
        }
    });
    return categories;
}