import React, { useState, useEffect } from 'react';
import axios from 'axios';
import redux from 'redux';
import { createStore } from 'redux';


const PRODUCT = "PRODUCT";

function addToCart(newValue) {
    return {
        type: PRODUCT,
        product: newValue
    }
}

let initialState = {
    product: {}
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case PRODUCT:
            return {
                ...state, product:action.product
            }
    }
}

const store = createStore(reducer);
console.log("Initial State", store.getState());
//store.subscribe((() => console.log("Updated State", store.getState())))






function Products() {
    let [products, setProducts] = useState([]);
    let [cart, setCart] = useState([]);
    

    // below 2 lines are pushing object data to reddux store.
    


    // using useEffect to avoid compoonent reload problem.
    useEffect(() => {
        axios.get('https://dummyjson.com/products')
            .then((res) => res.data)
            .then((data) => {
                //console.log(data.products);
                setProducts(data.products);

            })
    }, [])



function storeToRedux(id){
 console.log("ID",id);
 let newValue = products;
    store.dispatch(addToCart(newValue[id-1]));
}

    return (
        <div >
            <h1 style={{marginLeft:"48%"}}>All Items</h1>
            <p>Kindly Add Product in Cart before opening Cart</p>
            <div className="cardflex" style={{marginLeft:"100px"}}>
            
                {products.map((item) => (
                    
                    <div className="card" key={item.id}>
                        <img className="imgContainer" src={item.thumbnail} alt="Denim Jeans" />
                        <h3>{item.title}</h3>
                        <p className="price">Rs{item.price}</p>
                        <p>{item.description}</p>
                        <p><button onClick={ ()=> storeToRedux(item.id)}>Add to Cart</button></p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export {Products, store}