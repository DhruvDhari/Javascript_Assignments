import {url} from "../utils/constant.js";

const networkOperation={
    async getData(){
        const response =await fetch(url);
        const data =response.json();
        return data;

        //axios
    },

    postData(){

    },
    putData(){

    },
    deleteData(){

    }
}

export default networkOperation;
