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
    width: 411px;
    background: #121218;
    box-shadow: 0px 0px 100px rgba(0, 0, 0, 0.5);
    border-radius: 6px;
    position: relative;
    user-select: none;
`;

export const CloseModalSvg = styled.svg`
    position: absolute;
    right: 13.79px;
    top: 10px;
    cursor: pointer;
    transition: transform .2s;
    
    &:hover {
        transform: scale(1.25);
    }
`;

export const CaptchaHarvesterHeader = styled.p`
    font-size: 36px;
    color: white;
    font-family: sfpro;
    font-weight: 600;
    margin: 27px 0 54px 27px;
    color: white;
`;

export const ExportSvg = styled.svg`
    position: absolute;
    top: 111px;
    right: 35px;
    cursor: pointer;
    transition: transform .2s;
    
    &:hover {
        transform: scale(1.25);
    }
`;

export const FormContainer = styled.div`
    margin: 0 32.5px 32px 32.5px;
    padding-bottom: 11px;
    width: calc(100% - 65px);
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

export const SaveButton = styled.button`
    border: none;
    width: 341px;
    height: 42px;
    background: #29DA8B;
    border-radius: 2px;
    font-family: sfpro;
    color: white;
    font-size: 16px;
    margin: 0 35px 28px 35px;
    cursor: pointer;
    transition: transform .2s;
    
    &:hover {
        transform: scale(1.05);
    }
    
    &:focus {
        outline: none;
    }
`;

export const DeleteButton = styled.button`
    border: none;
    width: 341px;
    height: 42px;
    background: #FF5781;
    border-radius: 2px;
    font-family: sfpro;
    color: white;
    font-size: 16px;
    margin: 0 35px;
    cursor: pointer;
    transition: transform .2s;
    
    &:hover {
        transform: scale(1.05);
    }
    
    &:focus {
        outline: none;
    }
`;

export const CustomDropDown = styled.div`
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
    display: flex;
    align-items: center;
    cursor: pointer;
    position: relative;
    
    svg {
        margin-left: auto;
    }
`;

export const CustomDropDownOptions = styled.div`
    border: none;
    width: calc(100%);
    height: auto;
    max-height: 174px;
    background: #1D1D26;
    border-radius: 6.42086px;
    font-family: sfpro;
    color: white;
    font-size: 19.2626px;
    margin: 0 0 26px 0;
    visibility: ${props => props.open ? 'visible' : 'hidden'};
    overflow-y: scroll;
    position: absolute;
    top: 63px;
    left: 0;
    
    &::-webkit-scrollbar {
      display: none;
    }
`;

export const Option = styled.div`
    width: calc(100% - 54px);
    height: 58px;
    display: flex;
    padding: 0 27px;
    align-items: center;
    background: #1D1D26;
    border-radius: 6.42086px;
    transition: transform .2s;
    
    &:hover {
        transform: scale(1.05);
    }
`;
