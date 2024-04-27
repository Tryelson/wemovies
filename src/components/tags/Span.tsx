import styled from "styled-components";
import { TagType } from "./tag.interface";

const StyledSpan = styled.span`
    color: #999999;
    font-size: 0.75rem;
`

export default function Span({ children, customStyles }: TagType){

    return (
        <StyledSpan style={{...customStyles}}>{ children }</StyledSpan>
    )
}