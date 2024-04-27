import styled from "styled-components"
import { TagType } from "./tags/tag.interface"

const StyledCard = styled.div`
    background-color: white;
    width: 100%;
    max-width: 338px;
    padding: 1rem; 
    border-radius: 0.25rem; 
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-items: center;
    transition: all 0.3s ease-in-out;

    &:hover {
        box-shadow: 0 0 10px 5px #0e0e0e;
    }
`

export default function Card({ children, customStyles, className }: TagType){
    return (
        <StyledCard style={{...customStyles}} className={className}>{ children }</StyledCard>
    )
}