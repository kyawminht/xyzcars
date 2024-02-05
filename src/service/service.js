import axios from "axios";

const BASE_URL='http://localhost:8080/api/cars';

const api=axios.create(
    {
        baseURL: BASE_URL,
      
    }
    
);

export const fetchAllCars=async()=>{
    try {

        const response=await api.get('/all');
        return response.data;
        
    } catch (error) {
        console.log('error fetching data')
        throw error;
    };
}