import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import axios from 'axios'
import { useEffect,useState } from 'react'
import styles from '@/styles/Home.module.css'

 


interface Product
{
id:number;
title:string
}




export default function contact() {



const initialProductState = [{
    id: 0,
    title: ""
     
  }];




    const[data,setData]=useState<Product[]>(initialProductState);

   

  useEffect(()=>{

    if(data!=null){
axios.get<Product[]>("https://my-json-server.typicode.com/typicode/demo/posts")
.then((res)=>{console.log(res.data);setData(res.data)})

  }},[])
    return (
    <div>
      
      {data.map((item)=>
      <ul><li>{item.id}</li><li>{item.title}</li></ul>
      )}

       </div>
  )
}
