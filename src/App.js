import React from 'react';
import './Categories.styles.scss';


const App = () => {
  const categories = [
    {
      id: 1,
      title: 'Hats',
      imageURL: 'https://raw.githubusercontent.com/rengoku33/ThriftShop/main/src/images/cap.jpg',
    },
    {
      id: 2,
      title: 'Jackets',
      imageURL: 'https://raw.githubusercontent.com/rengoku33/ThriftShop/main/src/images/jacket.png',
    },
    {
      id: 3,
      title: 'Sneakers',
      imageURL: 'https://raw.githubusercontent.com/rengoku33/ThriftShop/main/src/images/shoes.png',
    },
    {
      id: 4,
      title: 'Womens',
      imageURL: 'https://raw.githubusercontent.com/rengoku33/ThriftShop/main/src/images/womens.png',
    },
    {
      id: 5,
      title: 'Mens',
      imageURL: 'https://raw.githubusercontent.com/rengoku33/ThriftShop/main/src/images/mens.png',
    },
  ];

  return (
    <div className='categories-container'>
      {categories.map(({ title, id, imageURL }) => (
        <div key={id} className='category-container'>
          <div 
            className='background-image' style={{
            backgroundImage: `url(${imageURL})`
          }}/>
          <div className='category-body-container'>
            <h2>{title}</h2>
            <p>Shop Now</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
