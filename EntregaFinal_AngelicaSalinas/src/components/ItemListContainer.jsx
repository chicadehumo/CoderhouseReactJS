
import ItemList from './ItemList';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { firestoreFetch } from '../utils/firestoreFetch';

const ItemListContainer = () => {
    const [datos, setDatos] = useState([]);
    const { idCategory } = useParams();

    //componentDidUpdate
    useEffect(() => {
      firestoreFetch(idCategory)
          .then(result => setDatos(result))
          .catch(err => console.log(err));
  }, [idCategory]);

    //componentWillUnmount
    useEffect(() => {
      return (() => {
          setDatos([]);
      })
    }, []);

    return (
        <>
          <section className="uk-section uk-section-small">
        <div className="uk-container">
          <div className="uk-flex uk-grid-large uk-grid" uk-grid="true">
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