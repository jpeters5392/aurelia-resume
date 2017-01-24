export function sortByBeginDate(item1, item2) {
    const item1Dates = item1.beginDate.split('/').map((number) => parseInt(number, 10));
    const item2Dates = item2.beginDate.split('/').map((number) => parseInt(number, 10));
    // check if the year is older or newer
    if (item1Dates[1] < item2Dates[1]) {
        return 1;
    } else if (item1Dates[1] > item2Dates[1]) {
        return -1;
    }

    // if the years are the same then check the months
    if (item1Dates[0] < item2Dates[0]) {
        return 1;
    } else if (item1Dates[0] > item2Dates[0]) {
        return -1;
    }

    // keep them as-is
    return 0;
}