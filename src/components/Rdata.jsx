import React,{Component}  from 'react';
import axios from 'axios';
//console.log('haha');
//console.log('xixi +'+axios);
class Rdata extends Component {
//const Weather = () => {
     state = {
        repName:'',
        repUrl:'',
        isLoading:true,
        keyWord:'r',
        error:''

    }
    
    componentDidMount(){
        const URL = `https://api.github.com/search/repositories?q=${this.state.keyWord}&sort=stars`;
        console.log(`rdata的url是{URL}`);
        //console.log('sdddsds');
         axios.get(URL)
         .then((value) => {
             console.log(axios.get(URL))
             let {name,html_url} = value.data.items[0];
             this.setState({
                 repName:name,
                 repUrl:html_url,
                 isLoading:false
    
             })
             //console.log(name,html_url);
         })
         .catch((reason) => {
             this.setState({
                 isLoading:false,
                 error:reason.message
             })
             //console.log(reason);
         })
    }
   
   
    render() {
        const {repName,repUrl,keyWord,isLoading,error} = this.state;
        if (isLoading) {
            return (
                <h2>
                loading....
                </h2>
            )
        }else if(repName&&repUrl&&!error){
            return (
                <h2>
                【{keyWord}】请求数据<a href={repUrl}>{repName}</a>
                </h2>
            )
        }else{
            return(
            <h2>{error}</h2>
            )
        }
    }
}

export default Rdata;