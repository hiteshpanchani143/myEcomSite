import React from 'react';

const Pagination = ({totalPost,postPerPages,setCurrentPage}) => {

    let pages=[];
    for(let i=1; i<Math.ceil(totalPost/postPerPages);i++){
        pages.push(i)
    }
  return (
    <div className='mt-5'>{
        pages.map((page,index)=>(
            <span className='main-pagination'>
                <button
                    className='me-2 pagination-btn btn btn-info' key={index}
                    onClick={()=>setCurrentPage(page)}>{page}</button>
            </span>
        ))
    }
      
    </div>
  );
}

export default Pagination;
