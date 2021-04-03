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

  const [counter, setCounter] = useState(1);
  const [show, setShow ] = useState(false);
  const handleIncrease = () => {
    setCounter(counter => counter + 1);
  }
  const handleDecrease = () => {
    if(counter <= 1) return ;
    setCounter(counter => counter - 1);
  }

  const handleShow = () => {
    setShow(!show);
  }
  return (
    <>
    <ul className="nav bg-dark p-2 mb-5 d-flex align-items-center" style={{position:"fixed", width: "100%", zIndex:1}}>
         <li onClick={() => handleShow() } className="nav-item"><a className="nav-link text-white" style={{fontSize:20, fontWeight: "bolder",}} href="#"><AI.AiOutlineMenu/></a></li>
        
         <li className=" nav-item"><a className="nav-link text-white" href="#">Logo</a></li>
         <li onClick={() => handleShow()} className="nav-item "><a className="nav-link text-white bg-primary" style={{borderRadius: 50}} href="#">{carts.length}</a></li>
      
      </ul>
         <div className="container">
         <div className="row">
           <div className={`  bg-dark justify-content-center menu ${show ? "active":"disabled"}`}>
             {
               carts.map((item) => {
                  return <div className="card p-3 m-2 d-flex" style={{width: 270}}>
                   <img src={item.image} className="p-0 m-0" style={{width: 220,height: 120}}/>
                   <div className="card-body">
                     <div className="card-title"></div>
                     <div className="card-title" style={{fontSize: 15, fontWeight: "bold", }}>{item.title}</div>
                   </div>
                   <div className="card-body d-flex justify-content-evenly">
                     <button onClick={() => handleIncrease()} className="btn btn-secondary">+</button>
                      <input type="number" value={counter} className="form-control w-50" />
                     <button onClick={() => handleDecrease()} className="btn btn-secondary">-</button>
                   </div>
                   <button onClick={() => dispatch({type:"DELETE_ITEM", payload: item.id})} className="btn btn-danger">Remove</button>
                 </div>
                })
             }
            {carts && <div onClick={() => dispatch({type: "CHECK_OUT", payload: carts})} className="btn btn-success">Check out</div>}
           </div>
           
          
       <div className="col-md-12 large " style={{marginTop: 70}}    >
            <div className="row justify-content-center">

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
  </>
  );
}

export default App;
