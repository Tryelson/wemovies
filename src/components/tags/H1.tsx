import styled from "styled-components"
import { TagType } from "./tag.interface"

const StyledH1 = styled.h1`
    font-size: 1.25rem;
`

export default function H1({ children, customStyles }: TagType){

    return (
        <StyledH1 style={{...customStyles}}>{ children }</StyledH1>
    )
}