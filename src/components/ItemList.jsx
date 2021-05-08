import { Grid } from '@material-ui/core'
import React from 'react'

const ItemList = () => {

    const axios = require('axios')
    const response = axios.get('/products/')
    const { data } = response


    return (
        <Grid item xs={12}>
        <Grid container justify="center" spacing="3">
          {[0, 1, 2].map((value) => (
            <Grid key={value} item>
            </Grid>
          ))}
        </Grid>
      </Grid>
    )
}

export default ItemList
