import { Grid } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import Item  from './Item'

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
      <Grid item xs={12}>
        <Grid container justify="center" spacing="3">
          {data.map((value) => (
            <Grid key={value.id} item>
              <Item item={value}></Item>
            </Grid>
          ))}
        </Grid>
      </Grid>
    )
}

export default ItemList
