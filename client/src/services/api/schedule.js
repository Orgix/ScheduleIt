import API from "./index.js";

export const getUserSchedules = () => API.get('/schedules')
export const insertSchedule = (scheduleData) => API.post('/schedules')