// Given a date return the Monday of that week
const getMonday = (date) => {
    date = new Date(date);
    var day = date.getDay(),
        diff = date.getDate() - day + (day == 0 ? -6:1); // adjust when day is sunday
    return new Date(date.setDate(diff));
}

export default getMonday;