import { MAIN_GREEN_COLOR } from "@/utilities"
import styled from "styled-components"

export const H1 = styled.h1`
    font-size: 1.25rem;
    color: ${MAIN_GREEN_COLOR};
`

export const H2 = styled.h2<{ $color?: string }>`
    font-size: 1rem;
    font-family: sohne, "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-weight:bold;
    margin-block-start: 0.83em;
    margin-block-end:0.83em;
    margin-bottom: -0.46em;
    margin-top:1.72em;
    color: ${props => props?.$color || "#fff"};
`

export const Li = styled.li`    
    font-size: 1rem;
    letter-spacing: -0.06px;
    color:#fff; 
`

export const Span = styled.span<{ $color?: string }>`
    font-size: 1rem;
    color:${props => props?.$color || "#fff"};
    font-weight:bold;
`

export const P = styled.p`
    font-size: 1rem;
    color:#fff;
    letter-spacing: -0.06px;
    margin-bottom: -0.46em;
    margin-top:0.86em;
`

export const Article = styled.article`
    max-width:37.5rem;
    margin:auto;
    text-size-adjust:100%;
    text-align:left;
`

export const Section = styled.section`
    text-size-adjust:100%;
    text-align:left;
`

export const Img = styled.img`
    margin:auto;
    display:flex;
`

