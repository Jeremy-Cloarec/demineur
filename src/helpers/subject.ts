export class Subject <T> {
    private listeners: ((t:T) => void)[] = [];

    listen(listener: (t:T) => void) {
        this.listeners.push(listener);
    }

    raise(t:T) {
        for (let listener of this.listeners)
            listener(t);
    }
}