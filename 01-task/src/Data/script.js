import { BASE_URL, endpoints } from "./constants.js";
import axios from "axios"
const getAllData = async (endpoint)=>{
    const res = await axios (`${BASE_URL}/${endpoint}`)
    return res.data
}
export default getAllData