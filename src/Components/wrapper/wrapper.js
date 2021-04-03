import React,{Component} from 'react'
import Aux from '../HOC/Auxilary'
import Input from '../input/input'
import Grid from '../../Containers/grid/grid'
class Wrapper extends Component{
    state={
        str:'',
        res:0,
        
    }
    clickedHandler=(event)=>{
        //  console.log(event);
      
        event.preventDefault();
        let val=event.target.textContent;
        let prevStr;
        if(val==='AC'){
            this.setState({str:''});
            return;
        }
        if(val==='C'){
           let ar=this.state.str.split('');
           ar.pop();
            //  console.log(ar);
            this.setState({str:ar.join('')});
            return;
        }
        if(this.state.str!==''){
            prevStr=this.state.str[this.state.str.length-1];
            // console.log(prevStr);
        }
        // console.log(prevStr);
        this.setState((prevState)=>{return {str:prevState.str+val}})
        // this.foo(val);
        if(val==='%'){
          this.setState({str:`${parseInt(this.state.str)/100}`})
        }
        if(val==='='){
          this.setState({str:`${eval(this.state.str)}`})
        }
      
    }
    render(){
  //  console.log('inside render',this.state);
        return (
            <Aux>
                <Input value={this.state.str} temp={this.state.res}/>
                <Grid clicked={e=>{this.clickedHandler(e)}}/>
            </Aux>
        )
    }
}
export default Wrapper;