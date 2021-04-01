import React from 'react'
import classes from './input.module.css'
const input=(props)=>(
    <input className={classes.input} value={props.value}>
    </input>
)
export default input;