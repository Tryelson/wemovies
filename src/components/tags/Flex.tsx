import styled from "styled-components"
import { TagType } from "./tag.interface"

const StyledDivFlex = styled.div`
    display: flex;
`

export default function Flex({ children, customStyles, className }: TagType){

    return (
        <StyledDivFlex style={{...customStyles}} className={className}>{ children }</StyledDivFlex>
    )
}