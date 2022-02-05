import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import {Button} from "@mui/material";
import {useEffect, useState} from "react";
import axios from "axios";

export default function DataTable() {
    const [contents, setContents] =useState([]);

    React.useEffect(()=>{
        axios.get('/api/v1',{
        }).then(response=>{
            setContents(response.data);
        });
    },[]);

    const handleOnCellClick=(params)=>{
       window.location.href=`detail/${params.id}`;
    }

    const columns = [
        { field: 'id', headerName: 'ID', minWidth: 70, flex:1},
        { field: 'title', headerName: 'Title', minWidth: 130, flex:1},
        { field: 'author', headerName: 'Author', minWidth: 130, flex:1 },
        { field: 'createdDate', headerName: 'CreatedDate', minWidth: 130, flex:2 },
        { field: 'btn', headerName: 'Detail', minWidth:130, flex:1,
            renderCell:()=>(
                <strong>
                    <Button variant="contained"
                            color="primary"
                            size="small"
                    >
                        자세히
                    </Button>
                </strong>
            )
        }
    ];

    return (
        <div style={{ height: 400, width: '80%', marginLeft:50 }}>
            <DataGrid
                rows={contents}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                onCellClick={handleOnCellClick}
            />
            <Button variant="contained" color="secondary" href={'/create'}>등록</Button>
        </div>
    );
}


//<Button variant="contained" color="success">등록</Button>