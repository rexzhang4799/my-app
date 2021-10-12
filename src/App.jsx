import React from 'react';

import Weather from './components/Weather';
import Ulist from './components/Ulist';
import Ustate from './components/Ustate';
import Rdata from './components/Rdata';
import Ttable from './components/Ttable';
import Hdata from './components/Hdata';

const App = () => {
  

  
  return(
    <>
      <Ttable/>
      <Ulist/>
      <Ustate/>
      <Weather/>
      <Rdata/>
      <Hdata/>
    </>
)

}
//console.log(axios)
export default App;