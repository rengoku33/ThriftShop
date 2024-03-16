import React from 'react';
import { useNavigate } from 'react-router-dom';
import './directory-item.styles.scss'

const DirectoryItem = ({category}) => {  //receiving entire obj as a prop (the categories array elements iterated by using map in app.js)
    const { imageURL, title, route } = category;
    const navigate = useNavigate();

    const onNavigateHandler = () => navigate(route);

    return(
    <div className='directory-item-container' onClick={onNavigateHandler}>
        <div 
         className='background-image' 
         style={{
         backgroundImage: `url(${imageURL})`,
        }}/>
        <div className='body'>
            <h2>{title}</h2>
        </div>
    </div>
  )

}

export default DirectoryItem;