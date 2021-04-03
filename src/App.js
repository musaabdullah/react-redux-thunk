import './App.css';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPosts } from './actions/posts';
import * as AI from "react-icons/ai";
function App() {

  const dispatch = useDispatch();
  const posts = useSelector(state => state.posts);
  const carts = useSelector(state => state.carts);
  const checkout = useSelector(state => state.checkout);

  console.log(checkout);
  // console.log(posts == []);
  useEffect(() => {
    dispatch(getPosts())
  }, [dispatch])

  const handleCart = (item) => {
 
    const checkItem = carts.filter((cartItem) => cartItem.id === item.id)
      dispatch({type:"ADD_ITEM", payload: item})
    


     
  }

  return (
    <div className="container-fluid">
         <div className="row">
           <div className="col-md-4">
             {
               carts.map((item) => {
                 return <div className="card p-3 m-2 d-flex">
                   <img src={item.image} className="p-0 m-0" style={{width: 90,height: 90}}/>
                   <div className="card-body">
                     <div className="card-title"></div>
                     {/* <div className="card-title" style={{fontSize: 15, fontWeight: "bold", }}>{item.title}</div> */}
                   </div>
                   <button className="btn btn-danger">Remove</button>
                 </div>
               })
             }
            {carts && <div onClick={() => dispatch({type: "CHECK_OUT", payload: carts})} className="btn btn-success">Check out</div>}
           </div>
           
          
       <div className="col-md-8 large"    >
            <div className="row ">

           {
             posts.map((item) => {
              return  <div style={{width: 300, padding: 0, margin: 5}} className="col-md-2 card" >
              
                <img src={item.image} className="img-card-top" style={{width: 290, height: 200}} />
               
              <div className="card-body">
                <div className="card-title">{item.title}</div>
                <div className="card-text">$ {item.price}</div>
               
              </div>
              <div className="card-footer">
                <button onClick={() => handleCart(item) } className="d-flex align-items-center btn btn-primary"><AI.AiOutlineShoppingCart style={{marginRight: 10}}/> Add to cart</button>
              </div>
            </div>
            })
            }
            
            
            
            </div>
           
           </div>
        
         </div>
    </div>
  );
}

export default App;
