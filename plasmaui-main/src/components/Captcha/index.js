import React, {useEffect, useState} from 'react';
import {observer} from "mobx-react-lite";
import {CaptchaContainer} from "./styles";
import CaptchaTable from "./CaptchaTable";
import CaptchaProfiles from "./CaptchaProfiles";
import AddCaptchaModal from "./CaptchaTable/AddCaptchaModal";
import {mainConfig} from "../../App";

function Captcha() {
    const [modalOpen, setModelOpen] = useState(false);
    const openModal = () => setModelOpen(true);
    const closeModal = () => setModelOpen(false);

    const [captchaProfiles, setCaptchaProfiles] = useState([]);

    const perChunk = 8;
    useEffect(() => {
        const array = mainConfig.captchaHarvesters;
        let result = array.reduce((resultArray, item, index) => {
            const chunkIndex = Math.floor(index/perChunk);

            if(!resultArray[chunkIndex]) resultArray[chunkIndex] = [];
            resultArray[chunkIndex].push(item)

            return resultArray
        }, []);
        setCaptchaProfiles(result);
    }, []);

    const onAddCaptchaHarvester = () => {
        const array = mainConfig.captchaHarvesters;
        let result = array.reduce((resultArray, item, index) => {
            const chunkIndex = Math.floor(index/perChunk);

            if(!resultArray[chunkIndex]) resultArray[chunkIndex] = [];
            resultArray[chunkIndex].push(item)

            return resultArray
        }, []);
        setCaptchaProfiles(result);
    };

    return (
        <CaptchaContainer>
            <CaptchaTable openModal={openModal} onAddCaptchaHarvester={onAddCaptchaHarvester} />
            <CaptchaProfiles captchaProfiles={captchaProfiles} onAddCaptchaHarvester={onAddCaptchaHarvester} />
            <AddCaptchaModal
                visible={modalOpen}
                closeModal={closeModal}
                openModal={openModal}
                onAddCaptchaHarvester={onAddCaptchaHarvester }
            />
        </CaptchaContainer>
    )

}

export default observer(Captcha);
