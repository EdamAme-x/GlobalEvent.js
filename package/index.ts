const solt = "_ge_";

export function declareEvent(name: string, func: EventListenerObject): boolean {
    // @ts-ignore
    if (!window._GE_Events) {
        // @ts-ignore
        window._GE_Events = [];
    }

    // @ts-ignore
    if (window._GE_Events[name]) {
        return false;
    }

    // @ts-ignore
    window._GE_Events.push(name);

    window.addEventListener(solt + name, func);

    return true;
}

export function dispatchEvent(name: string, ...args: any[]): boolean {
    // @ts-ignore
    if (!window._GE_Events[name]) {
        return false;
    }

    window.dispatchEvent(new Event(name));

    return true;
}