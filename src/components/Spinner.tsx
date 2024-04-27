import styled, { CSSProperties } from "styled-components"
import Div from "./tags/Div"

const StyledDiv = styled.div``

interface SpinnerProps {
    customStyles?: CSSProperties
}

export default function Spinner({ customStyles }: SpinnerProps){

    return (
        <StyledDiv style={{...customStyles}} className={'spinner'}></StyledDiv>
    )
}