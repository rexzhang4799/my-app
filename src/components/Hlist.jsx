import React, { useState,useEffect} from 'react';
import axios from 'axios';
const Hlist = () => {
    
    const [repName,setRepName]=useState();
    const [repUrl,setRepUrl]=useState();
    const [isLoading,setIsLoading]=useState(true);
    const [error,setError]=useState('');
    const URL = `https://api.github.com/search/repositories?q=r&sort=stars`;
    useEffect(()=>{
        //console.log(`hlist的url是${URL}`);
        axios.get(URL)
        .then((value) => {
            
            const {name,html_url}=value.data.items[0];
            setRepName(name);
            setRepUrl(html_url);
            setIsLoading(false);
            
        })
        .catch((reason) => {
            setIsLoading(false);
            setError(reason.message);
            
        });
        
    },[]);
    
       const lists =axios.get(URL).data;
       //console.log(lists)
        if (isLoading) {
            return (
                <h2>loading....</h2>
            )
        }else if(repName && repUrl && !error){
            return (
                
                //lists.map(() => 
                 
                <h2>请求数据<a href={repUrl}>{repName}</a></h2>
             //)
                 
            )
        }else{
            return (
                <h2>{error}</h2>
            )
        }
   
}
export default Hlist;
