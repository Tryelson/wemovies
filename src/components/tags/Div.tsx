import styled from "styled-components"
import { TagType } from "./tag.interface"

const StyledDiv = styled.div`
`

export default function Div({ children, customStyles, className }: TagType){

    return (
        <StyledDiv style={{...customStyles}} className={className}>{ children }</StyledDiv>
    )
}