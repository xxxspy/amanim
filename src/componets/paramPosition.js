function randn_bm(min, max, skew=1) {
    let u = 0, v = 0;
    while(u === 0) u = Math.random() //Converting [0,1) to (0,1)
    while(v === 0) v = Math.random()
    let num = Math.sqrt( -2.0 * Math.log( u ) ) * Math.cos( 2.0 * Math.PI * v )
    
    num = num / 10.0 + 0.5 // Translate to 0 -> 1
    if (num > 1 || num < 0) 
      num = randn_bm(min, max, skew) // resample between 0 and 1 if out of range
    
    else{
      num = Math.pow(num, skew) // Skew
      num *= max - min // Stretch to fill range
      num += min // offset to min
    }
    return num
  }

AFRAME.registerComponent("parampos", {
    multiple: true,
    schema: {
        x: {
            type: 'number',
            default: 0,
        },
        y: {
            type: 'string',
            default: '',
        },
        z: {
            type: 'string',
            default: '',
        },
    },

    init() {
    },

    update: function (oldData) {
        var data = this.data;
        var diff = AFRAME.utils.diff(data, oldData);
        if (diff.x != undefined) {
            let x = this.data.x;
            let y;
            let z;
            if(this.data.y.length>0){
                y = eval(this.data.y)
            }else{
                y = 0
            }
            if(this.data.z.length>0){
                z = eval(this.data.z)
            }else{
                z = 0
            }
            this.el.object3D.position.x = x
            this.el.object3D.position.y = y
            this.el.object3D.position.z = z
        }
    }
});

AFRAME.registerComponent("randompos", {
    schema: {
        n:{
            type: 'number',
            default: 1,
        },
        xMin: {
            type: 'number',
            default: 0,
        },
        xMax:{
            type: 'number',
            default: 1,
        },

        y: {
            type: 'string',
            default: '0',
        },
        z: {
            type: 'string',
            default: '0',
        },
    },

    init() {
        this.checkNum()
        this.randomPos()

    },

    checkNum(){
        let cha = this.data.n-this.el.children.length;
        let fistNode = this.el.children[0].cloneNode()
        for(let i=0;i<cha;i++){
            let node = fistNode.cloneNode()
            this.el.appendChild(node)
        }
    },

    randomPos(){

        let xMin = this.data.xMin;
        let xMax = this.data.xMax;
        for(let i=0;i<this.el.children.length;i++){
            let x = randn_bm(xMin-0.3, xMax+0.3);
            let y = eval(this.data.y)
            let z = eval(this.data.z)
            $(this.el.children[i]).attr('position', `${x} ${y} ${z}`)
        }
    },

    update: function (oldData) {
        var data = this.data;
        var diff = AFRAME.utils.diff(data, oldData);
        if (diff.xMax != undefined) {
            this.randomPos()
        }
    }
});

