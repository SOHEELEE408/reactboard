import React, {Component} from "react";
import EnableColorOnDarkAppBar from "./components/Top";
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import StickyHeadTable from "./components/Posts";
import PostsReg from "./components/PostsReg";
import PostsDetail from "./components/PostsDetail";


class App extends Component{
  render(){
    return(
        <BrowserRouter>
            <EnableColorOnDarkAppBar/>
            <Routes>
                <Route path="/api/v1" element={<StickyHeadTable />}></Route>
                <Route path="/create" element={<PostsReg />}></Route>
                <Route path="/api/v1/posts/:id" element={<PostsDetail />}></Route>
            </Routes>
        </BrowserRouter>
    )
  }
}

export default App;
