
//import CartItem from "../CarItem/CartItem";
    const handleFilterByYear = (year) => {
        const carCards = document.querySelectorAll('.car-card');
    
        carCards.forEach((carCard) => {
          const carYear =  parseInt(carCard.querySelector('p').textContent.split(':')[1], 10);
          if (year === carYear || year === 0 ) {
            carCard.style.display = 'block';
          } else {
            carCard.style.display = 'none';
          }
        });
      };

export default handleFilterByYear;