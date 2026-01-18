import { Button, TextField } from "@mui/material";
import { useState } from "react";
import type { Product } from "./interface/product";
function AddProduct() {
  const[product,setProduct] = useState<Omit<Product , "id">>({
    name:"",
    price:0,
    category:"",
    image:""
  })

const handleChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
  const { name , value } = e.target
  setProduct(
    {
      ...product,
      [name]: name === "price" ? Number(value) : value
    }
  )
}

const handleSubmit=(e:React.FormEvent<HTMLFormElement>) =>{
      e.preventDefault();
      const ExistingProduct:Product[] =
          JSON.parse(localStorage.getItem('products')||"[]");

const newProduct:Product ={
  id: Date.now(),
  ...product
}
localStorage.setItem('products',JSON.stringify(
  [...ExistingProduct,newProduct]
))
setProduct({
            name: "",
            price: 0,
            category: "",
            image: ""
        })
}


  return (
    <div>
      <h1> Add product</h1>
      <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="">Product Name</label>
            <TextField
            label="Product-Name"
            name="name"
            value={product.name}
            onChange={handleChange}
            fullWidth
            margin="normal"
            />
          </div>

          <div>
            <label htmlFor="">Product Price</label>
            <TextField
            label="Product-Price"
            name="price"
            value={product.price}
            onChange={handleChange}
            fullWidth
            margin="normal"
            />
          </div>

          <div>
            <label htmlFor="">Product Category</label>
            <TextField
            label="Product-Category"
            name="category"
            value={product.category}
            onChange={handleChange}
            fullWidth
            margin="normal"
            />
          </div>

          <div>
            <label htmlFor="">Product Image</label>
            <TextField
            label="Product-Image"
            name="image"
            value={product.image}
            onChange={handleChange}
            fullWidth
            margin="normal"
            />
          </div>

          <Button 
          type="submit"
          variant="contained"
          fullWidth
          margin="normal" >
            ADD
          </Button>

      </form>
    </div>
  )
}

export default AddProduct
