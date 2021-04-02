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
        let arr=this.state.str.split(' ');
         console.log(arr);
       
        if(arr[1]==='+'){
            let sum=0;
         
            sum=Number(arr[0])+Number(arr[2]);
            for(let i=3;i<arr.length;i++){
                    if(arr[i]==='+')continue;
                    
                    sum+=Number(arr[i]);
            }
            if(val==='='){
                this.setState({str:''+sum});
            }
         
               
            
        }
        if(arr[1]==='-'){
            let diff=arr[0];
         
            diff-=Number(arr[2]);
            for(let i=3;i<arr.length;i++){
                    if(arr[i]==='+')continue;
                    
                    diff-=Number(arr[i]);
            }
            if(val==='='){
                this.setState({str:''+diff});
            }
         
               
        }
        if(arr[1]==='*'){
            let mul=arr[0];
         
            mul*=Number(arr[2]);
            for(let i=3;i<arr.length;i++){
                    if(arr[i]==='+')continue;
                    
                    mul*=Number(arr[i]);
            }
            if(val==='='){
                this.setState({str:''+mul});
            }
         
        }
        if(arr[1]==='/'){
            let div=arr[0];
         
            div/=Number(arr[2]);
            for(let i=3;i<arr.length;i++){
                    if(arr[i]==='+')continue;
                    
                    div/=Number(arr[i]);
            }
            if(val==='='){
                this.setState({str:''+div});
            }
         
        }
        if(arr[1]==='%'){
            let per;
            per=Number(arr[0])/100;
            if(val==='='){
                this.setState({str:''+per});
            }

        }
       
    }
    newFeature(){
        console.log('newFeature');
    }
    clickedHandler=(event)=>{
        //  console.log(event);
        this.newFeature();
        event.preventDefault();
        let val=event.target.textContent;
        let prevStr;
        if(val==='AC'){
            this.setState({str:''});
            return;
        }
        if(val==='C'){
            let ar=this.state.str.split(' ');
            ar.pop();
            this.setState({str:ar.join(' ')});
            return;
        }
        if(this.state.str!==''){
            prevStr=this.state.str[this.state.str.length-1];
            // console.log(prevStr);
        }
        // console.log(prevStr);
        if(isFinite(parseInt(val))||val==='.' && (prevStr!=='+' || prevStr!=='-' || prevStr!=='=' || prevStr!=='/')){
            this.setState((prevState)=>{return{str:prevState.str+val}})
            this.foo(val);
        }
        else{
            this.setState((prevState)=>{return {str:prevState.str+' '+val+' '}})
            this.foo(val);
        }
           
        
      
 
 


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