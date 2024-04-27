import styled from "styled-components"
import { TagType } from "./tag.interface"

interface ButtonProps extends TagType {
    onClick?: () => void;
    type?: "button" | "reset" | "submit";
    variant?: string;
    disabled?: boolean;
}

const StyledButton = styled.button`
    width: 100%;
    max-width: 173px;
    height: 40px;

    background-color: #009EDD;
    color: white;
    border: none;
    border-radius: 4px;
    padding: 8px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
        background-color: #0073A1;
    }

    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
`

const StyledSecondaryButton = styled.button`
    width: fit-content;

    background-color: transparent;
    border: 0;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
        opacity: 0.7;
    }
`

export default function Button({ customStyles, children, onClick, type = 'button', variant, disabled }: ButtonProps){

    return (
        variant == 'secondary' ? (
            <StyledSecondaryButton style={{...customStyles}} onClick={onClick} type={type} disabled={disabled}>{ children }</StyledSecondaryButton>
        ) : (
            <StyledButton style={{...customStyles}} onClick={onClick} type={type} disabled={disabled}>{ children }</StyledButton>
        )
    )
}