import React from 'react';
import axios from 'axios';


class AddProduct extends React.Component{
constructor(props){
super(props)

  this.state = {
      categories:[],
      suppliers:[],
      image:[],
      photo:''
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



    getImages = async ()=>{
        await axios.get('http://127.0.0.1:8000/products').then( response =>{
    //    this.setState({image:response.data.body[0].imagep.data.toString('base64')} , ()=>{ return this.state.image});
       this.setState({photo:response.data.photo}, ()=>{ return this.state.photo}) 
})
        }
    


handleChange = (event)=>{
    // const file = event.target.files[0];
    // this.setState({image:file} ,()=>{ return this.state.image})


    const file = event.target.files[0];
    this.setState({image:file} , ()=>{ return this.state.image});
}


submitHandler = (event)=>{
//     event.preventDefault();
//   const { image } = this.state;
//   const data = new FormData();  
//   data.append('productphoto' , image);

//    axios.post('http://127.0.0.1:8000/products' , data).then( response =>{ console.log(response)}).catch(error =>{ console.log(error)});


event.preventDefault();
const data = new FormData();
data.append('productphoto' , this.state.image);
axios.post('http://127.0.0.1:8000/products' , data).then( response =>{ console.log(response)}).catch(error =>{ console.log(error)});
}


componentDidMount(){
  //  this.getCategories();
    //this.getSuppliers();
    this.getImages();
}    





render(){
    console.log(this.state.photo)
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


     <img src={this.state.photo} height="240px" />


    </div>
)

}//end of the render
}//end of the class 

export default AddProduct;