import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import {Button} from "@mui/material";
import {useEffect, useState} from "react";
import axios from "axios";

const rows = [];

const Lists =()=>{
    const [contents, setContents] =useState([]);
    useEffect(()=>{
        axios.get('/api/v1',{
            params:{
                page:1
            }
        }).then(response=>{
                setContents(response.data);
                rows.put(response.data);
            });
    },[]);

}


const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'title', headerName: 'Title', width: 130},
    { field: 'author', headerName: 'Author', width: 130 },
    { field: 'createdDate', headerName: 'CreatedDate', width: 130 },
    { field: 'btn', headerName: 'Detail', width:130,
        renderCell:()=>(
            <strong>
                <Button variant="contained"
                        color="primary"
                        size="small"
                        href="api/v1/posts/1"
                >
                    자세히
                </Button>
            </strong>
        )
    }
];

export default function DataTable() {
    return (
        Lists(),
        <div style={{ height: 400, width: '80%', marginLeft:50 }}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
            />
        </div>
    );
}


//<Button variant="contained" color="success">등록</Button>