import React, {useState} from 'react';
import {observer} from "mobx-react-lite";
import {
    ProxyGroupActionBar,
    ProxyGroupName,
    ProxyGroupTableContainer,
    ProxyGroupTop,
    CustomDropDown,
    CustomDropDownOptions,
    Option,
    ClearFailedButton,
    TestStartClear,
    TestAllButton,
    StopAllButton,
    ClearProxiesButton,
    ProxiesTableHeadRow,
    TableHeadName, ProxiesRow, ProxyTableContent, ProxiesRowText, CheckBoxContainer, ProxyRowActionContainer, Checkbox
} from "./styles";
import {useParams} from 'react-router-dom';
import {mainConfig} from "../../../App";
import {StyledClock} from "../../Captcha/CaptchaTable/styles";

function ProxyGroupTable() {
    let {proxyGroupId} = useParams();
    const proxyGroup = mainConfig.proxyGroups.find(pg => pg.id === proxyGroupId);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [site, setSite] = useState('Footlocker');

    const [selectedProxies, setSelectedProxies] = useState([]);
    const selectProxy = (index) => {
        let copy = [...selectedProxies];
        if (copy.includes(index)) copy = copy.filter(p => p !== index);
        else copy.push(index);

        setSelectedProxies(copy);
    };

    const onDropDownChange = (option) => {
        setSite(option);
        setDropdownOpen(false);
    };
    const dropdownOptions = ['Footlocker', 'Supreme', 'Shopify', 'Kith'];
    const testProxy = () => {

    };

    const deleteProxy = (index) => {
        proxyGroup.proxies.splice(index, 1);
    };

    const clearProxies = () => {
        const copy = [...proxyGroup.proxies];
        for (const index in selectedProxies) copy[index] = null;
        proxyGroup.proxies = copy.filter(c => c != null);
        setSelectedProxies([]);
    };

    if (proxyGroup) {
        return (
            <ProxyGroupTableContainer>
                <ProxyGroupTop>
                    <ProxyGroupName>{proxyGroup.name}</ProxyGroupName>
                    <StyledClock format={'h:mm:ss A [-] MMM D'} ticking={true}/>
                </ProxyGroupTop>

                <ProxyGroupActionBar>
                    <CustomDropDown onClick={() => setDropdownOpen(!dropdownOpen)}>
                        <span>{site}</span>
                        <svg width="15" height="10" viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M0 0.997528H14.85L7.425 9.35685L0 0.997528Z" fill="#676B7C"/>
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

                    <ClearFailedButton>
                        <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect y="0.0170898" width="34.2652" height="34.2652" rx="3.80725" fill="#FF90AB"/>
                            <path
                                d="M24 11.41L22.59 10L17 15.59L11.41 10L10 11.41L15.59 17L10 22.59L11.41 24L17 18.41L22.59 24L24 22.59L18.41 17L24 11.41Z"
                                fill="white"/>
                        </svg>
                        <span>Clear Failed</span>
                    </ClearFailedButton>

                    <TestStartClear>
                        <TestAllButton>
                            <svg width="36" height="35" viewBox="0 0 36 35" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.837891" y="0.0170898" width="34.2652" height="34.2652" rx="3.80725"
                                      fill="#83EAB8"/>
                                <path
                                    d="M25.6002 15.8284C26.6175 16.4158 26.6175 17.8841 25.6002 18.4715L15.2998 24.4184C14.2825 25.0058 13.0108 24.2716 13.0108 23.0969L13.0108 11.203C13.0108 10.0283 14.2825 9.29415 15.2998 9.8815L25.6002 15.8284Z"
                                    fill="white"/>
                            </svg>
                            <span>Test All</span>
                        </TestAllButton>
                        <StopAllButton>
                            <svg width="36" height="35" viewBox="0 0 36 35" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.770996" y="0.0170898" width="34.2652" height="34.2652" rx="3.80725"
                                      fill="#FFD89D"/>
                                <rect x="10.6899" y="9.93597" width="14.4275" height="14.4275" rx="2.27802"
                                      fill="white"/>
                            </svg>
                            <span>Stop All</span>
                        </StopAllButton>
                        <ClearProxiesButton onClick={clearProxies}>
                            <svg width="35" height="35" viewBox="0 0 35 35" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <rect y="0.0170898" width="34.2652" height="34.2652" rx="3.80725" fill="#FF90AB"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.8208 12.8997H12.3027H24.1578"
                                      fill="white"/>
                                <path d="M10.8208 12.8997H12.3027H24.1578" stroke="white" stroke-width="1.48189"
                                      stroke-linecap="round" stroke-linejoin="round"/>
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                      d="M22.676 12.8998V23.2731C22.676 24.0915 22.0125 24.7549 21.1941 24.7549H13.7846C12.9662 24.7549 12.3027 24.0915 12.3027 23.2731V12.8998M14.5256 12.8997V11.4179C14.5256 10.5994 15.189 9.93597 16.0075 9.93597H18.9712C19.7897 9.93597 20.4531 10.5994 20.4531 11.4179V12.8997"
                                      fill="white"/>
                                <path
                                    d="M23.4169 12.8998C23.4169 12.4906 23.0852 12.1589 22.676 12.1589C22.2667 12.1589 21.935 12.4906 21.935 12.8998H23.4169ZM13.0437 12.8998C13.0437 12.4906 12.7119 12.1589 12.3027 12.1589C11.8935 12.1589 11.5618 12.4906 11.5618 12.8998H13.0437ZM13.7846 12.8997C13.7846 13.309 14.1164 13.6407 14.5256 13.6407C14.9348 13.6407 15.2665 13.309 15.2665 12.8997H13.7846ZM19.7122 12.8997C19.7122 13.309 20.0439 13.6407 20.4531 13.6407C20.8623 13.6407 21.1941 13.309 21.1941 12.8997H19.7122ZM21.935 12.8998V23.2731H23.4169V12.8998H21.935ZM21.935 23.2731C21.935 23.6823 21.6033 24.014 21.1941 24.014V25.4959C22.4217 25.4959 23.4169 24.5007 23.4169 23.2731H21.935ZM21.1941 24.014H13.7846V25.4959H21.1941V24.014ZM13.7846 24.014C13.3754 24.014 13.0437 23.6823 13.0437 23.2731H11.5618C11.5618 24.5007 12.557 25.4959 13.7846 25.4959V24.014ZM13.0437 23.2731V12.8998H11.5618V23.2731H13.0437ZM15.2665 12.8997V11.4179H13.7846V12.8997H15.2665ZM15.2665 11.4179C15.2665 11.0086 15.5983 10.6769 16.0075 10.6769V9.19503C14.7798 9.19503 13.7846 10.1902 13.7846 11.4179H15.2665ZM16.0075 10.6769H18.9712V9.19503H16.0075V10.6769ZM18.9712 10.6769C19.3805 10.6769 19.7122 11.0086 19.7122 11.4179H21.1941C21.1941 10.1902 20.1989 9.19503 18.9712 9.19503V10.6769ZM19.7122 11.4179V12.8997H21.1941V11.4179H19.7122Z"
                                    fill="white"/>
                            </svg>
                            <span>Clear Proxies</span>
                        </ClearProxiesButton>
                    </TestStartClear>
                </ProxyGroupActionBar>

                <ProxiesTableHeadRow>
                    <TableHeadName width='5%'>#</TableHeadName>
                    <TableHeadName width='15%'>Port</TableHeadName>
                    <TableHeadName width='20%'>IP</TableHeadName>
                    <TableHeadName width='20%'>Username</TableHeadName>
                    <TableHeadName width='20%'>Password</TableHeadName>
                    <TableHeadName width='10%'>Status</TableHeadName>
                    <TableHeadName width='10%'>Actions</TableHeadName>
                </ProxiesTableHeadRow>

                <ProxyTableContent>
                    {
                        proxyGroup.proxies.map((proxy, index) => (
                            <ProxiesRow>
                                <CheckBoxContainer>
                                    <Checkbox
                                        onClick={() => selectProxy(index)}
                                        selected={selectedProxies.includes(index)}
                                    >
                                        {
                                            selectedProxies.includes(index) && (
                                                <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M13.8382 2.04665L5.8162 9.84386C5.60119 10.052 5.25311 10.052 5.03897 9.84386L0.160604 5.0708C-0.0535346 4.86177 -0.0535346 4.5221 0.160604 4.31434L1.32623 3.18197C1.54123 2.97337 1.88932 2.97337 2.10345 3.18197L4.0374 5.07463C4.81299 5.83367 6.05239 5.8357 6.83046 5.07921L11.894 0.156138C12.1081 -0.052046 12.4562 -0.052046 12.6721 0.156138L13.8377 1.29019C14.054 1.4988 14.054 1.83847 13.8382 2.04665Z" fill="#1D1D26"/>
                                                </svg>
                                            )
                                        }
                                    </Checkbox>
                                </CheckBoxContainer>
                                <ProxiesRowText width='5%'>{index + 1}</ProxiesRowText>
                                <ProxiesRowText width='15%'>{proxy.port}</ProxiesRowText>
                                <ProxiesRowText width='20%'>{proxy.ip}</ProxiesRowText>
                                <ProxiesRowText width='20%'>{proxy.username}</ProxiesRowText>
                                <ProxiesRowText width='20%'>{proxy.password}</ProxiesRowText>
                                <ProxiesRowText width='10%'></ProxiesRowText>
                                <ProxyRowActionContainer>
                                    <svg width="13" height="16" viewBox="0 0 13 16" fill="none"
                                         xmlns="http://www.w3.org/2000/svg" onClick={testProxy}>
                                        <path
                                            d="M11.8715 6.72824C12.7747 7.33554 12.7747 8.66446 11.8715 9.27176L3.27063 15.0549C2.25261 15.7394 0.883014 15.0098 0.883014 13.7831L0.883015 2.2169C0.883015 0.990153 2.25261 0.26064 3.27064 0.945143L11.8715 6.72824Z"
                                            fill="#62E2B0"/>
                                    </svg>
                                    <svg width="16" height="19" viewBox="0 0 16 19" fill="none"
                                         xmlns="http://www.w3.org/2000/svg" onClick={() => deleteProxy(index)}>
                                        <path d="M1.57642 4.25831H2.99603H14.353" stroke="#FF5781"
                                              stroke-width="1.65329" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                              d="M12.9334 4.25837V16.1583C12.9334 17.0972 12.2978 17.8583 11.5138 17.8583H4.41571C3.63168 17.8583 2.99609 17.0972 2.99609 16.1583V4.25837M5.12555 4.25825V2.55826C5.12555 1.61939 5.76114 0.858276 6.54517 0.858276H9.38441C10.1684 0.858276 10.804 1.61939 10.804 2.55826V4.25825"
                                              fill="#FF5781"/>
                                        <path
                                            d="M13.7601 4.25837C13.7601 3.80183 13.39 3.43173 12.9334 3.43173C12.4769 3.43173 12.1068 3.80183 12.1068 4.25837H13.7601ZM3.82274 4.25837C3.82274 3.80183 3.45264 3.43173 2.99609 3.43173C2.53955 3.43173 2.16945 3.80183 2.16945 4.25837H3.82274ZM4.29891 4.25825C4.29891 4.7148 4.66901 5.0849 5.12555 5.0849C5.5821 5.0849 5.9522 4.7148 5.9522 4.25825H4.29891ZM9.97738 4.25825C9.97738 4.7148 10.3475 5.0849 10.804 5.0849C11.2606 5.0849 11.6307 4.7148 11.6307 4.25825H9.97738ZM12.1068 4.25837V16.1583H13.7601V4.25837H12.1068ZM12.1068 16.1583C12.1068 16.7864 11.708 17.0316 11.5138 17.0316V18.6849C12.8877 18.6849 13.7601 17.4079 13.7601 16.1583H12.1068ZM11.5138 17.0316H4.41571V18.6849H11.5138V17.0316ZM4.41571 17.0316C4.22149 17.0316 3.82274 16.7864 3.82274 16.1583H2.16945C2.16945 17.4079 3.04187 18.6849 4.41571 18.6849V17.0316ZM3.82274 16.1583V4.25837H2.16945V16.1583H3.82274ZM5.9522 4.25825V2.55826H4.29891V4.25825H5.9522ZM5.9522 2.55826C5.9522 1.93015 6.35095 1.68492 6.54517 1.68492V0.0316306C5.17133 0.0316306 4.29891 1.30863 4.29891 2.55826H5.9522ZM6.54517 1.68492H9.38441V0.0316306H6.54517V1.68492ZM9.38441 1.68492C9.57863 1.68492 9.97738 1.93015 9.97738 2.55826H11.6307C11.6307 1.30863 10.7583 0.0316306 9.38441 0.0316306V1.68492ZM9.97738 2.55826V4.25825H11.6307V2.55826H9.97738Z"
                                            fill="#FF5781"/>
                                    </svg>
                                </ProxyRowActionContainer>
                            </ProxiesRow>
                        ))
                    }
                </ProxyTableContent>

            </ProxyGroupTableContainer>
        )
    } else return <div/>
}

export default observer(ProxyGroupTable);
