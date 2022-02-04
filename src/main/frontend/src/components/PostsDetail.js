import React, { Component } from "react";
import {Button, FormControl, TextField} from "@mui/material";
import styled from 'styled-components';

const StyledForm = styled.div`
    display: grid;
    grid-row-gap: 20px;
    margin: 0 20px;
`;

const StyledBtn = styled.div`
    display: flex;
    justify-content: space-between;
`;

class PostsDetail extends Component{
    state = {
        author:'',
        title:'',
        content:''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }
    render(){
        return(
            <form>
                <StyledForm>
                    <TextField id="author" label="작성자" variant="outlined" onChange={this.handleChange}/>
                    <TextField id="title" label="제목" variant="outlined" onChange={this.handleChange}/>
                    <TextField id="content" label="내용"
                               multiline rows={10}
                               onChange={this.handleChange}
                               variant="outlined"/>
                    <div> {this.state.author} {this.state.title} {this.state.content} </div>
                    <StyledBtn>
                        <Button variant="contained" color="success">수정</Button>
                        <Button variant="contained" color="error">취소</Button>
                    </StyledBtn>
                </StyledForm>
            </form>

        );
    }

}

export default PostsDetail;