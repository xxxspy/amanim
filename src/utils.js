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

export function checkAnimation(animName) {
    animName = animName.toLowerCase()
    let els = $(`[${animName}]`)
    console.log('checking: '+animName)
    if (els.length>0) {
        let ready=false;
        els.each((i, e)=>{
            console.log(e.components[animName])
            if(!ready){
                if(e.components[animName]!=undefined){
                    ready=true;
                }
            }
        })
        if(ready){
            return Promise.resolve(true);
            
        }else{
            return rafAsync().then(() => checkAnimation(animName));
        }
    }else{
        throw new Error('No Element with animation: '+animName)
    }
    
}

export function checkVariable(vname){
    if (!window[vname]) {
        return rafAsync().then(() => checkVariable(vname));
    } else {
        return Promise.resolve(true);
    }
}

export function captionDuration(caption){
    return 1000*(1.2 + 0.211 * caption.length)
}