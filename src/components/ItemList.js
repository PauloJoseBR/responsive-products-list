import { Grid } from '@material-ui/core'
import React from 'react'
import Item  from './Item'

const ItemList = async () => {

    const axios = require('axios')
    const response = await axios.get('/products/')
    const { data } = response


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
