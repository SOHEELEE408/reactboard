import React from "react";
import {render,cleanup} from "@testing-library/react";

import EnableColorOnDarkAppBar from "../components/Top";

// <AppBar/>가 화면에 존재하는지 검증
describe("top bar text", ()=>{
    it("renders header", ()=>{
        const {getByText} = render(<EnableColorOnDarkAppBar path="/" />);
        const header = getByText("React Board");
        expect(header).toBeInTheDocument();
        cleanup();
    });

});