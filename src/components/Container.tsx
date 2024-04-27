import styled from "styled-components"
import { TagType } from "./tags/tag.interface"

const StyledContainer = styled.div`
    width: calc(100% - 32px);
    max-width: 1050px;
    margin: 0 auto;
`

export default function Container({ children, customStyles }: TagType){

    return (
        <StyledContainer style={{...customStyles}}>{ children }</StyledContainer>
    )
}