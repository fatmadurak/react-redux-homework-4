import React from 'react';
import { useQuery } from 'react-query';
import { Button } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { fetchProducts } from '../Services/Api';
import { useDispatch, useSelector } from 'react-redux';
function Products() {
  const { isLoading, isError, data, error } = useQuery('products',fetchProducts);
  const dispatch=useDispatch();
 
  const handleClick=(product)=>{

   dispatch({

  type:'ADD_PRODUCT',
  payload:product,

   })


  }
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>{error.message}</div>;
  }

  const columns = [
    {
      field: 'name',
      headerName: 'Name',
      flex: 1,
    },
    {
      field: 'unitPrice',
      headerName: 'UnitPrice',
      flex: 1,
    },
    {
      field: 'addProduct',
      headerName: 'Add Product',
      sortable: false,
      renderCell: (params) => (
        
          <Button variant="contained" color="primary"  onClick={() => handleClick(params.row)}>
            Add
          </Button>
     
      ),
    },
  ];

  return (
    <div style={{display:"flex",justifyContent:"center",marginTop:".5rem"}}>
      <div style={{ height: 840, width: '70%' }}>
        <DataGrid rows={data} columns={columns} />
      </div>
    </div>
  );
}

export default Products;
