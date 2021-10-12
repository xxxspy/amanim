export function rafAsync() {
    return new Promise(resolve => {
        requestAnimationFrame(resolve); //faster than set time out
    });
}

export function checkElement(selector) {
    if (document.querySelector(selector) === null) {
        return rafAsync().then(() => checkElement(selector));
    } else {
        return Promise.resolve(true);
    }
}

export function checkVariable(vname){
    if (!window[vname]) {
        return rafAsync().then(() => checkVariable(vname));
    } else {
        return Promise.resolve(true);
    }
}