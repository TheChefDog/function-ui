import {makeAutoObservable} from "mobx";

export class ProxyGroupStore {
    id = '';
    name = '';
    proxies = [];

    constructor(args) {
        makeAutoObservable(this);
        this.id = args.id;
        this.name = args.name;
        this.proxies = args.proxies
    }
}
