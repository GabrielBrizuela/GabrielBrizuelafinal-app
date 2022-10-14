import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebaseConfig'; 
import ItemList from "./ItemList";

const ItemListContainer = (props) => {
    const [items, setItems] = useState([]);
    
    const {categoryId} = useParams ();

    useEffect (()=> {           
        const prodColecction = collection(db, 'items');
        const ref = categoryId
            ? query(prodColecction, where('categoria', '==', categoryId))
            : prodColecction;

        getDocs(ref).then((response) => {
                const productos = response.docs.map((prod) => {
               
                return {
                    id: prod.id,
                    ...prod.data(),
                };
            });
            setItems(productos);
        });

    }, [categoryId]);
   

    return (
        <div className="container-itemList">
            <ItemList items ={items}/> 
        </div>
    )
}

export default ItemListContainer;

