import React, { Component } from "react";
import {FormControl, TextField} from "@mui/material";

class PostsReg extends Component{
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
                <TextField id="author" label="작성자" variant="outlined" onChange={this.handleChange}/>
                <TextField id="title" label="제목" variant="outlined" onChange={this.handleChange}/>
                <TextField id="content" label="내용"
                           multiline rows={10}
                           onChange={this.handleChange}
                          defaultValue="내용을 입력해주세요."
                           variant="outlined"/>
                <div> {this.state.author} {this.state.title} {this.state.content} </div>
            </form>
        );
    }

}

export default PostsReg;