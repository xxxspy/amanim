import {COLOR} from '../componets/constants'

export class Arrow{
    constructor(
        anim, 
        length=1, 
        direction={x:1, y:0, z:0}, 
        color=COLOR.WHITE,
        headLength=0.1,
        headWidth=0.1,
    ){
        this.anim = anim
        this.el = $(`<a-entity
                    arrow="
                        headLength:${headLength};
                        headWidth:${headWidth};
                        direction: ${direction.x} ${direction.y} ${direction.z};
                        color:${color};
                        length:${length};
                    " 
                    ></a-entity>`)
        this.anim.add(el)
    }

    draw(){
        this.el.attr('animation__draw', `property:arrow.length`)
    }
}