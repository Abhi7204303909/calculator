import React from 'react';
import classes from './grid.module.css';
import Aux from '../../Components/HOC/Auxilary'

const grid =(props)=>{
 
    
        return(<Aux  >
            
            <div className={classes.gridContainer} onClick={props.clicked}>
                <div className={classes.gridItem} >AC</div>
                <div className={classes.gridItem}>C</div>
                <div className={classes.gridItem}>%</div>  
                <div className={classes.gridItem}>/</div>
                <div className={classes.gridItem}>7</div>
                <div className={classes.gridItem}>8</div>  
                <div className={classes.gridItem}>9</div>
                <div className={classes.gridItem}>*</div>
                <div className={classes.gridItem}>4</div>
                <div className={classes.gridItem}>5</div>
                <div className={classes.gridItem}>6</div>
                <div className={classes.gridItem}>-</div>
                <div className={classes.gridItem}>1</div>
                <div className={classes.gridItem}>2</div>
                <div className={classes.gridItem}>3</div>
                <div className={classes.gridItem}>+</div>
                <div className={classes.gridItem}>r</div>
                <div className={classes.gridItem}>0</div>
                <div className={classes.gridItem}>.</div>       
                <div className={classes.gridItem}>=</div> 

            </div>
        </Aux>)
    
}
export default grid;