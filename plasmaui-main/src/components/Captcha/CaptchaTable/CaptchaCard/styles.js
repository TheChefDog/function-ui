import styled from "styled-components";

export const CaptchaCardContainer = styled.div`
    height: 53px;
    width: 97%;
    background: #1D1D26;
    border-radius: 5.87837px;
    margin: 0 0 10px 0;
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: 0.5s;
    
    &:hover {
        opacity: 0.8;
    }
`;

export const CheckBox = styled.div`
    height: 23px;
    width: 23px;
    border: 1px solid #D962B8;
    background: ${props => props.selected ? '#D962B8' : 'transparent'};
    border-radius: 2px;
    margin: 0 3% 0 1.65%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const RowText = styled.p`
    color: white;
    margin: 0;
    font-family: sfpro;
    font-size: 17.6351px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: ${props => props.width};
`;

export const ActionsContainer = styled.div`
    display: flex;
    height: 100%;
    align-items: center;
    flex-grow: 1;
    
    svg:nth-of-type(1) {
        margin: 0 5px 0 0;
    }
    
    svg {
        cursor: pointer;
        transition: transform .2s;
        
        &:hover {
            transform: scale(1.25);
        }
    }
`;
