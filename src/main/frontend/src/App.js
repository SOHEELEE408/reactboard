import React, {Component} from "react";
import EnableColorOnDarkAppBar from "./components/Top";
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import DataTable from "./components/Posts";
import PostsReg from "./components/PostsReg";
import PostsDetail from "./components/PostsDetail";
import InputTest from "./components/InputTest";


class App extends Component{
  render(){
    return(
        <BrowserRouter>
            <EnableColorOnDarkAppBar/>
            <Routes>
                <Route path="/inputTest" element={<InputTest />}></Route>
                <Route path="/" element={<DataTable />}></Route>
                <Route path="/create" element={<PostsReg />}></Route>
                <Route path="/detail/:id" element={<PostsDetail />}></Route>
            </Routes>
        </BrowserRouter>
    )
  }
}

export default App;
