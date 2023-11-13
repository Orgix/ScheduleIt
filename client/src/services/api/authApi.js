import API from "./index.js";

export const signIn = (formData) => API.post('/auth/signin', formData);
export const signUp = (formData) => API.post('/auth/signup', formData);
export const signOut = () => API.post('/auth/logout');