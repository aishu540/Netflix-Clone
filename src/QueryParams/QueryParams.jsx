import { Input, Table } from 'antd'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const QueryParams = () => {
    const [users,setUsers]=useState([])
    const [search,setSearch]=useState("")
    const fetchUsers=async ()=>{
        const response=await axios.get("https://dummyjson.com/users")
         setUsers(response.data.users)
    }
    useEffect(()=>{
    
        fetchUsers()
    },[search])
   const  columns=[
        {
            title:"FullName",
            // for fakeApi use this since it is not avilable diretly
            // render:(_,record)=>(
            //     `${record.name.firstname} ${record.name.lastname}`
            // )
            dataIndex:"firstName"

        },
        {
          title:"City",
          render:(_,record)=> record.address.city
        //   dataIndex:"city"
        
        },
        {
            title:"ID",
            dataIndex:"id"
        }

    
    ]

  return (
    <div>
        <Input.Search value={search} onChange={(e)=>setSearch(e.target.value)} enterButton="search" onSearch={(value)=>setSearch(value)}/>
       <Table dataSource={users} columns={columns} rowKey="id"/>
    </div>
  )
}

export default QueryParams