import axios from 'axios';
import React from 'react';


class UserDetail extends React.Component{
constructor(props){
    super(props);
    this.state = {
        userId:this.props.match.params.id,
        userName:'',
        userEmail:'',
    }
}

//create a get Request for an specific user in the server and send the id as query string 
getUserInformation = async ()=>{
    const userDetail = await axios.get(`http://localhost:8080/users?id=${this.state.userId}`).then(response =>{
        //Once create the request to the server the assign the values when the server response in the state
       this.setState({ userName: response.data.user.name , 
                      userEmail:response.data.user.emailUser
    })
    }).catch((error) => { console.log(error)})
//return the value
    return userDetail;


}//end of the information in the get request informationDetail for the user

componentDidMount(){
    this.getUserInformation();
}

  render(){
      //render the final values
    return(
          <div>
          <div>
          <h3>WELCOME USER</h3>
          <h4>{this.state.userName}</h4>
          <h4>{this.state.userEmail}</h4>
          </div>
          </div>
      )
}  
}

export default UserDetail;