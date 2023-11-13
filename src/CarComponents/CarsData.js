import car1Image1 from '../assets/images/car1-image1.jpg';
import car1Image2 from '../assets/images/car1-image2.jpg';
import car1Image3 from '../assets/images/car1-image3.jpg';
import car2Image1 from '../assets/images/car2-image1.jpg';
import car2Image2 from '../assets/images/car2-image2.jpg';
import car3Image1 from '../assets/images/car3-image1.jpg';
import car3Image2 from '../assets/images/car3-image2.jpg';

const carsData = [
    {
      id: 1,
      make: 'Toyota',
      model: 'Corolla',
      price: 25000,
      year: 2021,
      images: [car1Image1, car1Image2, car1Image3],
    },
    {
      id: 2,
      make: 'Honda',
      model: 'Civic',
      price: 28000,
      year: 2022,
      images: [car2Image1, car2Image2,car2Image2],
    },
    {
      id: 3,
      make: 'Ford',
      model: 'Mustang',
      price: 40000,
      year: 2023,
      images: [car3Image1, car3Image2, car3Image1 ]
    },
    // Add more car data here...
  ];

  export default carsData;