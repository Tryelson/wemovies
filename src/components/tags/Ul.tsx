import styled from "styled-components"
import { TagType } from "./tag.interface"

const StyledUl = styled.ul`
    list-style-type: none;
    margin: 0;
`

export default function Ul({ children, customStyles }: TagType){

    return (
        <StyledUl style={{...customStyles}}>{ children }</StyledUl>
    )
}