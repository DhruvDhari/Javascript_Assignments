//Network Call (HTTP/HTTPS)

import axios from 'axios';

// GET - read
// POST -write 
// PUT -update 
// DELETE -remove 

export const apiClient={
    get(){

    },
    async post(URL,data){
        try{
            const response= await axios.post(URL,data);
            return response;
        }
        catch(err){
            throw err;
        }
        
    },
    put(){

    },
    remove(){

    }
}