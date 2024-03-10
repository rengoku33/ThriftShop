import React from "react";
import './Categories.styles.scss';
import categories from '../../namespace/category-menu'; // fetch the categories array from the namespace folder
import CategoryItem from '../category-item/category-item.component'; // for passing values to the categories skeleton iteratively

const CategoriesContainer = () => {
    return(
        <div className='categories-container'>
             {categories.map( (category) => (                           // pass entire array (id, title, imgURL)
             <CategoryItem key={category.id} category={category} />     // as a prop over here
      ))}
    </div>
    )
};

export default CategoriesContainer;