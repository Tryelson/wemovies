import styled, { CSSProperties } from "styled-components";
import { TagType } from "./tag.interface";

const StyledLine = styled.div`
    width: 100%;
    height: 2px;
    background-color: #3F3D56;
`

export default function Line({ customStyles }: { customStyles?: CSSProperties }){
    return (
        <StyledLine style={{...customStyles}}></StyledLine>
    )
}
