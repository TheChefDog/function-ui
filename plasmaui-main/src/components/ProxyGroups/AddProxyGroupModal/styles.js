import styled from "styled-components";

export const ModalBackground = styled.div`
    z-index: 1;
    height: 100vh;
    width: 100vw;
    backdrop-filter: blur(5px);
    visibility: ${props => props.visible ? 'visible' : 'hidden'};
    position: absolute;
    left: 0;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ModalContainer = styled.div`
    height: 674px;
    width: 609px;
    background: #121218;
    box-shadow: 0px 0px 100px rgba(0, 0, 0, 0.5);
    border-radius: 6px;
    position: relative;
    user-select: none;
`;

export const CloseModalSvg = styled.svg`
    position: absolute;
    right: 29px;
    top: 19px;
    cursor: pointer;
    transition: transform .2s;
    
    &:hover {
        transform: scale(1.25);
    }
`;

export const AddProxyGroupModalHeader = styled.p`
    font-size: 36px;
    color: white;
    font-family: sfpro;
    font-weight: 600;
    margin: 27px 0 26px 52px;
    color: white;
`;

export const FormContainer = styled.div`
    margin: 0 44px 32px 52px;
    padding-bottom: 37px;
    width: calc(100% - 96px);
    border-bottom: 1px solid #2C2C3A;
`;

export const InputLabel = styled.p`
    margin: 0 0 9px 0;
    color: white;
    font-family: sfpro;
    font-size: 19.2626px;
`;

export const StyledInput = styled.input`
    border: none;
    width: calc(100% - 54px);
    height: 58px;
    background: #1D1D26;
    border-radius: 6.42086px;
    padding: 0 27px;
    font-family: sfpro;
    color: white;
    font-size: 19.2626px;
    margin: 0 0 26px 0;
    
    &:focus {
        outline: none;
    }
    &::placeholder {
        font-family: sfpro;
        color: #676B7C;
        font-size: 19.2626px;
    }
`;

export const StyledTextArea = styled.textarea`
    border: none;
    width: calc(100% - 54px);
    height: 180px;
    background: #1D1D26;
    border-radius: 6.42086px;
    padding: 20px 27px;
    font-family: sfpro;
    color: white;
    font-size: 19.2626px;
    margin: 0;
    resize: none;
    
    &:focus {
        outline: none;
    }
    &::placeholder {
        font-family: sfpro;
        color: #676B7C;
        font-size: 19.2626px;
    }
    
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

export const SaveButton = styled.button`
    border: none;
    width: 513.28px;
    height: 42px;
    background: #29DA8B;
    border-radius: 2px;
    font-family: sfpro;
    color: white;
    font-size: 16px;
    margin: 0 44px 32px 52px;
    cursor: pointer;
    transition: transform .2s;
    
    &:hover {
        transform: scale(1.05);
    }
    
    &:focus {
        outline: none;
    }
`;
