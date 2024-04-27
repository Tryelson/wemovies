import styled from "styled-components"
import { TagType } from "./tag.interface"

const StyledLi = styled.li`
    font-size: 1.25rem;
`

interface Li extends TagType {
    className?: string;
}

export default function Li({ children, customStyles, className }: TagType){

    return (
        <StyledLi style={{...customStyles}} className={className}>{ children }</StyledLi>
    )
}