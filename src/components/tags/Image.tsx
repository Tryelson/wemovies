import styled from "styled-components"

const StyledImage = styled.img`
`

interface ImageProps {
    src: string;
    alt: string;
    width: number;
    height: number;
}

export default function Image({ src, alt, width, height }: ImageProps){

    return (
        <StyledImage src={src} alt={alt} width={width} height={height} />
    )
}