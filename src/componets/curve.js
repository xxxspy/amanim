

AFRAME.registerComponent("ellipsecurve", {
    schema: {
        x: {type: 'number', defualt: 0},
        y: {type: 'number', defualt: 0},
        rx: {type: 'number', defualt: 0.5},
        ry: {type: 'number', defualt: 0.5},
        start: {type: 'number', default: 0},
        end: {type: 'number',  defualt:Math.PI*2},
        color: {type: 'number', default: 0xffffff},
    },

    init(){

        const geometry = new THREE.BufferGeometry().setFromPoints( this.getPoints() );

        const material = new THREE.LineBasicMaterial( { color : this.data.color } );

        // Create the final object to add to the scene
        const ellipse = new THREE.Line( geometry, material );
        this.el.object3D.add(ellipse)
        this.ellipse = ellipse
        this.geometry = geometry
        
    },

    getPoints(){
        const d = this.data;
        let curve = new THREE.EllipseCurve(
            d.x, d.y,            // ax, aY
            d.rx, d.ry,           // xRadius, yRadius
            d.start, d.end,  // aStartAngle, aEndAngle
            false,            // aClockwise
            0  
        )
        return curve.getPoints( 50 );
    },

    update(oldData){
        let diff = AFRAME.utils.diff(this.data, oldData);
        if(diff.end != undefined || (diff.start != undefined)){
            this.ellipse.geometry.setFromPoints(this.getPoints())

        }
        
    }
})