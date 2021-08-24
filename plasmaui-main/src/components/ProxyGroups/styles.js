import styled from "styled-components";

export const ProxyGroupListContainer = styled.div`
    height: 100%;
    width: 300px;
    border-right: 1px solid #2C2C3A;
    display: flex;
    flex-flow: column;
    user-select: none;
    align-items: center;
`;

export const ProxyGroupTop = styled.div`
    display: flex;
    align-items: center;
    margin: 30px 35px 40px 35px;
    
    svg {
        cursor: pointer;
        transition: transform .2s;
        
        &:hover {
            transform: scale(1.1);
        }
    }
`;

export const ProxyGroupHeader = styled.p`
    font-family: sfpro;
    color: white;
    font-weight: 600;
    font-size: 33.0541px;
    margin: 0 7px 0 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const ProxyGroupCard = styled.div`
    width: 250px;
    height: 83.33px;
    background: ${props => props.selected ? 'linear-gradient(180deg, #ED71B6 -0.05%, #922EBE 174%)' : '#1D1D26'};
    box-shadow: ${props => props.selected ? '0px 0px 43.0029px rgba(194, 81, 186, 0.47)' : '0px'};
    box-shadow: 0px;
    border-radius: 7.04225px;
    margin: 0 0 23px 0;
    position: relative;
    cursor: pointer;
    transition: transform .2s;
    
    &:hover {
        transform: scale(1.1);
    }
    
    p:nth-of-type(1) {
        color: ${props => props.selected ? 'black' : 'white'};
    }
    
    p:nth-of-type(2) {
        color: ${props => props.selected ? 'black' : '#ED71B6'};
    }
    
    svg {
        position: absolute;
        bottom: 9.33px;
        right: 8.6px;
        cursor: pointer;
        transition: transform .2s;
        
        &:hover {
            transform: scale(1.25);
        }
        
        path {
            stroke: ${props => props.selected ? 'black' : '#676B7C'};
            fill: ${props => props.selected ? 'black' : '#676B7C'};
        }
    }
`;

export const ProxyGroupCardName = styled.p`
    color: white;
    font-family: sfpro;
    font-size: 21.1943px;
    position: absolute;
    top: 16px;
    left: 18px;
    margin: 0;
    font-weight: bold;
    max-width: 200px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const ProxyGroupAmount = styled.p`
    color: #ED71B6;
    font-family: sfpro;
    font-size: 21.1943px;
    position: absolute;
    bottom: 21.84px;
    left: 18px;
    margin: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;
