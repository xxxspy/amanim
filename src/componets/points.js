// import {COLOR} from './constants'
const C = require('./constants')
const COLOR = C.COLOR;


AFRAME.registerComponent('point', {
    multiple: true,
    schema: {
        x: {
            type: 'number',
            default: 0,
        },
        y: {
            type: 'number',
            default: 0,
        },
        z: {
            type: 'number',
            default: 0,
        },
        size: {
            type: 'number',
            default: 0.1,
        },
        color: {
            type: 'color',
            default: COLOR.BLUE_A
        },
    },

    init(){
        
        const geometry = new THREE.BufferGeometry();
        const sprite = new THREE.TextureLoader().load( 'imgs/disc.png' );
        geometry.setAttribute( 'position', new THREE.Float32BufferAttribute( [this.data.x, this.data.y, this.data.z], 3 ) );
        material = new THREE.PointsMaterial( { size: this.data.size, sizeAttenuation: true, map: sprite, alphaTest: 0.5, transparent: true } );
        material.color.set(this.data.color)
        const points = new THREE.Points( geometry, material );
        console.log('id:'+this.id)
        if(this.points==undefined){
            console.log('============')
            this.points={}
        }
        this.points[this.id] = points
        this.el.object3D.add(points)
        console.log(this.points)
    },

    update(oldData){
        var data = this.data;
        var diff = AFRAME.utils.diff(data, oldData);
        if(diff.x!=undefined || diff.y!=undefined || diff.z!=undefined){
            this.points[this.id].geometry.setAttribute( 'position', new THREE.Float32BufferAttribute( [this.data.x, this.data.y, this.data.z], 3 ) );
        }
        if(diff.size!=undefined){
            this.points[this.id].material.size = this.data.size
        }
    },
})


AFRAME.registerComponent('points', {
    schema: {
        pointsData: {
            type: 'string',
        },

        bestFitPointScale: {
            type: 'number',
            default: 0,
        },

        fitLineSlop:{
            type: 'number',
            default: 0,
        },

        fitLineIntercept:{
            type: 'number',
            default: 0
        },
        showNums:{
            type: 'number',
            default: -1,
        },
        fitLineScale:{
            type: 'number',
            default: 0,
        },
        errorLineScale:{
            type: 'number',
            default: 0,
        },



    },

    
    init: function () {

        const pointsData = window[this.data.pointsData]
        const geometry = new THREE.BufferGeometry();

        let errorLines = new THREE.Group()
        pointsData.forEach((p, i)=>{
            p.order = i
            errorLines.add(this.genErrorLine(p))
        })
        let vertices = this.calVertices()
        const sprite = new THREE.TextureLoader().load( 'imgs/disc.png' );
        geometry.setAttribute( 'position', new THREE.Float32BufferAttribute( vertices, 3 ) );
        
        material = new THREE.PointsMaterial( { size: 0.1, sizeAttenuation: true, map: sprite, alphaTest: 0.5, transparent: true } );
        material.color.setHSL( 1.0, 1, 1 );
        const points = new THREE.Points( geometry, material );
        this.points = points
        this.el.setObject3D('points', points)
        this.el.setObject3D('errorLines', errorLines)
        this.errorLines = errorLines
        this.vertices = vertices
        this.el.setObject3D('fitLine', this.drawFitLine())
        // y lines
        
    },

    intShowNums(){
        let data = this.data;
        return parseInt(data.showNums*window[data.pointsData].length)
    },

    calVertices(){
        let pd = window[this.data.pointsData]
        if(this.data.showNums>=0){
            pd=pd.slice(0, this.intShowNums())
        }
        let vertices = [];
        pd.forEach(p=>{
            let yhat = p.x * this.data.fitLineSlop + this.data.fitLineIntercept;
            
            vertices.push(p.x, p.y + (yhat - p.y)*this.data.bestFitPointScale, p.z||0)
        })
        return vertices
    },

    showYLine(){
        if(this.data.showY){

        }
    },

    genErrorLine(point){
        const material = new THREE.LineBasicMaterial({
            color: 0x0000ff
        });
        const geometry = new THREE.BufferGeometry().setFromPoints( this.calErrorLinePoints(point) );
        const line = new THREE.Line( geometry, new THREE.LineDashedMaterial( { color: 0xffffff,  dashSize: 0.01, gapSize: .01} ) );
        line.computeLineDistances()
        return line
    },

    calErrorLinePoints(point){
        let y = point.y;
        if((this.data.showNums>=0) && (point.order<this.intShowNums())){
            let aim = this.data.fitLineSlop * point.x + this.data.fitLineIntercept
            y = point.y + (aim-point.y)*this.data.errorLineScale
        }
        const points = [];
        points.push( new THREE.Vector3( point.x, point.y, point.z||0 ) );
        points.push( new THREE.Vector3(point.x, y, point.z||0 ) );
        return points
    },

    fitLinePoints(i, b){
        let minX = d3.min(window[this.data.pointsData], d=>d.x)-0.2
        let maxX = d3.max(window[this.data.pointsData], d=>d.x)+0.2
        const points = [];
        console.log('draw....................'+this.data.fitLineScale)
        let inter = minX + (maxX-minX)*this.data.fitLineScale;
        console.log({minX, maxX, inter, scale: this.data.fitLineScale, res:  b*inter+i, i, b})
        points.push( new THREE.Vector3( minX, b*minX+i, 0 ) );
        points.push( new THREE.Vector3( inter, b*inter+i, 0 ) );

        return points
    },

    drawFitLine(){
        const geometry = new THREE.BufferGeometry().setFromPoints( this.fitLinePoints(this.data.fitLineIntercept, this.data.fitLineSlop) );
        const material = new THREE.LineBasicMaterial({
            color: 0xffffff
        });
        const line = new THREE.Line( geometry, material);
        this.fitLine = line
        return line
        
    },

    update(oldData){
        console.log('udap............')
        var data = this.data;
        var diff = AFRAME.utils.diff(data, oldData);
        console.log(diff)
        console.log((diff.fitLineIntercept!=undefined) || ( diff.fitLineSlop != undefined))
        if((diff.fitLineIntercept!=undefined) || ( diff.fitLineSlop != undefined)||(diff.fitLineScale!=undefined)){
            console.log('ddddddddddddd')
            console.log(this.fitLinePoints(this.data.fitLineIntercept, this.data.fitLineSlop))
            this.fitLine.geometry.setFromPoints(this.fitLinePoints(this.data.fitLineIntercept, this.data.fitLineSlop))
            this.errorLines.children.forEach((child, i)=>{
                child.geometry.setFromPoints(this.calErrorLinePoints(window[this.data.pointsData][i]))
            })
        }
        if(diff.bestFitPointScale != undefined){
            this.points.geometry.setAttribute('position', new THREE.Float32BufferAttribute( this.calVertices(), 3 ))
        }
        if((diff.showNums != undefined)||(diff.errorLineScale!=undefined)){
            let vs = this.calVertices()
            this.points.geometry.setAttribute('position', new THREE.Float32BufferAttribute( vs, 3 ))
            window[data.pointsData].forEach((d, i)=>{
                d.order = i
                this.errorLines.children[i].geometry.setFromPoints(this.calErrorLinePoints(d))
                this.errorLines.children[i].computeLineDistances()
            })
        }
    },
});
