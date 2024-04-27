import styled from "styled-components"
import { TagType } from "./tag.interface"

const StyledHeader = styled.header`
    background-color: transparent;
    color: white;
    margin: 1.5625rem 0;

    display: flex;
    justify-content: space-between;
    gap: 0.625rem;
`

export default function Header({ children, customStyles }: TagType){

    return (
        <StyledHeader style={{...customStyles}}>{ children }</StyledHeader>
    )
}