import React from "react";
import './directory.styles.scss';
import DirectoryItem from "../directory-item/directory-item.component"; // for passing values to the categories skeleton iteratively

const Directory = ({categories}) => {
    return(
        <div className='directory-container'>
             {categories.map( (category) => (                           // pass entire array (id, title, imgURL)
             <DirectoryItem key={category.id} category={category} />    // as a prop over here
      ))}
    </div>
    )
};

export default Directory;