import React from 'react';

import { Space, Table, Tag } from 'antd';

import 'antd/dist/antd.css';

const Ttable = () => {
  
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

  return(
    <Table columns={columns} dataSource={data} />
  )
 

}
//console.log(axios)
export default Ttable;