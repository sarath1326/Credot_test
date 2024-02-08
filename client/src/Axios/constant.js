



import axios from "axios"

const baseurl="http://localhost:3001"




const instanse=axios.create({

     baseURL:baseurl
})


export default instanse