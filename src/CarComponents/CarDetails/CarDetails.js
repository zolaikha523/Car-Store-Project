import CarDetail from './CarDetail';
const CarDetails = ({cardata}) =>{

    return(
        
            <div>
                {cardata.map((item, index)=> {
                    const images = item.images.map((image, imageIndex)=>{
                        return(
                            <img key={imageIndex} src={image}/>
                        )
                    });
                      return (
                      <CarDetail key={index} images={images}  year={item.year}  model={item.model} price={item.price} make={item.make} />
                    )
                        
                })}
            </div>
        
    )
      
}
export default CarDetails;