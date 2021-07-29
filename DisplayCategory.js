
// export default DisplayCategory;

import React from 'react';
//import axios from 'axios';
//import io in the client side this is the method to use
import { io }  from 'socket.io-client';
class DisplayCategory extends React.Component{

  //assing in the vatiable socket the address we want as server 
state = {
 socket:io('http://127.0.0.1:8080/'),
  text:'',
  response:'',
  data:[]
}
getCategories =  ()=>{
 this.state.socket.on('show-category' , (data) =>{
  this.setState({data:data} , ()=>{ return this.state.data})
})

}

postCategory =  (category)=>{
  this.state.socket.emit('post-category' , category);
}

componentDidMount(){this.getCategories();}


handleSubmit = (event)=>{ 
 event.preventDefault();
    this.postCategory(this.state.text)
    this.getCategories();
}



changeHandler = (event)=>{
this.setState({ [event.target.name]: event.target.value } , ()=>{ return this.state.text})
}

render(){

  return(
    <div>
      <h1>Add a new Category</h1>
      <h1>{ this.state.response}</h1>
      <form onSubmit={ this.handleSubmit }>
        <input type="text" name="text" className="name" onChange={ this.changeHandler} />
        <button type="submit">Send</button>
      </form>
      
      <div>
        { this.state.data.map( element =>{
          return(
            <h1 key={element.id}>{element.categoryName}</h1>
          )
        })}
        </div>

      </div>



  )

}

  
}


export default DisplayCategory;