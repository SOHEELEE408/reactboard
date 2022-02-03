import React, {Component} from "react";
import PostsReg from "./components/PostsReg";
import EnableColorOnDarkAppBar from "./components/Top";
import StickyHeadTable from "./components/Posts";

class App extends Component{
  render(){
    return(
        <div>
            <EnableColorOnDarkAppBar />
            <div></div>
            <StickyHeadTable />
            <PostsReg />
        </div>
    )
  }
}

export default App;
