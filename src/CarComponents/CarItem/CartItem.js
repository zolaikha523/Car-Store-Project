import DatailButton from '../CarDetails/DetalButton';

const CartItem = ({car1Image1, year}) =>{
    return(
    
        <div className="car-card">
          <img src={car1Image1} alt="Car Make and Model" />
          <h2>Car Make and Model</h2>
          <p>Year:{year}</p>
          <DatailButton  year={year}/>
        </div>
  
    )
}
export default CartItem;