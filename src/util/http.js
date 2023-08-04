import http from '../util/axios.js'
export const login=(data)=>http   ({url:"/login",data:data})
export const register=(data)=>http({url:"/register",data:data})
export const upload=(data)=>http({url:"/upload/courseCover",data:data}) 