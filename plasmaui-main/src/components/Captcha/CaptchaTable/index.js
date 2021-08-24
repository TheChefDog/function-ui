import React, {useEffect, useState} from 'react';
import {observer} from "mobx-react-lite";
import {
    CaptchaHeader,
    CaptchaTableContainer,
    ColumnText,
    HeaderContainer,
    StyledClock,
    TableColumnHeader
} from "./styles";
import TableContent from "./TableContent";
import {mainConfig} from "../../../App";

function CaptchaTable({openModal, onAddCaptchaHarvester}) {
    const deleteCaptcha = (id) => {
        mainConfig.captchaHarvesters = mainConfig.captchaHarvesters.filter(ch => ch.id !== id);
        onAddCaptchaHarvester();
    };

    return (
        <React.Fragment>
            <CaptchaTableContainer>
                <HeaderContainer>
                    <CaptchaHeader>Captcha</CaptchaHeader>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={openModal}>
                        <path d="M12 24C5.38293 24 0 18.6171 0 12C0 5.38293 5.38293 0 12 0C18.6171 0 24 5.38293 24 12C24 18.6171 18.6171 24 12 24ZM12 1.5C6.21002 1.5 1.5 6.21002 1.5 12C1.5 17.79 6.21002 22.5 12 22.5C17.79 22.5 22.5 17.79 22.5 12C22.5 6.21002 17.79 1.5 12 1.5Z" fill="url(#paint0_linear)"/>
                        <path d="M17.25 12.75H6.75C6.336 12.75 6 12.414 6 12C6 11.586 6.336 11.25 6.75 11.25H17.25C17.664 11.25 18 11.586 18 12C18 12.414 17.664 12.75 17.25 12.75Z" fill="url(#paint1_linear)"/>
                        <path d="M12 18C11.586 18 11.25 17.664 11.25 17.25V6.75C11.25 6.336 11.586 6 12 6C12.414 6 12.75 6.336 12.75 6.75V17.25C12.75 17.664 12.414 18 12 18Z" fill="url(#paint2_linear)"/>
                        <defs>
                            <linearGradient id="paint0_linear" x1="24.9199" y1="0.00118941" x2="-1.44251" y2="0.00118941" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#ED71B6"/>
                                <stop offset="1" stop-color="#922EBE"/>
                            </linearGradient>
                            <linearGradient id="paint1_linear" x1="18.4599" y1="11.2501" x2="5.27875" y2="11.2501" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#ED71B6"/>
                                <stop offset="1" stop-color="#922EBE"/>
                            </linearGradient>
                            <linearGradient id="paint2_linear" x1="12.8075" y1="6.00059" x2="11.1598" y2="6.00059" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#ED71B6"/>
                                <stop offset="1" stop-color="#922EBE"/>
                            </linearGradient>
                        </defs>
                    </svg>
                </HeaderContainer>
                <StyledClock format={'h:mm:ss A [-] MMM D'} ticking={true} />

                <TableColumnHeader>
                    <ColumnText width='8.3%'>#</ColumnText>
                    <ColumnText width='16.5%'>Username</ColumnText>
                    <ColumnText width='36.8%'>Email</ColumnText>
                    <ColumnText width='20%'>Proxy</ColumnText>
                    <ColumnText width='7%'>Actions</ColumnText>
                </TableColumnHeader>

                <TableContent
                    onAddCaptchaHarvester={onAddCaptchaHarvester}
                    deleteCaptcha={deleteCaptcha}
                />

            </CaptchaTableContainer>
        </React.Fragment>
    );
}

export default observer(CaptchaTable);
