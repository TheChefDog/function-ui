import React, {useEffect, useState} from 'react';
import {observer} from "mobx-react-lite";
import {
    ActionsContainer, ActionSvg,
    ArrowButtonContainer, BlurBox,
    ButtonsContainer,
    CaptchaProfileCard, CaptchaProfileName,
    CaptchaProfilesBox,
    CaptchaProfilesContainer, CaptchaProfileType, CaptchaSvg, TextContainer
} from "./styles";
import {mainConfig} from "../../../App";
import EditCaptchaModal from "../EditCaptchaModal";

function CaptchaProfiles({captchaProfiles, onAddCaptchaHarvester}) {
    const [modalOpen, setModelOpen] = useState(false);
    const openModal = () => setModelOpen(true);
    const closeModal = () => setModelOpen(false);

    const [currentPage, setCurrentPage] = useState(0);
    const back = () => {
        if (currentPage !== 0) setCurrentPage(currentPage - 1);
    };

    const next = () => {
        if (currentPage !== captchaProfiles.length - 1 && captchaProfiles.length > 0) setCurrentPage(currentPage + 1);
    };

    const deleteCaptcha = (e, id) => {
        e.stopPropagation();
        mainConfig.captchaHarvesters = mainConfig.captchaHarvesters.filter(ch => ch.id !== id);
        onAddCaptchaHarvester();
    };


    return (
        <React.Fragment>
            <CaptchaProfilesContainer>
                <ButtonsContainer>
                    <ArrowButtonContainer
                        onClick={back}
                        disabled={currentPage === 0}
                        enableAnimation={currentPage !== 0}
                    >
                        <svg width="11" height="19" viewBox="0 0 11 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.2002 2L1.6402 9.56L9.2002 17.12" stroke="white" stroke-width="2.16"
                                  stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </ArrowButtonContainer>

                    <ArrowButtonContainer
                        onClick={next}
                        disabled={currentPage === captchaProfiles.length - 1 || captchaProfiles.length === 0}
                        enableAnimation={currentPage !== captchaProfiles.length - 1 && captchaProfiles.length > 0}
                    >
                        <svg width="11" height="19" viewBox="0 0 11 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.7998 2L9.3598 9.56L1.7998 17.12" stroke="white" stroke-width="2.16"
                                  stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </ArrowButtonContainer>

                </ButtonsContainer>
                <CaptchaProfilesBox>
                    {
                        captchaProfiles[currentPage] && (
                            captchaProfiles[currentPage].map((captchaProfile, index) => (
                                <React.Fragment>
                                    <CaptchaProfileCard
                                        rightSide={index > 3}
                                        key={captchaProfile.id}
                                        onClick={() => openModal()}
                                    >

                                        <CaptchaSvg width="30" height="31" viewBox="0 0 30 31" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M30.0001 15.433L29.9846 14.7694V2.2252L26.6284 5.69329C23.882 2.2189 19.7031 0 15.0237 0C10.1487 0 5.82593 2.40248 3.09033 6.12244L8.59153 11.8671C9.13019 10.8388 9.89314 9.95424 10.8199 9.28344C11.7809 8.50845 13.1412 7.87586 15.0237 7.87586C15.251 7.87586 15.4268 7.90347 15.5557 7.95481C17.8882 8.14517 19.9094 9.47574 21.1 11.4055L17.2061 15.4291L30.0001 15.432"
                                                fill="white"/>
                                            <path
                                                d="M14.9352 0.000488281L14.293 0.0164725H2.15342L5.50963 3.48456C2.14685 6.32297 0 10.6402 0 15.4771C0 20.5145 2.32498 24.9814 5.92494 27.8082L11.4843 22.1236C10.4892 21.567 9.63314 20.7786 8.98398 19.8209C8.23398 18.828 7.6218 17.4223 7.6218 15.4771C7.6218 15.2422 7.64852 15.0605 7.69821 14.9273C7.88242 12.5171 9.17007 10.4285 11.0376 9.1982L14.9314 13.2219L14.9342 0.000972653"
                                                fill="#E0E0E0"/>
                                            <path
                                                d="M0.00146484 15.4766L0.0169334 16.1402V28.6844L3.37315 25.2163C6.12 28.6907 10.2984 30.9096 14.9793 30.9096C19.8542 30.9096 24.177 28.5071 26.9126 24.7872L21.4114 19.0425C20.8728 20.0708 20.1098 20.9554 19.183 21.6262C18.2221 22.4012 16.8618 23.0337 14.9793 23.0337C14.7519 23.0337 14.5762 23.0061 14.4473 22.9548C12.1148 22.7644 10.0936 21.4339 8.90294 19.5041L12.7968 15.4805C7.86467 15.4998 2.29691 15.5124 0.00240233 15.478"
                                                fill="#CBCBCB"/>
                                        </CaptchaSvg>

                                        <TextContainer>
                                            <CaptchaProfileName>{captchaProfile.name}</CaptchaProfileName>
                                            <CaptchaProfileType>{captchaProfile.type}</CaptchaProfileType>
                                        </TextContainer>

                                        <ActionsContainer>
                                            <ActionSvg width="17" height="17" viewBox="0 0 17 17" fill="none"
                                                       xmlns="http://www.w3.org/2000/svg">
                                                <path opacity="0.4" fill-rule="evenodd" clip-rule="evenodd"
                                                      d="M12.093 2.236C12.6214 1.73557 13.3916 1.54014 14.1134 1.7233C14.8353 1.90647 15.3991 2.44042 15.5925 3.12401C15.7859 3.8076 15.5796 4.53699 15.0511 5.03741L5.06743 14.4922L1 15.5427L2.1093 11.6908L12.093 2.236Z"
                                                      stroke="white" stroke-width="1.47907" stroke-linecap="round"
                                                      stroke-linejoin="round"/>
                                            </ActionSvg>
                                            <ActionSvg width="17" height="18" viewBox="0 0 17 18" fill="none"
                                                       xmlns="http://www.w3.org/2000/svg" onClick={(e) => deleteCaptcha(e, captchaProfile.id)}>
                                                <g opacity="0.4">
                                                    <path d="M1.37305 4.26506H3.01645H16.1637" stroke="white"
                                                          stroke-width="1.64341" stroke-linecap="round"
                                                          stroke-linejoin="round"/>
                                                    <path
                                                        d="M15.3422 4.26497C15.3422 3.81116 14.9743 3.44327 14.5205 3.44327C14.0666 3.44327 13.6988 3.81116 13.6988 4.26497H15.3422ZM3.83831 4.26497C3.83831 3.81116 3.47042 3.44327 3.0166 3.44327C2.56279 3.44327 2.1949 3.81116 2.1949 4.26497H3.83831ZM4.65993 4.26502C4.65993 4.71884 5.02782 5.08673 5.48163 5.08673C5.93545 5.08673 6.30333 4.71884 6.30333 4.26502H4.65993ZM11.2336 4.26502C11.2336 4.71884 11.6014 5.08673 12.0553 5.08673C12.5091 5.08673 12.877 4.71884 12.877 4.26502H11.2336ZM13.6988 4.26497V15.1593H15.3422V4.26497H13.6988ZM13.6988 15.1593C13.6988 15.5235 13.3736 15.894 12.877 15.894V17.5374C14.1958 17.5374 15.3422 16.5143 15.3422 15.1593H13.6988ZM12.877 15.894H4.66001V17.5374H12.877V15.894ZM4.66001 15.894C4.16348 15.894 3.83831 15.5235 3.83831 15.1593H2.1949C2.1949 16.5143 3.34128 17.5374 4.66001 17.5374V15.894ZM3.83831 15.1593V4.26497H2.1949V15.1593H3.83831ZM6.30333 4.26502V2.70868H4.65993V4.26502H6.30333ZM6.30333 2.70868C6.30333 2.34453 6.62851 1.97405 7.12504 1.97405V0.33064C5.80631 0.33064 4.65993 1.35375 4.65993 2.70868H6.30333ZM7.12504 1.97405H10.4119V0.33064H7.12504V1.97405ZM10.4119 1.97405C10.9084 1.97405 11.2336 2.34453 11.2336 2.70868H12.877C12.877 1.35375 11.7306 0.33064 10.4119 0.33064V1.97405ZM11.2336 2.70868V4.26502H12.877V2.70868H11.2336Z"
                                                        fill="white"/>
                                                </g>
                                            </ActionSvg>
                                        </ActionsContainer>
                                        <BlurBox/>

                                    </CaptchaProfileCard>
                                    <EditCaptchaModal
                                        captchaHarvester={captchaProfile}
                                        visible={modalOpen}
                                        closeModal={closeModal}
                                        onAddCaptchaHarvester={onAddCaptchaHarvester}
                                    />
                                </React.Fragment>
                            ))
                        )
                    }
                </CaptchaProfilesBox>
            </CaptchaProfilesContainer>
        </React.Fragment>
    )
}

export default observer(CaptchaProfiles);
