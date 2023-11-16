import API from "./index.js";

export const getUserSchedules = () => API.get('/schedules')
export const insertSchedule = (scheduleData) => API.post('/schedules')
export const validityCehck = (scheduleData) => API.post('/schedule/verify')