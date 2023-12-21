import styled from "styled-components";
import ReactPaginate from "react-paginate";
export const StyledReactPaginate = styled(ReactPaginate)`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
    margin-bottom: 40px;
    li {
        display: inline-flex;
    }
    li a {
        text-align: center;
        width: 45px;
        line-height: 42px;
        height: 45px;
        border: 1px solid #fe5f1e;
        border-radius: 30px;
        margin-right: 10px;
        cursor: pointer;
        display: inline-block;
        color: #fe5f1e;
    }
    li a:hover {
        background-color: #fe5f1e;
        color: #fff;
    }
    .selected a {
        background-color: #fe5f1e;
        color: #fff;
    }
`
