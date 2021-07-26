import React from 'react';
import axios from 'axios';


class CreateUser extends React.Component{
 constructor(props){
     super(props);

     this.state = {
         username:'',
         emailUser:'',
         passwordUser:'',
     }

 }


submitHandler = (event)=>{

    //prevent the default behavior of the browser when submit
   event.preventDefault();
    //destructure the values from the arrays coming from the changeHandler function
    let [ passwordUser ] = this.state.passwordUser;
    let [ emailUser ] = this.state.emailUser;
    let [ username ] = this.state.username;
    
  this.postNewUser(username , emailUser , passwordUser)
}





//create the post request to the server and add it to the existing users 
postNewUser = async (username , email , password)=>{
//create the post parameters before create the request in the server with axios
let paramsPost= {
    method:'POST',
    url:'http://localhost:8080/',
    headers:{'Content-Type':'application/json'},
    data:{
        userId: Math.floor( Math.random() * 100000), //give a random id usinf math random
        name:username,
        emailUser:email,
        passwordUser:password,
        level:'user',
        idCourse:1
    }//end of the data object
}//end of the paramsPost variable

//create the post request
const postUser = await axios(paramsPost).then((response)=>{
    //show the response from the server
    console.log(response.data)
    //in the catch send the error if any
}).catch((error) =>{ console.log('There is an error in your post' + error)});

return postUser
}

changeHandler = (event)=>{
    //set the state for the name of each field , and the value 
    //in this case i made sure that the variables in my state are the same names in the unput fields names
    this.setState({[event.target.name]:[event.target.value]} , ()=>{ return this.state});
}

render(){
return(
    <div>
      <form onSubmit={this.submitHandler} style={{ display:"block" , width:"80%" , margin:'0 auto'}}>
          <input style={{ display:"block" , width:'50%' , margin:'0 auto'}}  type="text" name="username" onChange={this.changeHandler} value={this.state.username} placeholder="username"/>       
          <input style={{ display:"block" ,  width:'50%' , margin:'0 auto'}} type="text" name="emailUser" onChange={this.changeHandler} value={this.state.emailUser} placeholder="user email"/>   
          <input style={{ display:"block" , width:'50%' , margin:'0 auto' }} type="text" name="passwordUser" onChange={this.changeHandler} value={this.state.passwordUser} placeholder="password"/>
          <button type="submit">Submit</button>
  
           </form>
        </div>
)

}
}

export default CreateUser;