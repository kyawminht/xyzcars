import axios from "axios";

const BASE_URL='http://localhost:9090';

const api=axios.create(
    {
        baseURL: BASE_URL,
    }
);

export const fetchAllCars=async()=>{
    try {

        const response=await api.get('/showData');
        return response.data;
        
    } catch (error) {
        console.log('error fetching data')
        throw error;
    };
}