import styled from "styled-components";
import { TagType } from "./tag.interface";

const StyledH2 = styled.h2`
    font-size: 0.875rem;
    font-weight: 600;
    line-height: 1.1875rem;

    @media(max-width: 360px){
        display: none;
    }
`

export default function H2({ children, customStyles }: TagType){
    return (
        <StyledH2 style={{...customStyles}}>{ children }</StyledH2>
    )
}
