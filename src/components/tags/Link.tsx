import styled from "styled-components"
import { TagType } from "./tag.interface"
import NextLink from 'next/link'
import Span from "./Span"

interface LinkProps extends TagType {
    href: string
}

const StyledLink = styled(NextLink)`
    text-decoration: 'none';
`

export default function Link({ children, customStyles, href }: LinkProps){

    return (
        <StyledLink href={href} style={{...customStyles}} >{ children }</StyledLink>
    )
}