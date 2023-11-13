import API from "./index.js";

export const getUserSchedules = () => API.get('/schedules')