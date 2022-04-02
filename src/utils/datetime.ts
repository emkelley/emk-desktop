import lightFormat from "date-fns/lightFormat";

const time = new Date();
const hours = time.getHours() % 12 ? time.getHours() : 12;
const ampm = hours >= 12 ? "PM" : "AM";

let currentTime = `${lightFormat(new Date(), "H:mm")} ${ampm}`;
let currentDate = lightFormat(new Date(), "M/d/yyyy");

const getCurrentTime = () => currentTime;
const getCurrentDate = () => currentDate;

export { getCurrentTime, getCurrentDate };
