import React, {useState} from "react";
import {Button, TextField} from "@mui/material";
import styled from 'styled-components';
import axios from "axios";

const StyledForm = styled.div`
    display: grid;
    grid-row-gap: 20px;
    margin: 0 20px;
`;

const StyledBtn = styled.div`
    display: flex;
    justify-content: space-between;
`;

export default function PostsReg(){
    const [ values, setValues ] = useState({ title:"", content:""});

    const handleChange =(e)=> {
        const {id, value}=e.target;
        setValues({...values, [id]: value});
    };

    const handlePost = async () => {
        await axios.post('/api/v1/posts', values
        ).then((response)=>{
            console.log(response.data);
            window.location.href='/';
        })
    }

    const handleCancle =()=>{
        window.location.href='/';
    }

        return(
            <form>
                <StyledForm>
                    <TextField id="author" label="작성자" variant="outlined" onChange={handleChange}/>
                    <TextField id="title" label="제목" variant="outlined" onChange={handleChange}/>
                    <TextField id="content" label="내용"
                           multiline rows={10}
                           onChange={handleChange}
                           variant="outlined"/>
                    <StyledBtn>
                        <Button variant="contained" color="success" onClick={handlePost}>등록</Button>
                        <Button variant="contained" color="error" onClick={handleCancle}>취소</Button>
                    </StyledBtn>
                </StyledForm>
            </form>

        );

}