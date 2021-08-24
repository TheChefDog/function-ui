import styled from "styled-components";

export const ProxyGroupTableContainer = styled.div`
    height: calc(100% - 70px);
    flex-grow: 1;
    padding: 50px 50px 20px 20px;
    display: flex;
    flex-flow: column;
    user-select: none;
`;

export const ProxyGroupName = styled.p`
    color: white;
    font-family: sfpro;
    font-weight: 600;
    font-size: 44.7743px;
    font-weight: bold;
    margin: 0 0 15px 0;
`;

export const ProxyGroupTop = styled.div`
    margin: 0 0 40px 0;
`;

export const ProxyGroupActionBar = styled.div`
    width 100%;
    display: flex;
`;

export const CustomDropDown = styled.div`
    border: none;
    width: calc(229px - 54px);
    height: 51px;
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
    max-height: 153px;
    background: #1D1D26;
    border-radius: 6.42086px;
    font-family: sfpro;
    color: white;
    font-size: 19.2626px;
    margin: 0 0 26px 0;
    visibility: ${props => props.open ? 'visible' : 'hidden'};
    overflow-y: scroll;
    position: absolute;
    top: 55px;
    left: 0;
    
    &::-webkit-scrollbar {
      display: none;
    }
`;

export const Option = styled.div`
    width: calc(100% - 54px);
    height: 51px;
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

export const ClearFailedButton = styled.button`
    border: none;
    cursor: pointer;
    transition: transform .2s;
    width: 159.6px;
    height: 51.4px;
    background: #FF537C;
    border-radius: 3.60687px;
    margin: 0 0 0 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    filter: drop-shadow(0px 3.60687px 65.8253px rgba(255, 83, 124, 0.15));
    
    &:hover {
        transform: scale(1.05);
    }
    
    &:focus {
        outline: none;
    }
    
    span {
        margin: 0 0 0 7.5px;
        color: white;
        font-family: sfpro;
        font-size: 14.9913px;
    }
`;

export const TestStartClear = styled.div`
    width: 40%;
    display: flex;
    margin: 0 0 29px auto;
`;

export const TestAllButton = styled.button`
    border: none;
    cursor: pointer;
    transition: transform .2s;
    width: 33%;
    height: 51.4px;
    background: #4FCFA1;
    border-radius: 3.60687px;
    margin: 0 0 0 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    filter: drop-shadow(0px 3.60687px 65.8253px rgba(80, 206, 162, 0.26));
    
    &:hover {
        transform: scale(1.05);
    }
    
    &:focus {
        outline: none;
    }
    
    span {
        margin: 0 0 0 7.5px;
        color: white;
        font-family: sfpro;
        font-size: 14.9913px;
    }
`;

export const StopAllButton = styled.button`
    border: none;
    cursor: pointer;
    transition: transform .2s;
    width: 33%;
    height: 51.4px;
    background: #F8BD65;
    border-radius: 3.60687px;
    margin: 0 0 0 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    filter: drop-shadow(0px 3.60687px 65.8253px rgba(253, 199, 119, 0.26));
    
    &:hover {
        transform: scale(1.05);
    }
    
    &:focus {
        outline: none;
    }
    
    span {
        margin: 0 0 0 7.5px;
        color: white;
        font-family: sfpro;
        font-size: 14.9913px;
    }
`;

export const ClearProxiesButton = styled.button`
    border: none;
    cursor: pointer;
    transition: transform .2s;
    width: 33%;
    height: 51.4px;
    background: #FF537C;
    border-radius: 3.60687px;
    margin: 0 0 0 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    filter: drop-shadow(0px 3.60687px 65.8253px rgba(255, 83, 124, 0.15));
    
    &:hover {
        transform: scale(1.05);
    }
    
    &:focus {
        outline: none;
    }
    
    span {
        margin: 0 0 0 7.5px;
        color: white;
        font-family: sfpro;
        font-size: 14.9913px;
    }
`;

export const ProxiesTableHeadRow = styled.div`
    background: #0D0D11;
    border-radius: 5.87837px;
    width: 95%;
    padding: 0 0 0 5%;
    height: 53px;
    display: flex;
    align-items: center;
    margin: 0 0 25px 0;
`;

export const TableHeadName = styled.span`
    font-weight: 600;
    font-size: 17.6351px;
    width: ${props => props.width};
    color: #676B7C;
`;

export const ProxyTableContent = styled.div`
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

export const CheckBoxContainer = styled.div`
    width: 5%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ProxiesRow = styled.div`
    background: #1D1D26;
    border-radius: 5.87837px;
    width: 100%;
    height: 53px;
    display: flex;
    align-items: center;
    margin: 0 0 10px 0;
`;

export const ProxiesRowText = styled.span`
    font-weight: 600;
    font-size: 17.6351px;
    width: ${props => props.width};
    color: white;
`;

export const ProxyRowActionContainer = styled.div`
    width: 10%;
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
    background: #262631;
    border-radius: 5.87837px;
    
    svg:nth-of-type(1) {
        margin-right: 10px;
    }
    
    svg {
        cursor: pointer;
        transition: transform .2s;
        
        &:hover {
            transform: scale(1.25);
        }
    }
`;

export const Checkbox = styled.div`
    height: 25px;
    width: 25px;
    border: 1px solid #D962B8;
    border-radius: 2px;
    cursor: pointer;
    background: ${props => props.selected ? '#D962B8' : 'transparent'};
    display: flex;
    justify-content: center;
    align-items: center;
`;
