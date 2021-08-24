import React, {useState} from 'react';
import {observer} from "mobx-react-lite";
import {TableContentContainer} from "./styles";
import CaptchaCard from "../CaptchaCard";
import {mainConfig} from "../../../../App";
import EditCaptchaModal from "../../EditCaptchaModal";

function TableContent({deleteCaptcha, onAddCaptchaHarvester}) {
    const [selected, setSelected] = useState([]);
    const addToSelected = (id) => {
        if (selected.includes(id)) setSelected([...selected].filter(ch => ch !== id));
        else {
            const copy = [...selected];
            copy.push(id);
            setSelected(copy);
        }
    };

    const [modalOpen, setModelOpen] = useState(false);
    const openModal = () => setModelOpen(true);
    const closeModal = () => setModelOpen(false);

    return (
        <TableContentContainer>
            {
                mainConfig.captchaHarvesters.map((ch, index) => (
                    <React.Fragment>
                        <CaptchaCard
                            deleteCaptcha={deleteCaptcha}
                            captchaHarvester={ch}
                            number={index}
                            selected={selected}
                            openModal={openModal}
                            addToSelected={addToSelected}
                        />
                        <EditCaptchaModal
                            captchaHarvester={ch}
                            visible={modalOpen}
                            closeModal={closeModal}
                            onAddCaptchaHarvester={onAddCaptchaHarvester}
                        />
                    </React.Fragment>
                ))
            }

        </TableContentContainer>
    )
}

export default observer(TableContent);
