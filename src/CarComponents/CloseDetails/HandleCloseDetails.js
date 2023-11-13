//import CarDetail from '../CarDetails/CarDetail';
const handleCloseDetails = (car) => {
    const carDetailsElement = document.querySelectorAll('.car-details-container');
    
      carDetailsElement.forEach((carDetail) => {
        const carYear =  parseInt(carDetail.querySelector('.p').textContent.split(':')[1], 10);
          if (car === carYear ) {
            carDetail.style.display = 'none';
          }
        
      });  
    
  };
  export default handleCloseDetails;