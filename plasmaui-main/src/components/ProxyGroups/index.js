import React, {useState} from 'react';
import {observer} from "mobx-react-lite";
import {
    ProxyGroupAmount,
    ProxyGroupCard,
    ProxyGroupCardName,
    ProxyGroupHeader,
    ProxyGroupListContainer,
    ProxyGroupTop
} from "./styles";
import AddProxyGroupModal from "./AddProxyGroupModal";
import {mainConfig} from "../../App";
import {Switch, Route, useRouteMatch, Link, useHistory} from "react-router-dom";
import ProxyGroupTable from "./ProxyGroupTable";

function ProxyGroups() {
    let {url, path} = useRouteMatch();
    let history = useHistory();
    const [selected, setSelected] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const closeModal = () => setIsOpen(false);

    const deleteProxyGroup = (e, id) => {
        e.stopPropagation();
        history.goBack();
        mainConfig.proxyGroups = mainConfig.proxyGroups.filter(pg => pg.id !== id);
    };

    return (
        <React.Fragment>
            <ProxyGroupListContainer>
                <ProxyGroupTop>
                    <ProxyGroupHeader>Proxy Groups</ProxyGroupHeader>
                    <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg"
                         onClick={() => setIsOpen(true)}>
                        <path
                            d="M18.7265 36.7433C8.65017 36.7433 0.453125 28.5463 0.453125 18.4699C0.453125 8.39357 8.65017 0.196533 18.7265 0.196533C28.8029 0.196533 36.9999 8.39357 36.9999 18.4699C36.9999 28.5463 28.8029 36.7433 18.7265 36.7433ZM18.7265 2.48071C9.90964 2.48071 2.7373 9.65305 2.7373 18.4699C2.7373 27.2868 9.90964 34.4592 18.7265 34.4592C27.5434 34.4592 34.7157 27.2868 34.7157 18.4699C34.7157 9.65305 27.5434 2.48071 18.7265 2.48071Z"
                            fill="url(#paint0_linear)"/>
                        <path
                            d="M26.7212 19.6121H10.7319C10.1015 19.6121 9.58984 19.1004 9.58984 18.47C9.58984 17.8395 10.1015 17.3279 10.7319 17.3279H26.7212C27.3516 17.3279 27.8632 17.8395 27.8632 18.47C27.8632 19.1004 27.3516 19.6121 26.7212 19.6121Z"
                            fill="url(#paint1_linear)"/>
                        <path
                            d="M18.7266 27.6064C18.0961 27.6064 17.5845 27.0948 17.5845 26.4643V10.4751C17.5845 9.84466 18.0961 9.33301 18.7266 9.33301C19.357 9.33301 19.8686 9.84466 19.8686 10.4751V26.4643C19.8686 27.0948 19.357 27.6064 18.7266 27.6064Z"
                            fill="url(#paint2_linear)"/>
                        <defs>
                            <linearGradient id="paint0_linear" x1="38.4007" y1="0.198344" x2="-1.7435" y2="0.198344"
                                            gradientUnits="userSpaceOnUse">
                                <stop stop-color="#ED71B6"/>
                                <stop offset="1" stop-color="#922EBE"/>
                            </linearGradient>
                            <linearGradient id="paint1_linear" x1="28.5636" y1="17.328" x2="8.49153" y2="17.328"
                                            gradientUnits="userSpaceOnUse">
                                <stop stop-color="#ED71B6"/>
                                <stop offset="1" stop-color="#922EBE"/>
                            </linearGradient>
                            <linearGradient id="paint2_linear" x1="19.9562" y1="9.33391" x2="17.4472" y2="9.33391"
                                            gradientUnits="userSpaceOnUse">
                                <stop stop-color="#ED71B6"/>
                                <stop offset="1" stop-color="#922EBE"/>
                            </linearGradient>
                        </defs>
                    </svg>
                </ProxyGroupTop>

                {
                    mainConfig.proxyGroups.map(pg => (
                        <Link to={`${url}/${pg.id}`}>
                            <ProxyGroupCard
                                onClick={() => setSelected(pg.id)}
                                selected={selected === pg.id}
                            >
                                <ProxyGroupCardName>{pg.name}</ProxyGroupCardName>
                                <ProxyGroupAmount>{`${pg.proxies.length} Proxies`}</ProxyGroupAmount>
                                <svg width="14" height="16" viewBox="0 0 14 16" fill="none"
                                     xmlns="http://www.w3.org/2000/svg" onClick={(e) => deleteProxyGroup(e, pg.id)}>
                                    <path d="M1 4.1035H2.29998H12.6999" stroke="#676B7C" stroke-width="1.29998"
                                          stroke-linecap="round" stroke-linejoin="round"/>
                                    <path
                                        d="M12.0497 4.10352C12.0497 3.74454 11.7587 3.45353 11.3997 3.45353C11.0407 3.45353 10.7497 3.74454 10.7497 4.10352H12.0497ZM2.9498 4.10352C2.9498 3.74454 2.65879 3.45353 2.2998 3.45353C1.94082 3.45353 1.64981 3.74454 1.64981 4.10352H2.9498ZM3.5998 4.10339C3.5998 4.46237 3.89081 4.75338 4.24979 4.75338C4.60877 4.75338 4.89978 4.46237 4.89978 4.10339H3.5998ZM8.79973 4.10339C8.79973 4.46237 9.09074 4.75338 9.44972 4.75338C9.8087 4.75338 10.0997 4.46237 10.0997 4.10339H8.79973ZM10.7497 4.10352V13.2034H12.0497V4.10352H10.7497ZM10.7497 13.2034C10.7497 13.5624 10.4587 13.8534 10.0997 13.8534V15.1534C11.1767 15.1534 12.0497 14.2804 12.0497 13.2034H10.7497ZM10.0997 13.8534H3.59979V15.1534H10.0997V13.8534ZM3.59979 13.8534C3.24081 13.8534 2.9498 13.5624 2.9498 13.2034H1.64981C1.64981 14.2804 2.52285 15.1534 3.59979 15.1534V13.8534ZM2.9498 13.2034V4.10352H1.64981V13.2034H2.9498ZM4.89978 4.10339V2.8034H3.5998V4.10339H4.89978ZM4.89978 2.8034C4.89978 2.44442 5.19079 2.15341 5.54977 2.15341V0.853426C4.47283 0.853426 3.5998 1.72646 3.5998 2.8034H4.89978ZM5.54977 2.15341H8.14974V0.853426H5.54977V2.15341ZM8.14974 2.15341C8.50872 2.15341 8.79973 2.44442 8.79973 2.8034H10.0997C10.0997 1.72646 9.22668 0.853426 8.14974 0.853426V2.15341ZM8.79973 2.8034V4.10339H10.0997V2.8034H8.79973Z"
                                        fill="#676B7C"/>
                                </svg>
                            </ProxyGroupCard>
                        </Link>
                    ))
                }
            </ProxyGroupListContainer>

            <Switch>
                <Route path={`${path}/:proxyGroupId`} component={ProxyGroupTable} />
            </Switch>

            <AddProxyGroupModal
                open={isOpen}
                closeModal={closeModal}
            />
        </React.Fragment>
    )
}

export default observer(ProxyGroups);
