import {makeAutoObservable} from "mobx";
import { v4 as uuidv4 } from 'uuid';
import {CaptchaStore} from "./CaptchaStore";
import {ProxyGroupStore} from "./ProxyGroup";

export class MainConfigStore {
    captchaHarvesters = [];
    proxyGroups = [];

    constructor() {
        makeAutoObservable(this);
    }

    addCaptchaHarvester(harvester) {
        harvester['id'] = uuidv4();
        this.captchaHarvesters.push(new CaptchaStore(harvester));
    };

    addProxyGroup(proxyGroup) {
        proxyGroup['id'] = uuidv4();
        this.proxyGroups.push(new ProxyGroupStore(proxyGroup));
    }
}
