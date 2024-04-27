import styled from "styled-components";
import { TagType } from "./tag.interface";

const StyledTable = styled.table`
    width: 100%;
    text-align: left;
    font-weight: bold;
    text-transform: uppercase;
    color: #999999;
    border-spacing: 0px 24px;
`

export default function Table({ children, customStyles }: TagType){
    return (
        <StyledTable style={{...customStyles}} cellSpacing="0" cellPadding="0">{ children }</StyledTable>
    )
}