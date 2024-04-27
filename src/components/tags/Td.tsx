import styled from "styled-components";
import { TagType } from "./tag.interface";

const StyledTd = styled.td`
`

export default function Td({ children, customStyles }: TagType){
    return (
        <StyledTd style={{...customStyles}}>{ children }</StyledTd>
    )
}