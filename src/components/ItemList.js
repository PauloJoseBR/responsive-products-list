import React, { useEffect, useState } from 'react'
import Item  from './Item'
import './ItemList.css'

const ItemList = () => {

    
    const axios = require('axios')
    const [data, setData] = useState([]);
    useEffect(() => {
      const fetchData = async () => {
        const result = await axios(
          '/products/',
        );
   
        setData(result.data);
      };
      fetchData()
    }, [axios]);
  
    return (
      <section class="products">
        {data.map((value) => (
          <div class="product-card">
            <Item item={value}></Item>
          </div>
        ))}
      </section>
    )
}

export default ItemList
