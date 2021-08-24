import styled from "styled-components";

export const CaptchaProfilesContainer = styled.div`
    height: calc(100% - 280px);
    flex-grow: 1;
    display: flex;
    flex-flow: column;
    align-items: center;
    padding: 130px 5% 150px 5.5%;
`;

export const ButtonsContainer = styled.div`
    display: flex;
    margin: 0 0 26px 0;
`;

export const ArrowButtonContainer = styled.button`
    background: rgba(255, 255, 255, 0.22);
    border-radius: 3.2px;
    width: 32px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 4.5px;
    cursor: ${props => props.enableAnimation ? 'pointer' : 'auto'};;
    border: none;
    opacity: ${props => props.enableAnimation ? '1' : '0.5'};
    
    &:hover {
        transition: transform .2s;
        transform: scale(${props => props.enableAnimation ? '1.25' : '1'});
    }
    &:focus {
        outline: none;
    }
`;

export const CaptchaProfilesBox = styled.div`
    width: 100%;
    flex: 1 1 auto;
    height: 100px;
    display: flex;
    flex-flow: column;
    flex-wrap: wrap;
    user-select: none;
`;

export const CaptchaProfileCard = styled.div`
    flex: 0 1 20%;
    background: conic-gradient(from 89.79deg at 47.36% 45.01%, #FFB5A1 0deg, #FF56D7 191.25deg, #842BBC 264.38deg, #FFB5A1 360deg);
    border-radius: 5px;
    width: 45%;
    filter: drop-shadow(0px 14.7032px 65.7322px rgba(255, 163, 171, 0.14));
    position: relative;
    margin: 0 0 3.5% ${props => props.rightSide ? 'auto' : '0'};
    cursor: pointer;
    
    &:hover {
        transition: transform .2s;
        transform: scale(1.05);
    }
`;

export const BlurBox = styled.div`
    background: rgba(255, 255, 255, 0.2); // Make sure this color has an opacity of less than 1
    backdrop-filter: blur(7px);
    width: 100%;
    height: 100%;
    border-radius: 5px;
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
`;

export const CaptchaSvg = styled.svg`
    position: absolute;
    left: 9%;
    top: 18%;
    
    @media (max-height: 868px) {
        visibility: hidden;
    }
`;

export const ActionsContainer = styled.div`
    display: flex;
    position: absolute;
    right: 5.7%;
    top: 10.6%;
    
    svg:nth-of-type(1) {
        margin: 0 8px 0 0;
    }
`;

export const ActionSvg = styled.svg`
    cursor: pointer;
    
    &:hover {
        transition: transform .2s;
        transform: scale(1.25);
    }
`;

export const TextContainer = styled.div`
    position: absolute;
    left: 9%;
    bottom: 20%;
`;

export const CaptchaProfileName = styled.p`
    color: white;
    font-size: 19px;
    font-weight: bold;
    font-family: sfpro;
    margin: 0;
    
    @media (max-height: 868px) {
        font-size: 15px;
    }
`;

export const CaptchaProfileType = styled.p`
    color: white;
    font-size: 13px;
    font-family: sfpro;
    margin: 0;
    
    @media (max-height: 868px) {
        font-size: 9px;
    }
`;
