import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import CreateUser from './CreateUser';



class Home extends React.Component{

    intervalId;

constructor(props){
    super(props);
   this.state = {
       users:[]
   }

}



getUsersRequest = async ()=>{

  const requestGet = await axios.get('http://localhost:8080/').then((response) =>{
      this.setState({users:response.data.users});
    //  this.intervalId = setTimeout(this.getUsersRequest.bind(this) , 1000); 
  }).catch((error) =>{ console.log(`There is an error in your request ${error}`)})

  return requestGet;
}



componentDidMount(){
    this.getUsersRequest();

}

componentWillUnmount(){
    clearTimeout(this.intervalId);
}

 render(){
     
     return(
       <div>
       {
        this.state.users.map( user =>{
            return(
              <div key={user.userId} >
                  <Link to={`/users/${user.userId}`}>{user.name}</Link>
                  </div>
            )
        })
       }
       <div style={{ padding:'50px',marginTop:'100px' , backgroundColor:'red' , display:'block' , color:'white', height:'20vh' ,textAlign:'center'}}>
           <h1>Post a new User</h1>
       <CreateUser />
       </div>
       </div> 
  )//end of the return
 }//end of the render   
}//end of the Class Home

export default Home;