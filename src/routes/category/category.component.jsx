import React, {useContext, useState, useEffect, Fragment} from "react";
import { useParams } from "react-router-dom";
import { categoriesContext } from "../../contexts/categories.context";
import ProductCard from "../../components/product-card/product-card.component";
import "./category.styles.scss";

const Category = () => {
    const {category} = useParams();
    const {categoriesMap} = useContext(categoriesContext);
    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(() => {  
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap]);
    // products will not update unless category or categoriesMap array changes
    
    // only render product.map if products has a value (in case failed to fetch data from db then products = undefined)
    return(
        <Fragment>
            <h2 className="category-title">{category.toUpperCase()}</h2>

            <div className="category-container">
                {products &&                                                                        
                products.map((product) => (<ProductCard key={product.id} product={product} />))}        
            </div>
        </Fragment>
        
    )
}

export default Category;