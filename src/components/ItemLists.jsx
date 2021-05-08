import React from 'react'

const ItemLists = () => {

    const axios = require('axios')
    const response = axios.get('/products/')
    const { data } = response


    return (
        <div>
            
        </div>
    )
}

export default ItemLists
