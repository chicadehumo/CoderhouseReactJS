import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ItemDetail from "./ItemDetail";
import { firestoreFetchOne } from "../utils/firestoreFetch";

const ItemDetailContainer = () => {
    const [dato, setDato] = useState({});
    const { idItem } = useParams();

    useEffect(() => {
      firestoreFetchOne(idItem)
          .then(result => setDato(result))
          .catch(err => console.log(err))
    }, [idItem]);
    
    return (
      <>
        <section className="uk-section">
            <div className="uk-container">
                <ItemDetail item={dato} />
            </div>
        </section>
      </>
    );
}

export default ItemDetailContainer;