import React from 'react';
import { Button } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { useDispatch, useSelector } from 'react-redux';

function Favorites() {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.products); 

  const handleDelete=(product)=>{

    dispatch({

      type:'REMOVE_PRODUCT',
      payload:product,
    
       })


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
      field: 'deleteProduct',
      headerName: 'Delete Product',
      sortable: false,
      renderCell: (params) => (
        <Button
          variant="contained"
          color="primary"
          onClick={() => handleDelete(params.row)}
        >
          Delete
        </Button>
      ),
    },
  ];

  
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div style={{ height: 840, width: '70%' }}>
        <DataGrid rows={favorites} columns={columns} />
      </div>
    </div>
  );
}

export default Favorites;
