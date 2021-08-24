import React, {useState} from 'react';
import {observer} from "mobx-react-lite";
import {
    AddProxyGroupModalHeader,
    CloseModalSvg,
    FormContainer,
    InputLabel,
    ModalBackground,
    ModalContainer, SaveButton, StyledInput, StyledTextArea
} from "./styles";
import {mainConfig} from "../../../App";

function AddProxyGroupModal({open, closeModal}) {
    const [proxyGroupName, setProxyGroupName] = useState('');
    const [proxies, setProxies] = useState('');

    const outsideClick = (e) => {
        e.stopPropagation();
    };

    const saveProxyGroup = () => {
        const nameValid = mainConfig.proxyGroups.find(pg => pg.name === proxyGroupName);
        const fieldsValid = proxyGroupName.length > 0;

        if (!nameValid && fieldsValid) {
            const format = {
                name: proxyGroupName,
                proxies: []
            };

            proxies.split("\n").forEach(proxy => {
                const splitProxy = proxy.split(":");
                if (splitProxy.length === 4 || splitProxy.length === 2) {
                    const length = splitProxy.length;
                    format.proxies.push({
                        ip: splitProxy[0],
                        port: splitProxy[1],
                        username: length === 4 ? splitProxy[2] : "",
                        password: length === 4 ? splitProxy[3] : "",
                    });
                }
            });

            mainConfig.addProxyGroup(format);
        }
    };


    return (
        <ModalBackground
            visible={open}
            onClick={closeModal}
        >
            <ModalContainer onClick={outsideClick}>
                <CloseModalSvg width="16" height="17" viewBox="0 0 16 17" fill="none"
                               xmlns="http://www.w3.org/2000/svg" onClick={closeModal}>
                    <line x1="15.5674" y1="1.35355" x2="0.353545" y2="16.5674" stroke="#50506B"/>
                    <line x1="0.353553" y1="0.646447" x2="15.5674" y2="15.8603" stroke="#50506B"/>
                </CloseModalSvg>
                <AddProxyGroupModalHeader>Create group</AddProxyGroupModalHeader>

                <FormContainer>
                    <InputLabel>Name</InputLabel>
                    <StyledInput
                        value={proxyGroupName}
                        onChange={(e) => setProxyGroupName(e.target.value)}
                    />

                    <InputLabel>Proxies</InputLabel>
                    <StyledTextArea
                        value={proxies}
                        onChange={(e) => setProxies(e.target.value)}
                    />
                </FormContainer>

                <SaveButton onClick={saveProxyGroup}>Save</SaveButton>
            </ModalContainer>
        </ModalBackground>
    )
}

export default observer(AddProxyGroupModal);
