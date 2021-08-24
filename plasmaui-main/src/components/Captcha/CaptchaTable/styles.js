import styled from "styled-components";
import Clock from 'react-live-clock';

export const CaptchaTableContainer = styled.div`
    width: 47.5%;
    height: calc(100% - 85px);
    padding: 50px 0 35px 7.5%;
    display: flex;
    flex-flow: column;
    user-select: none;
    border-right: 1px solid #2C2C3A;
`;

export const HeaderContainer = styled.div`
    display: flex;
    margin: 0 0 15px 0;
    align-items: center;
    
    svg {
        cursor: pointer;
        transition: transform .2s;
        
        &:hover {
            transform: scale(1.25);
        }
    }
`;

export const CaptchaHeader = styled.p`
    margin: 0 15px 0 0;
    font-family: sfpro;
    color: white;
    font-size: 44.7743px;
    font-weight: bold;
`;

export const StyledClock = styled(Clock)`
    font-family: sfpro;
    font-size: 17.2727px;
    color: rgba(255, 255, 255, 0.36);
    font-family: sfpro;
    margin: 0 0 40px 0;
`;

export const TableColumnHeader = styled.div`
    height: 53px;
    width: 89.3%;
    background: #0D0D11;
    border-radius: 5.87837px;
    display: flex;
    margin: 0 3% 17px 0;
    align-items: center;
    padding: 0 0 0 7.7%;
`;

export const ColumnText = styled.p`
    font-family: sfpro;
    color: #676B7C;
    font-weight: 600;
    font-size: 17.6351px;
    margin: 0;
    width: ${props => props.width};
`;

