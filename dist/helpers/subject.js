export class Subject {
    constructor() {
        this.listeners = [];
    }
    listen(listener) {
        this.listeners.push(listener);
    }
    raise(t) {
        for (let listener of this.listeners)
            listener(t);
    }
}
