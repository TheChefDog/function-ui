import styled from "styled-components";

export const TableContentContainer = styled.div`
    width: 100%;
    flex: 1 1 auto;
    height: 100px;
    overflow-y: scroll;
    overflow-x: hidden;
    scroll-behavior: smooth;
    
    &::-webkit-scrollbar {
        width: 1px;
    }
    
    &::-webkit-scrollbar-track {
        transparent
    }
    
    &::-webkit-scrollbar-thumb {
        background: linear-gradient(180deg, #9732BD 0%, #EA6EB6 100%);
        border-radius: 1px;
    }
    
    &::-webkit-scrollbar-thumb:hover {
        opacity: 0.8;
    }
`;
