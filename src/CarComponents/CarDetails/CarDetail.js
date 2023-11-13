import CloseDetaiButton from '../CloseDetails/CloseDetailButton';
const CarDetail = ({images,  year,  model, price, make}) =>{
    return(
        
            <div className="car-details-container">
                <div className="car-details">
                    <h2>{ make} {model}</h2>
                    <p>price: {price}</p>
                    <p className="p">Year:{year}</p>
                    <div className="car-images">
                        {images}
                    </div>
                    <CloseDetaiButton year={year}/>
                </div>
            </div>
    );
}
export default CarDetail;
