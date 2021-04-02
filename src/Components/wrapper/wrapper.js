import React,{Component} from 'react'
import Aux from '../HOC/Auxilary'
import Input from '../input/input'
import Grid from '../../Containers/grid/grid'
class Wrapper extends Component{
    state={
       
       
        str:'',
        res:null,
        
    }
   
    foo(val){
      if(this.state.str.includes('+')){
          let arr=this.state.str.split('+');
          let sum=arr[0]==='-'?-1*Number(arr[1]):Number(arr[0])
          let i=arr[0]==='-'?2:1
          while(i<arr.length){
             if(arr[i].includes('*'))continue;
             else{sum+=Number(arr[i]);}
            i++;
          }
          if(val==='='){
              this.setState({str:`${sum}`})
          }
      }
      else if(this.state.str.includes('-') && !this.state.str.includes('*') && 
      !this.state.str.includes('/') && !this.state.str.includes('%')){
        let arr=this.state.str.split('-');
        let diff=arr[0]===''?-1*Number(arr[1]):Number(arr[0]);
        let i=arr[0]===''?2:1
        while(i<arr.length){
           
          diff-=Number(arr[i]);
          i++;
        }
        if(val==='='){
            this.setState({str:''+diff})
        }
      }
      else if(this.state.str.includes('*')){
        let arr=this.state.str.split('*');
        console.log(arr);
        let mul=arr[0]==='-'?-1*Number(arr[1]):Number(arr[0]);
        let i=arr[0]==='-'?2:1
        while(i<arr.length){
           
          mul*=Number(arr[i]);
          i++;
        }
        if(val==='='){
            this.setState({str:''+mul})
        }
      }
      else if(this.state.str.includes('/')){
        let arr=this.state.str.split('/');
        let div=arr[0]==='-'?-1*Number(arr[1]):Number(arr[0]);
        let i=arr[0]==='-'?2:1
        while(i<arr.length){
           
          div/=Number(arr[i]);
          i++;
        }
        if(val==='='){
            this.setState({str:''+div})
        }
      }
      if(this.state.str.includes('%')){
        let arr=this.state.str.split('%');
        let per=arr[0]==='-'?-1*Number(arr[1]):Number(arr[0]);
        if(val==='='){
            this.setState({str:`${per/100}`})
        }
      }

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
             console.log(ar);
            this.setState({str:ar.join('')});
            return;
        }
        if(this.state.str!==''){
            prevStr=this.state.str[this.state.str.length-1];
            // console.log(prevStr);
        }
        // console.log(prevStr);
        this.setState((prevState)=>{return {str:prevState.str+val}})
        this.foo(val);
        // if(isFinite(parseInt(val))||val==='.' && (prevStr!=='+' || prevStr!=='-' || prevStr!=='=' || prevStr!=='/')){
        //     this.setState((prevState)=>{return{str:prevState.str+val}})
        //     this.foo(val);
        // }
        // else{
        //     this.setState((prevState)=>{return {str:prevState.str+val}})
        //     this.foo(val);
        // }

    }
    render(){
   console.log('inside render',this.state);
        return (
            <Aux>
                <Input value={this.state.str}/>
                <Grid clicked={e=>{this.clickedHandler(e)}}/>
            </Aux>
        )
    }
}
export default Wrapper;