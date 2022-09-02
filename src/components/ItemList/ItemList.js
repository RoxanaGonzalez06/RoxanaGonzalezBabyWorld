import Item from '../Item/Item';
import React from "react";

const ItemList = ({data =[]}) => {
    return(
        data.map(Products => <Item key={Products.id} info={Products} />)
    )
}

export default ItemList;
