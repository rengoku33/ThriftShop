import React from 'react';
import './components/stylesheets-folder/Categories.styles.scss';
import categories from './components/namespace/category-menu'; // fetch the categories array from the namespace folder
import CategoryItem from './components/category-item/category-item.component'; // for main menu (5 menu items)

const App = () => {

  return (
    <div className='categories-container'>
      {categories.map( (category) => (                           // pass entire array (id, title, imgURL)
        <CategoryItem key={category.id} category={category} />   // as a prop over here
      ))}
    </div>
  );
};

export default App;
