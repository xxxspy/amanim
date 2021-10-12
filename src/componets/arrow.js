


AFRAME.registerComponent("arrow", {
    multiple: true,
    schema: {
        direction: {
            type: "vec3",
            default: {
                x: 1,
                y: 0,
                z: 0
            }
        },
        length: {
            type: "number",
            default: 1,
        },
        color: {
            type: "color",
            default: "#d7ecff"
        },
        headLength: {
            type: "number",
            default: 0.1,
        },
        headWidth: {
            type: "number",
            default: 0.1,
        }
    },

    init() {
        console.log('Arrow init..................')
        var data = this.data;
        var direction = new THREE.Vector3(data.direction.x, data.direction.y, data.direction.z);
        var length = data.length || direction.length();
        var headLength = data.headLength || length * .2;
        var headWidth = data.headWidth || headLength * .2;
        var color = new THREE.Color(data.color);
        this.arrow = new THREE.ArrowHelper(direction.normalize(), new THREE.Vector3(), length, color, headLength, headWidth);
        // this.el.setObject3D("arrow", this.arrow);
        this.el.object3D.add(this.arrow)
        console.log('Arrow id:::::::::::' + this.id)
    },

    update: function (oldData) {
        var data = this.data;
        var diff = AFRAME.utils.diff(data, oldData);
        if ("color" in diff) {
            this.arrow.setColor(new THREE.Color(data.color));
        }
        if ("direction" in diff) {
            var direction = new THREE.Vector3(data.direction.x, data.direction.y, data.direction.z);
            this.arrow.setDirection(direction.normalize());
        }
        if ("length" in diff) {
            var headLength = data.headLength
            var headWidth = data.headWidth
            let length = data.length
            if(length==0){
                headLength=0
                headWidth=0
            }

            this.arrow.setLength(length, headLength, headWidth);
        }
    }
});