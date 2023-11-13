import CartItem from './CartItem';
const CartItems = ({arr}) =>{

    return(
        
            <div className="cars-container">
                {arr.map((item, index)=> {

                    return <CartItem key={index} car1Image1={item.images[0]} year={item.year}/>
        
                })}
            </div>
        
    )
      
}
export default CartItems;