import OneProduct from "./OneProduct"


const Cart = ({products}) => {
    return ( 
        <div className="cart-container">
           <h3>Ovo je tvoja korpa.</h3>
      {products.map((prod) => (<OneProduct product= {prod} key = {prod.id} inCart={0}/>
      ))}

        </div>
    )
}

export default Cart