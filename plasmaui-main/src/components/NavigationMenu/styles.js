import styled from "styled-components";

export const NavigationMenuContainer = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;
    height: calc(100% - 33px);
    width: 150px;
    background: #0C0C10;
    padding: 33px 0 0 0;
    border-right: 2px solid rgba(255, 255, 255, 0.06);
`;

export const Logo = styled.svg`
    margin-bottom: 120px;
`;

export const MenuItemContainer = styled.button`
    border: none;
    width: 50px;
    height: 50px;
    background: ${props => props.selected ? 'linear-gradient(339.38deg, #ED71B6 39.46%, #C33CFF 114.55%)' : 'transparent'};
    border-radius: 5.83548px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: 0.5s;
    
    &:hover {
        svg {
            transform: scale(1.25);
        }
    }
    &:focus {
        outline: none;
    }
`;

export const MenuItemSvg = styled.svg`
    transition: transform .2s;
    path {
        fill: ${props => props.selected ? 'white' : '#2E2E3B'};
    }
`;
