import React from 'react';
import {observer} from "mobx-react-lite";
import {ActionsContainer, CaptchaCardContainer, CheckBox, RowText} from "./styles";

function CaptchaCard({captchaHarvester, number, deleteCaptcha, selected, addToSelected, openModal}) {

    return (
        <CaptchaCardContainer>
            <CheckBox
                selected={selected.includes(captchaHarvester.id)}
                onClick={() => addToSelected(captchaHarvester.id)}
            >
                {
                    selected.includes(captchaHarvester.id) && (
                        <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.8382 2.04665L5.8162 9.84386C5.60119 10.052 5.25311 10.052 5.03897 9.84386L0.160604 5.0708C-0.0535346 4.86177 -0.0535346 4.5221 0.160604 4.31434L1.32623 3.18197C1.54123 2.97337 1.88932 2.97337 2.10345 3.18197L4.0374 5.07463C4.81299 5.83367 6.05239 5.8357 6.83046 5.07921L11.894 0.156138C12.1081 -0.052046 12.4562 -0.052046 12.6721 0.156138L13.8377 1.29019C14.054 1.4988 14.054 1.83847 13.8382 2.04665Z" fill="#1D1D26"/>
                        </svg>
                    )
                }
            </CheckBox>
            <RowText width='7.75%'>{number + 1}</RowText>
            <RowText width='15.5%'>{captchaHarvester.name}</RowText>
            <RowText width='33.5%'>{captchaHarvester.email}</RowText>
            <RowText width='18.5%'>{captchaHarvester.proxy}</RowText>

            <ActionsContainer>
                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={openModal}>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.1597 1.85454C12.6913 1.32294 13.4661 1.11533 14.1923 1.30991C14.9185 1.50449 15.4857 2.0717 15.6803 2.79787C15.8749 3.52405 15.6672 4.29887 15.1356 4.83047L5.0919 14.8742L1 15.9902L2.11597 11.8983L12.1597 1.85454Z" fill="#676B7C" stroke="#676B7C" stroke-width="1.48796" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <svg width="17" height="19" viewBox="0 0 17 19" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => deleteCaptcha(captchaHarvester.id)}>
                    <path d="M1.1167 4.94738H2.76999H15.9963" stroke="#FF5781" stroke-width="1.65329" stroke-linecap="round" stroke-linejoin="round"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.3431 4.94751V16.5205C14.3431 17.4336 13.6029 18.1738 12.6898 18.1738H4.42331C3.51022 18.1738 2.77002 17.4336 2.77002 16.5205V4.94751M5.24998 4.94739V3.2941C5.24998 2.38101 5.99018 1.64081 6.90327 1.64081H10.2099C11.1229 1.64081 11.8631 2.38101 11.8631 3.2941V4.94739" fill="#FF5781"/>
                    <path d="M15.1697 4.94751C15.1697 4.49096 14.7996 4.12086 14.3431 4.12086C13.8865 4.12086 13.5164 4.49096 13.5164 4.94751H15.1697ZM3.59667 4.94751C3.59667 4.49096 3.22656 4.12086 2.77002 4.12086C2.31348 4.12086 1.94337 4.49096 1.94337 4.94751H3.59667ZM4.42334 4.94739C4.42334 5.40394 4.79344 5.77404 5.24998 5.77404C5.70652 5.77404 6.07663 5.40394 6.07663 4.94739H4.42334ZM11.0365 4.94739C11.0365 5.40394 11.4066 5.77404 11.8631 5.77404C12.3197 5.77404 12.6898 5.40394 12.6898 4.94739H11.0365ZM13.5164 4.94751V16.5205H15.1697V4.94751H13.5164ZM13.5164 16.5205C13.5164 16.9771 13.1463 17.3472 12.6898 17.3472V19.0005C14.0594 19.0005 15.1697 17.8902 15.1697 16.5205H13.5164ZM12.6898 17.3472H4.42331V19.0005H12.6898V17.3472ZM4.42331 17.3472C3.96677 17.3472 3.59667 16.9771 3.59667 16.5205H1.94337C1.94337 17.8902 3.05368 19.0005 4.42331 19.0005V17.3472ZM3.59667 16.5205V4.94751H1.94337V16.5205H3.59667ZM6.07663 4.94739V3.2941H4.42334V4.94739H6.07663ZM6.07663 3.2941C6.07663 2.83756 6.44673 2.46745 6.90327 2.46745V0.814162C5.53364 0.814162 4.42334 1.92447 4.42334 3.2941H6.07663ZM6.90327 2.46745H10.2099V0.814162H6.90327V2.46745ZM10.2099 2.46745C10.6664 2.46745 11.0365 2.83756 11.0365 3.2941H12.6898C12.6898 1.92447 11.5795 0.814162 10.2099 0.814162V2.46745ZM11.0365 3.2941V4.94739H12.6898V3.2941H11.0365Z" fill="#FF5781"/>
                </svg>
            </ActionsContainer>
        </CaptchaCardContainer>
    )
}

export default observer(CaptchaCard);
