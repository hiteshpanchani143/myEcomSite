import React from 'react';
import axios from 'axios';
import {useState,useEffect} from 'react'

const Practiseapi = () => {

  const [getdata,setGetData]=useState([]);
  const [del,setdel] = useState(null)

  const [id,setid] = useState();
  const [title,settitle]= useState();
  const [img,setimg] = useState();
  const [rating,setrating]= useState();
  const [price,setprice] = useState();
  const [quantity,setquantity] = useState();
  const [countData , setcountdata] = useState(0)

  const [enable,setenable]=useState(false)

  const endpointUrl = "https://63be7854f5cfc0949b5819ef.mockapi.io/APi1";


  const showData = async()=>{
    await axios.get(endpointUrl)
    .then((res)=>{
      setGetData(res.data);
      setcountdata(res.data.length)
      console.log(getdata);
    })
  }

const adddata = async()=>{
  const newData = {
    title,
    // img,
    rating,
    price,
    quantity
  }

  
  await axios.post(endpointUrl,newData)
  .then((res)=>{
    setid('');
    settitle('');
    // setimg('');
    setrating('');
    setprice('');
    setquantity('');
    showData();
    console.log(id);
    console.log(title);
    console.log(getdata);
  })
}

const deldata = async(id) =>{
  setdel(id)
   await axios.delete(`${endpointUrl}/${id}`)
   setdel(null);
   showData();
}


// update data
const editData = async()=>{
  const newData1 ={
    title,
    // Img,
    rating,
    price,
    quantity
  }

await axios.put(`https://63be7854f5cfc0949b5819ef.mockapi.io/APi1/${id}`,newData1)
.then((res)=>{
  setid('');
  settitle('');
  // setimg('');
  setrating('');
  setprice('');
  setquantity('');
  showData();
})
  
  
}

const enableBtn = ()=>{
  setenable(true)
}
useEffect(() => {
  showData()
}, []);

  return (
    <div className='home' id='home'> 

<input 
type='text'
placeholder='title' 
value={title}
onChange={(e)=>settitle(e.target.value)}
></input> <br/>

{/* <input 
placeholder='image' 
value={img}
onChange={(e)=>setimg(e.target.value)}
></input><br/> */}

<input 
type='text'
placeholder='rating' 
value={rating}
onChange={(e)=>setrating(e.target.value)}
></input><br/>

<input 
type='text'
placeholder='price' 
onChange={(e)=>setprice(e.target.value)}
value={price}></input><br/>

<input 
type='text'
placeholder='quantity' 
value={quantity}
onChange={(e)=>setquantity(e.target.value)}
></input><br/>

<button className='btn btn-primary' 
onClick={()=>{
  if(enable){
     editData()
  }else{
    adddata();
  }
   setenable(false)
}}>{enable ? 'Edit': "Add"}</button>

<br/>
<br/>
<h3> You have {countData} now</h3>
        <table className='table'>
          <thead>
            <tr>
              <td>Id</td>
              <td>Title</td>
              {/* <td>Image</td> */}
              <td>Rating</td>
              <td>Price</td>
              <td>Quantity</td>
            
            </tr>
          </thead>

{
  getdata.map((data,index)=>(
    <tbody key={index}>
      <tr >
        <td>{data.id}</td>
        <td>{data.title}</td>
        {/* <img src={data.img} height={30}width={30}></img> */}
        <td>{data.rating}</td>
        <td>{data.price}</td>
        <td>{data.quantity}</td> 
         <td>
                <button className='btn btn-danger' onClick={()=>deldata(data.id)}>delete</button>
         </td>
         <td>
                <button className='btn btn-success' onClick={()=>{
                  enableBtn()
                  setid(data?.id)
                  settitle(data?.title)
                  setrating(data?.rating)
                  setprice(data?.price)
                  setquantity(data?.quantity)
                } }>update</button>
         </td>

      </tr>
    </tbody>
  ))
}

        </table>
    </div>
  );
}

export default Practiseapi;
