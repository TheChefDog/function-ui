import {makeAutoObservable} from "mobx";

export class CaptchaStore {
    id = '';
    name = '';
    type = '';
    proxy = '';
    email = '';

    constructor(args) {
        makeAutoObservable(this);
        this.id = args.id;
        this.name = args.name;
        this.type = args.type;
        this.proxy = args.proxy;
        this.email = args.email;
    }
}
