import React from 'react'

const ItemLists = () => {

    const axios = require('axios');
    const { data } = axios.get('/products/')
    

    return (
        <div>
            
        </div>
    )
}

export default ItemLists
