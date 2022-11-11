import ItemList from './ItemList';
import customFetch from "../utils/customFetch";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
const { products } = require('../utils/products');

const ItemListContainer = () => {
    const [datos, setDatos] = useState([]);
    const { idCategory } = useParams();

    console.log(idCategory);

    //componentDidUpdate
    useEffect(() => {
        customFetch(2000, products.filter(item => {
            if (idCategory === undefined) return item;
            return item.categoryId === parseInt(idCategory)
        }))
            .then(result => setDatos(result))
            .catch(err => console.log(err))
    }, [datos]);

    return (
      <>  
       <section className="uk-section uk-section-small">
        <div className="uk-container">
          <div className="uk-flex uk-grid-large uk-grid" uk-grid>
            <div className="uk-width-3-4@m">
              <h1 className="primeTitle">Reconécta con la magia del corazón, escucha tu intuición y camina con maitri.</h1>
            </div>
          </div>
        </div>
      </section>
      <section className="uk-section uk-section-small">
        <div className="uk-container">
          <div className='uk-child-width-1-4@m uk-child-width-1-2@s uk-grid' >
            <ItemList items={datos} />
          </div>
        </div>
      </section>
      </>
    );
}

export default ItemListContainer;