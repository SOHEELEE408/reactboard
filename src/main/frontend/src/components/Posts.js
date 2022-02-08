import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import {Button} from "@mui/material";
import {useEffect, useState} from "react";
import axios from "axios";
import CustomAxios from "../CustomAxios";

export default function DataTable() {
    const [contents, setContents] =useState([]);

    // IP주소 변수 선언
    const [ip, setIp] = useState('');

    // IP주소 값을 설정합니다.
    function callback(data) {
        setIp(data);
    }

    // 첫번째 렌더링을 다 마친 후 실행합니다.
    useEffect(
        () => {
            // 클라이언트의 IP주소를 알아내는 백엔드의 함수를 호출합니다.
            CustomAxios('/ip', callback);
        }, []
    );

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
        { field: 'createdDate', headerName: 'CreatedDate', minWidth: 130, flex:2 }
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