import * as React from "react";
import {Button, TextField} from "@mui/material";
import styled from 'styled-components';
import {useEffect, Component, useState, useCallback} from "react";
import {useParams} from "react-router-dom";
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


export default function PostsDetail() {
            const [content, setContent] = useState([]);

            const id = useParams().id;

            React.useEffect(() => {
                axios.get(`/api/v1/posts/${id}`, {}).then(response => {
                    setContent(response.data);
                });
            }, []);

            const data = content;

            const [ values, setValues ] = useState({ title:"", content:""});

            const handleChange =(e)=> {
                const {id, value}=e.target;
                setValues({...values, [id]: value});
            };

            const handleModify = async () => {
                await axios.put(`/api/v1/posts/${id}`, values
                ).then((response)=>{
                    console(response.data);
                    window.location.href='/';
                })
            }

            const handleDelete = () =>{
                axios.delete(`/api/v1/posts/${id}`,{}
                ).then(response=> {
                        alert('삭제되었습니다.'+ response.data);
                        window.location.href = '/';
                    }
                )
            }

            const handleCancle =()=>{
                window.location.href='/';
            }

            return (
                console.log(data),
                <form>
                    <StyledForm>
                        <TextField id="author" label="작성자" variant="outlined" multiline rows={1}
                                   defaultValue={data.author ||''}
                        />
                        <TextField id="title" label="제목" variant="outlined" multiline rows={1} defaultValue={data.title||''} onChange={handleChange}/>
                        <TextField id="content" label="내용"
                                   multiline rows={10}
                                   variant="outlined"
                                   defaultValue={data.content||''}
                                   onChange={handleChange}
                        />
                        <StyledBtn>
                            <Button variant="contained" color="success" onClick={handleModify}>수정</Button>
                            <Button variant="contained" color="warning" onClick={handleDelete}>삭제</Button>
                            <Button variant="contained" color="error" onClick={handleCancle}>취소</Button>
                        </StyledBtn>
                    </StyledForm>
                </form>

            );

}
