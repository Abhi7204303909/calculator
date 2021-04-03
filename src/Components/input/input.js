import React from 'react'
import classes from './input.module.css'
const input=(props)=>(
    <input className={classes.input} value={props.value} placeholder={props.temp} onChange={()=>{}}>
       
    </input>
)
export default input;