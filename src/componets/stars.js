const {COLOR, randColor} = require('./constants')
function vertexShader() {
    return `
        attribute float size;
        attribute vec3 color;
        varying vec4 vColor;
        uniform float opacity;
        void main() {
            vColor = vec4(color, opacity);
            vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
            gl_PointSize = size * ( 250.0 / -mvPosition.z );
            gl_Position = projectionMatrix * mvPosition;
        }
    `;
}
function fragmentShader() {
    return `
        varying vec4 vColor;
            void main() {
                gl_FragColor = vec4( vColor );
            }
    `;
}


AFRAME.registerComponent("stars", {
    multiple: true,
    schema: {
        starOpacity: {
            default: 0.9,
            type: 'float',
        },
        lineOpacity: {default: 1},
        constellationStarSize: {default: 1},
    },

    init() {
        this.initStars()
    },

    update: function (oldData) {
        if((oldData.starOpacity != this.data.starOpacity) && (this.colors.length>0) && ( this.stars != undefined)){
            this.stars.material.uniforms.opacity.value = this.data.starOpacity
        } 
        if((oldData.lineOpacity != this.data.lineOpacity)){
            this.lines.forEach(ln=>{
                ln.material.opacity = this.data.lineOpacity
            })
        }
        if((oldData.constellationStarSize != this.data.constellationStarSize)){
            console.log('..........<<<<<<<<<<')
            this.consStars.forEach(st=>{
                this.sizes[st.order] = this.data.constellationStarSize
                
            })
            console.log('-end....')
            this.stars.geometry.setAttribute('size', new THREE.Float32BufferAttribute(this.sizes, 1));
            console.log('end....')
        }
    },

    initStars(){
        const stars = {};
        const colors = [];
        this.colors = colors;
        const sizes = [];
        const starsGeometry = new THREE.BufferGeometry();
        const starsMaterial = new THREE.ShaderMaterial({
            vertexShader: vertexShader(),
            fragmentShader: fragmentShader(),
            transparent: true,
            uniforms: {opacity:  {type: 'float', value: this.data.starOpacity}},
        });
        jQuery.ajax({
            url: '/data/bsc5.dat',
            success: result=>{
                const starData = result.split("\n");
                const positions = [];
                
                const color = new THREE.Color();
                
                let order=-1;
                starData.forEach(row => {
                    order += 1
                    let star = {
                        id: row.slice(0, 4),
                        name: row.slice(4, 14).trim(),
                        gLon:row.slice(90, 96),
                        gLat:row.slice(96, 102),
                        mag:row.slice(102, 107),
                        spectralClass: row.slice(129, 130),
                        v: new THREE.Vector3(),
                        order,
                    };
                    stars[star.id] = star;
                    star.v = new THREE.Vector3().setFromSphericalCoords(100, (90 - star.gLat) / 180 * Math.PI, (star.gLon) / 180 * Math.PI);
                    positions.push(star.v.x);
                    positions.push(star.v.y);
                    positions.push(star.v.z);
                    switch (star.spectralClass) {
                        case "O":
                            color.setStyle(COLOR.BLUE_A);
                            break;
                        case "B":
                            color.setStyle(COLOR.TEAL_E);
                            break;
                        case "A":
                            color.setStyle(COLOR.GREEN_E);
                            break;
                        case "F":
                            color.setStyle(COLOR.GREEN_D);
                            break;
                        case "G":
                            color.setStyle(COLOR.YELLOW_E);
                            break;
                        case "K":
                            color.setStyle(COLOR.YELLOW_A);
                            break;
                        case "M":
                            color.setStyle(COLOR.RED_E);
                            break;
                        case "L":
                            color.setStyle(COLOR.MAROON_E);
                            break;
                        case "T":
                            color.setStyle(COLOR.PURPLE_D);
                            break;
                        default:
                            color.setStyle(COLOR.PURPLE_B);
                    }
                    const s = (((star.mag) * 26) / 255) + 0.18;
                    sizes.push(s/2);
                    colors.push(color.r, color.g, color.b);
                });
                console.log({colors, })
                
                starsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
                starsGeometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
                
                
                
                
            },
            async: false
        });
        this.lines = []
        const consStars = []
        jQuery.ajax({
            url: '/data/ConstellationLines.dat',
            success: result=>{
                const constellationLinesData = result.split("\n");
                
                constellationLinesData.forEach(row => {
                    if (!row.startsWith("#") && row.length > 1) {
                        const rowData = row.split(/[ ,]+/);
                        var points = [];
                        for (let i = 0; i < rowData.length - 2; i++) {
                            let starId = parseInt(rowData[i + 2].trim());
                            if (starId in stars) {
                                const star = stars[starId];
                                points.push(star.v);
                                consStars.push(star)
                                sizes[star.order] = this.data.constellationStarSize
                            }
                        }
                        const constellationGeometry = new THREE.BufferGeometry().setFromPoints(points);
                        const constellationMaterial = new THREE.LineBasicMaterial({ color: randColor(), transparent:true, opacity: this.data.lineOpacity});
                        const constellationLine = new THREE.Line(constellationGeometry, constellationMaterial);
                        constellationLine.userData.type = "constellationLine";
                        this.constellationLine = constellationLine;
                        this.el.object3D.add(constellationLine)
                        this.lines.push(constellationLine)
                    }
                });
            },
            async: false,
        })
        starsGeometry.setAttribute('size', new THREE.Float32BufferAttribute(sizes, 1));
        this.stars = new THREE.Points(starsGeometry, starsMaterial);
        this.el.object3D.add(this.stars )
        this.consStars = consStars;
        this.sizes = sizes;
    },
});