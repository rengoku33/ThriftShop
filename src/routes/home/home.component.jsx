import React from "react";
import Directory from "../../components/directory/directory.component";

const Home = () => {
  
  const categories = [
    {
      id: 1,
      title: 'Hats',
      imageURL: 'https://raw.githubusercontent.com/rengoku33/ThriftShop/main/src/images/cap.jpg',
      route: 'shop/hats'
    },
    {
      id: 2,
      title: 'Jackets',
      imageURL: 'https://raw.githubusercontent.com/rengoku33/ThriftShop/main/src/images/jacket.png',
      route: 'shop/jackets'
    },
    {
      id: 3,
      title: 'Sneakers',
      imageURL: 'https://raw.githubusercontent.com/rengoku33/ThriftShop/main/src/images/shoes.png',
      route: 'shop/sneakers'
    },
    {
      id: 4,
      title: 'Womens',
      imageURL: 'https://raw.githubusercontent.com/rengoku33/ThriftShop/main/src/images/womens.png',
      route: 'shop/womens'
    },
    {
      id: 5,
      title: 'Mens',
      imageURL: 'https://raw.githubusercontent.com/rengoku33/ThriftShop/main/src/images/mens.png',
      route: 'shop/mens'
    },
  ];

  
    return(
      <Directory categories={categories} />
    )
  };
  
  export default Home;