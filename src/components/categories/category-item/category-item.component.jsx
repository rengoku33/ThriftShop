import React from 'react';
import './category-item.styles.scss'

const CategoryItem = ({category}) => {  //receiving entire obj as a prop (the categories array elements iterated by using map in app.js)
    const { imageURL, title } = category;
    return(
    <div className='category-container'>
        <div 
         className='background-image' 
         style={{
         backgroundImage: `url(${imageURL})`,
        }}/>
        <div className='category-body-container'>
            <h2>{title}</h2>
        </div>
    </div>
  )

}

export default CategoryItem