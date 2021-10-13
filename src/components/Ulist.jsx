import React from 'react';
//import Datas from 'Datas';

const Ulist = () => {
  const data = [
    {
      key: '1',
      name: 'John Brown1',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
      link:'www.qq.com',
    },
    {
      key: '2',
      name: 'Jim Green2',
      age: 42,
      address: 'London No. 2 Lake Park',
      tags: ['loser'],
      link:'xw.qq.com',
    },
    {
      key: '3',
      name: 'Joe Black3333',
      age: 32,
      address: 'tianj No. 3 Lake Park',
      tags: ['cool', 'teacher'],
      link:'1.qq.com',
    },
    {
      key: '4',
      name: 'tom3',
      age: 32,
      address: 'beij No. 3 Lake Park',
      tags: ['cool', 'teacher'],
      link:'2.qq.com',
    },
    {
      key: '5',
      name: 'jerry33',
      age: 32,
      address: 'desin No. 3 Lake Park',
      tags: ['cool', 'teacher'],
      link:'3g.qq.com',
    },
  ];
  const lists = data.map((Item)=> 
      <li key={Item.key}><a href={'https://'+Item.link}>{Item.address }</a></li>
      
  );
  return(
    <ul>
       {lists}
    </ul>
  )
}
export default Ulist;
