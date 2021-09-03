//import React from 'react';
import React, { useState,useEffect } from 'react';
import { Button, DatePicker, Space, Table, Tag} from 'antd';
import './App.css';
import 'antd/dist/antd.css';
//import { render } from 'react-dom';
import Weather from './components/Weather'
//import Item from 'antd/lib/list/Item';
const App = () => {
  
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
      address: 'Sidney No. 3 Lake Park',
      tags: ['cool', 'teacher'],
      link:'1.qq.com',
    },
    {
      key: '4',
      name: 'tom3',
      age: 32,
      address: 'Sidney No. 3 Lake Park',
      tags: ['cool', 'teacher'],
      link:'2.qq.com',
    },
    {
      key: '5',
      name: 'jerry3',
      age: 32,
      address: 'Sidney No. 3 Lake Park',
      tags: ['cool', 'teacher'],
      link:'3.qq.com',
    },
  ];
  const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <a href="www.qq.com">{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: tags => (
      <>
        {tags.map(tag => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'yellow';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <Space size="middle">
        <a href="xx">Invite {record.name}</a>
        <a href="xxx">Delete</a>
      </Space>
    ),
  },
  ];
  //const arr = ['1文字文字文字','2文字文字文字','33文字文字文字','4文字文字文字','35文字文字文字','36文字文字文字','37文字文字文字']
  const lists = data.map(Item=> 
    <li key={Item.key}><a href={Item.link}>{Item.name + ' ' + Item.address}</a></li>
    
  )
  // 声明一个新的叫做 “count” 的 state 变量
  const [count, setCount] = useState(0);
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

  return(
    <>
      <Space>
        <Button type="primary">PRESS button</Button>
        <Button type="dashed">dashed button</Button>
        <Button type="text">text button</Button>
        <Button type="link">link button</Button>
        <DatePicker placeholder="select date" />
      </Space>
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 10)}>Click me</button>
      </div>
      <Table columns={columns} dataSource={data} />
      <ul>{lists}</ul>
      <Weather/>
    </>
)

}

export default App;