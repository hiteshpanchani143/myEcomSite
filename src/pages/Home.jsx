import axios from 'axios';
import React from 'react';
import { useState ,useEffect} from 'react';
import ProductCard from '../components/ProductCard';
import Spiner from '../components/Spiner'
import Pagination from '../components/Pagination';
import ProductList from '../components/ProductList';

const Home = () => {
 
// pagination logic
const [currentPage,setCurrentPage] =useState(1);
const [postPerPages,setPostPerPages] = useState(5);


const [show,setshow] = useState([])
// const [isLoading,setIsLoading] = useState(false)

const showapidata = async ()=>{
  

  const api = await axios.get("https://63be7854f5cfc0949b5819ef.mockapi.io/APi1");
  setshow(api.data)
    // setIsLoading(true)
}

const lastIndex = currentPage * postPerPages;
const firstPage = lastIndex - postPerPages;
const currentPost = show.slice(firstPage,lastIndex)

console.log('lastIndex',lastIndex);
console.log('firstPage',firstPage);
console.log('currentPost',currentPost);

useEffect(() => {
  showapidata()

  // setTimeout(() => {
    
  //   setIsLoading(false)
  // }, 2000);
}, []);
  return (
    <>
    {/* {isLoading && <Spiner/>} */}
    <section id ='home'> 
      <div className='container'>
        <div className='home_content'>
       

    <ProductList show={currentPost}></ProductList>

<Pagination 
    totalPost={show.length}
    postPerPages={postPerPages}
    setCurrentPage={setCurrentPage}
    >
</Pagination>



        </div>
      </div>
    </section>


   
    </>
  );
}

export default Home;

