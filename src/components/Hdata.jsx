import React, { useState,useEffect} from 'react';
import axios from 'axios';
const Hdata = () => {
    
    const [repName,setRepName]=useState();
    const [repUrl,setRepUrl]=useState();
    const [keyWord,setKeyWord]=useState('v');
    const [isLoading,setIsLoading]=useState(true);
    const [error,setError]=useState('');
    const URL = `https://api.github.com/search/repositories?q=${keyWord}&sort=stars`;
    useEffect(()=>{
        //console.log(`hdata的url是${URL}`);
        axios.get(URL)
        .then((value) => {
            setKeyWord('r');
            //console.log(axios.get(URL))
            const {name,html_url}=value.data.items[0];
            //console.log(value.data)
            setRepName(name);
            setRepUrl(html_url);
            setIsLoading(false);
            
        })
        .catch((reason) => {
            setIsLoading(false);
            setError(reason.message);
            
        });
        
    },[]);
    
       //const items = axios.get(URL).data.items[0];
       //console.log(items)
        if (isLoading) {
            return (
                <h2>loading....</h2>
            )
        }else if(repName && repUrl && !error){
            return (
               
                <h2>{keyWord}请求数据<a href={repUrl}>{repName}</a></h2>
                    
            )
        }else{
            return (
                <h2>{error}</h2>
            )
        }
   
}
export default Hdata;
