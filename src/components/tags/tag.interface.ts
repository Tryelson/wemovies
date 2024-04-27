import { CSSProperties } from "styled-components";

export interface TagType {
    children?: React.ReactNode;
    customStyles?: CSSProperties;
    className?: string;
}