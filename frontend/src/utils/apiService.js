// import axios from "axios";

// const backendUrl = "http://localhost:3000";

// const apiservice = axios.create({
//   baseURL: backendUrl,
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// // Add request interceptor for auth token
// api.interceptors.request.use((config) => {
//   const token = localStorage.getItem("token");
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });

// // Categories
// export const getCategories = () => api.get('/categories');
// export const getCategoryCount = () => api.get('/categories/count');
// export const createCategory = (name) => api.post('/categories', { name });

// // News
// export const getAllNews = () => api.get('/news');
// export const getNewsCount = () => api.get('/news/count');
// export const getNewsByCategory = (categoryId) => api.get(`/news?categoryId=${categoryId}`);
// export const createNews = (formData) => api.post('/news/create', formData, {
//   headers: {
//     'Content-Type': 'multipart/form-data',
//   },
// });

// // Auth
// export const login = (email, password) => api.post('/users/login', { email, password });

// export default apiservice;
// import axios from "axios";

// const backendUrl = "http://localhost:3000";

// export const fetchNewsByCategory = (category) => {
//   return axios.get(`${backendUrl}/news/${category}`).then((res) => res.data);
// };
