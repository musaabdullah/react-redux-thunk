import './App.css';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPosts } from './actions/posts';
import * as AI from "react-icons/ai";
function App() {

  const dispatch = useDispatch();
  const state = useSelector(state => state);
  console.log(state);
  console.log(state == []);
  useEffect(() => {
    dispatch(getPosts())
  }, [dispatch])

  return (
    <div className="container-fluid">
         <div className="row">
           <div className="col-md-4">

           </div>
           
          
       <div className="col-md-8 large"    >
            <div className="row ">

           {
             state.posts.map((item) => {
              return  <div style={{width: 300, padding: 0, margin: 5}} className="col-md-2 card" >
              
                <img src={item.image} className="img-card-top" style={{width: 290, height: 200}} />
               
              <div className="card-body">
                <div className="card-title">{item.title}</div>
                <div className="card-text">$ {item.price}</div>
               
              </div>
              <div className="card-footer">
                <button className="d-flex align-items-center btn btn-primary"><AI.AiOutlineShoppingCart style={{marginRight: 10}}/> Add to cart</button>
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
