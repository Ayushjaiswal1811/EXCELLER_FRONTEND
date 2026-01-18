import { Button} from "@mui/material"
import type { Product } from "./interface/product";




import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from "react-router-dom";
import { useState } from "react";





function Home() {

  const [uproduct,setUProduct] = useState<Product[]>(JSON.parse(localStorage.getItem('products')||"[]"))

  const deleteProduct =(id:number)=>{
      const temp=uproduct.filter((u)=>{
        if(id!=u.id){
          return u
        }
      })
setUProduct(temp)
localStorage.setItem("products",JSON.stringify(
  [temp]
))

  }

  return (
    <div>
<TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
             <TableCell align="right">Image</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Category&nbsp;(0)</TableCell>
            <TableCell align="right">price&nbsp;($)</TableCell>
            <TableCell align="right">Editable Links</TableCell>
            <TableCell align="right">Delete Product</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {uproduct.map((user)=> (
            <TableRow
            >
              <TableCell component="th" scope="row">
                {user.id}
              </TableCell>
              <TableCell align="right"><img src={user.image} alt={user.name}></img></TableCell>
              <TableCell align="right">{user.name}</TableCell>
              <TableCell align="right">{user.category}</TableCell>
              <TableCell align="right">{user.price}</TableCell>
              <TableCell align="right"><Link to={`/edit/${user.id}`}>Edit</Link></TableCell>
              <TableCell align="right"><Button 
                                        variant="contained"
                                        onClick={()=>deleteProduct(user.id)}
                                              >DELETE</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    </div>
  )
}

export default Home
