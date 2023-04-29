import React from 'react';


function Cart({store}) {
  let data = store.getState();
  let finalData = data.product;
  console.log(finalData)
  return (
    <div >
      <h1 style={{marginLeft:"48%"}}>Cart Item</h1>
            <div className="cardflex" >
                
                    <div className="card" key={finalData.id}>
                        <img className="imgContainer" src={finalData.thumbnail} alt="Denim Jeans" />
                        <h3>{finalData.title}</h3>
                        <p className="price">Rs{finalData.price}</p>
                        <p>{finalData.description}</p>
                        
                    </div>
                
            </div>
        </div>
  )
}

export default Cart