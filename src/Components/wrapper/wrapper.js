import React,{Component} from 'react'
import Aux from '../HOC/Auxilary'
import Input from '../input/input'
import Grid from '../../Containers/grid/grid'
class Wrapper extends Component{
    state={
       
       
        str:''
    }
    foo(val){
        let arr=val.split(' ')
        if(val==='+'){}
        if(val==='-'){}
        if(val==='*'){}
        if(val==='/'){}
    }
    clickedHandler=(event)=>{
        console.log(event);
        let val=event.target.textContent;
        let prevStr;
        if(this.state.str!==''){
            prevStr=this.state.str[this.state.str.length-1];
            console.log(prevStr);
        }
        // console.log(prevStr);
        if(isFinite(parseInt(val)) && prevStr!=='+'){
            this.setState({str:this.state.str+val})
        }
        else{
            this.setState({str:this.state.str+' '+val})
        }
      
   this.foo(this.state.str);
 


    }
    render(){

        return (
            <Aux>
                <Input value={this.state.str}/>
                <Grid clicked={e=>{this.clickedHandler(e)}}/>
            </Aux>
        )
    }
}
export default Wrapper;