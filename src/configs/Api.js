import axios from 'axios'
import cookies from 'react-cookies'

export const endpoints = {
    "buses": "/buses/",
    "routes": "/routes/",
    "ticketbooings": "/ticketbookings/",
    "categorys": "/categorys/",
    "seats": "/seats/",
    "routes_detail":  (routesId) => `/routes/${routesId}/`,
    "users":"/users/",
    "login": "/o/token/",
    "current-user": "/users/current-user/",
    // "like-lesson": (lessonId) => `/lessons/${lessonId}/like/`,
    // "lesson-comments": (lessonId) => `/lessons/${lessonId}/comments/`,
    "comments": "/comments/",
    "get-comments": "/routes/comments/"
}

export const authAxios = () => axios.create({
    baseURL: "http://127.0.0.1:8000/",
    headers: {
        'Authorization': `Bearer ${cookies.load('access_token')}`,
        "Content-Type": "multipart/form-data",
    }
})

export default axios.create({
    baseURL: "http://127.0.0.1:8000/"
}) 