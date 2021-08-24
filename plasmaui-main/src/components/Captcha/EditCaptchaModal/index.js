import React, {useEffect, useState} from 'react';
import {observer} from "mobx-react-lite";
import {
    CaptchaHarvesterHeader,
    CloseModalSvg, CustomDropDown, CustomDropDownOptions, DeleteButton,
    ExportSvg,
    FormContainer,
    InputLabel,
    ModalBackground,
    ModalContainer, Option, SaveButton, StyledInput
} from "./styles";
import {mainConfig} from "../../../App";

function EditCaptchaModal({captchaHarvester, visible, closeModal, onAddCaptchaHarvester}) {
    const [harvesterName, setHarvesterName] = useState('');
    const [harvesterType, setHarvesterType] = useState('');
    const [harvesterProxy, setHarvesterProxy] = useState('');
    const [dropdownOpen, setDropdownOpen] = useState(false);

    useEffect(() => {
        setHarvesterName(captchaHarvester.name);
        setHarvesterType(captchaHarvester.type);
        setHarvesterProxy(captchaHarvester.proxy);
    }, [visible]);

    const saveCaptchaHarvester = () => {
        const alreadyExists = mainConfig.captchaHarvesters.find(ch => ch.name === harvesterName);
        const valid = !alreadyExists || captchaHarvester.name === harvesterName;
        if (harvesterName.length > 0 && harvesterType !== '' && valid) {
            captchaHarvester.name = harvesterName;
            captchaHarvester.type = harvesterType;
            captchaHarvester.proxy = harvesterProxy;
            onAddCaptchaHarvester();
        }
    };

    const deleteCaptchaHarvester = () => {
        mainConfig.captchaHarvesters = mainConfig.captchaHarvesters.filter(ch => ch.id !== captchaHarvester.id);
        onAddCaptchaHarvester();
        closeModal();
    }

    const outsideClick = (e) => {
        e.stopPropagation();
        if (dropdownOpen) setDropdownOpen(false);
    };
    const onDropDownChange = (option) => {
        setHarvesterType(option);
        setDropdownOpen(false);
    };

    const dropdownOptions = ['All', 'Datadome', 'Supreme', 'Shopify'];
    const onBackgroundClick = () => {
        setDropdownOpen(false);
        closeModal();
    };

    return (
        <ModalBackground visible={visible} onClick={onBackgroundClick}>
            <ModalContainer onClick={outsideClick}>
                <CloseModalSvg width="16" height="17" viewBox="0 0 16 17" fill="none"
                               xmlns="http://www.w3.org/2000/svg" onClick={closeModal}>
                    <line x1="15.5674" y1="1.35355" x2="0.353545" y2="16.5674" stroke="#50506B"/>
                    <line x1="0.353553" y1="0.646447" x2="15.5674" y2="15.8603" stroke="#50506B"/>
                </CloseModalSvg>

                <CaptchaHarvesterHeader>Captcha Harvester</CaptchaHarvesterHeader>
                <ExportSvg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.5312 22.75H3.25V4.46875H12.1875V1.21875H0V26H24.7812V13.8125H21.5312V22.75Z" fill="#29DA8B"/>
                    <path d="M17.0625 0L20.3125 3.25L13.4062 10.1562L15.8438 12.5938L22.75 5.6875L26 9.34375V0H17.0625Z" fill="#29DA8B"/>
                </ExportSvg>

                <FormContainer>
                    <InputLabel>Name</InputLabel>
                    <StyledInput
                        placeholder='Name'
                        value={harvesterName}
                        onChange={(e) => setHarvesterName(e.target.value)}
                    />

                    <InputLabel>Captcha Harvester Type</InputLabel>
                    <CustomDropDown onClick={() => setDropdownOpen(!dropdownOpen)}>
                        <span>{harvesterType}</span>
                        <svg width="15" height="10" viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0.997528H14.85L7.425 9.35685L0 0.997528Z" fill="#676B7C"/>
                        </svg>
                        <CustomDropDownOptions open={dropdownOpen} onClick={(e) => e.stopPropagation()}>
                            {
                                dropdownOptions.map(option => (
                                    <Option onClick={() => onDropDownChange(option)}>
                                        <span>{option}</span>
                                    </Option>
                                ))
                            }
                        </CustomDropDownOptions>
                    </CustomDropDown>

                    <InputLabel>Proxy</InputLabel>
                    <StyledInput
                        placeholder='185.593.52'
                        value={harvesterProxy}
                        onChange={(e) => setHarvesterProxy(e.target.value)}
                    />
                </FormContainer>

                <SaveButton onClick={saveCaptchaHarvester}>Save</SaveButton>
                <DeleteButton onClick={deleteCaptchaHarvester}>Delete</DeleteButton>

            </ModalContainer>
        </ModalBackground>
    )
}

export default observer(EditCaptchaModal);
