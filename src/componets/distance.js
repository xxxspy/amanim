AFRAME.registerComponent('distance', {
    schema: {
        start: {
            type: 'vec3',
        },
        end: {
            type: 'vec3',
        },
        color: {
            type: 'color',
            default: 0xffffff,
        },
        scale: {
            type: 'number',
            default: 1,
        },

    },
    init(){
        let start0 = new THREE.Vector3(this.data.start.x, this.data.start.y, this.data.start.z, )
        let end0 = new THREE.Vector3(this.data.end.x, this.data.end.y, this.data.end.z, )
        let mid = new THREE.Vector3()
        let direction = new THREE.Vector3()
        let direction0 = new THREE.Vector3()
        mid.copy(start0)
        direction.copy(end0)
        mid.add(end0).multiplyScalar(0.5)
        direction.sub(start0)
        direction0.copy(direction)
        let color = this.data.color
        let headLength = 0.1*this.data.scale
        let headWidth = 0.1*this.data.scale
        let length = this.calLength(this.data.start, this.data.end)*this.data.scale;
        this.arrow1 = new THREE.ArrowHelper(direction.normalize(), mid, length, color, headLength, headWidth);
        this.arrow2 = new THREE.ArrowHelper(direction0.multiplyScalar(-1).normalize(), mid, length, color, headLength, headWidth);
        this.el.object3D.add(this.arrow1)
        this.el.object3D.add(this.arrow2)
    },

    calLength(s, e){
        return ((s.x-e.x)**2+(s.y-e.y)**2+(s.z-e.z)**2)**0.5/2
    },

    update(oldData){
        var data = this.data;
        var diff = AFRAME.utils.diff(data, oldData);
        if('start' in diff || 'end' in diff || 'scale' in diff){
            let scale = this.data.scale;    
            this.arrow1.setLength(this.calLength(this.data.start, this.data.end)*scale, 0.1*scale, 0.1*scale)
            this.arrow2.setLength(this.calLength(this.data.start, this.data.end)*scale, 0.1*scale, 0.1*scale)

        }
    }
})