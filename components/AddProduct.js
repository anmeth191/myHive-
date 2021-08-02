import React from 'react';
import axios from 'axios';


class AddProduct extends React.Component{
constructor(props){
super(props)

  this.state = {
      categories:[],
      suppliers:[],
      image: []
  }
}

getCategories = async ()=>{
await axios.get('http://127.0.0.1:8000/categories').then( response =>{
this.setState({ categories:response.data.body} , ()=>{ return this.state.categories})
})
}


getSuppliers = async ()=>{
    await axios.get('http://127.0.0.1:8000/suppliers').then( response =>{
    this.setState({ suppliers:response.data.body} , ()=>{ return this.state.suppliers})
    })
    }


handleChange = (event)=>{
    const file = event.target.files[0];
    this.setState({image:file} ,()=>{ return this.state.image})
}


submitHandler = (event)=>{
    event.preventDefault();
  const { image } = this.state;
  const data = new FormData();  
  data.append('productphoto' , image);

  axios.post('http://127.0.0.1:8000/products' , data).then( response =>{ console.log(response)}).catch(error =>{ console.log(error)});
}


componentDidMount(){
  //  this.getCategories();
    //this.getSuppliers();
}    





render(){
return(
    <div>
        <h1>Add a Product to your inventory</h1>
       <form onSubmit={ this.submitHandler }>
           
    
           <div>
           <label htmlFor="productphoto">Product photo:  </label>
           <input type="file" name="productphoto" onChange={this.handleChange} />
           </div>

             <button  type="submit">Submit Product</button>

           </form>
    </div>
)

}//end of the render
}//end of the class 

export default AddProduct;