import {SVGLoader} from './SVGLoader'
const BufferGeometry = THREE.BufferGeometry;
const ShapeGeometry = THREE.ShapeGeometry;
const Vector3 = THREE.Vector3;
const BufferAttribute = THREE.BufferAttribute;
const Mesh = THREE.Mesh;
const LineBasicMaterial = THREE.LineBasicMaterial;
const LineDashedMaterial = THREE.LineDashedMaterial;


export const promisifyLoader = ( loader, onProgress ) => {
    const promiseLoader = async url => new Promise( ( resolve, reject ) => {
        loader.load(url, resolve, onProgress, reject);
    });
    return {
        originalLoader: loader,
        load: promiseLoader,
    };
};

AFRAME.registerComponent('mathjax', {
    schema:{
        content: {
            type: 'string',
        },
        color: {
            type: 'color',
            default: '#d7ecff',
        },
        scale: {
            type: 'number',
            default: 1
        },
    },
    init(){
        const content=this.data.content
        const color=this.data.color
        const textSize=this.data.scale
        let el = this.el;
        el.object3D.scale.multiplyScalar(0.00016);
        return MathJax.tex2svgPromise(content)
            .then(node => {
                document.body.appendChild(node)
                let mainSVG = node.getElementsByTagName("svg")[0];
                let uses = mainSVG.getElementsByTagName("use");
                let defs = mainSVG.getElementsByTagName("defs")[0];
                let len = uses.length, app = [], par = [], rem = [];
                for(let i = 0;i < len; i++)
                {
                    let domElement = uses[i], id = domElement.attributes["xlink:href"];
                    app.push(defs.querySelector(id.value));
                    par.push(domElement.parentNode);
                    rem.push(domElement);
                }
                for(let i = 0;i < len; i ++) {
                    par[i].append(app[i].cloneNode(false));
                    par[i].removeChild(rem[i]);
                }
                mainSVG.removeChild(defs);
                mainSVG.setAttribute("xmlns", "http://www.w3.org/2000/svg");
                let url = URL.createObjectURL(new Blob([new XMLSerializer().serializeToString(mainSVG)], {type: 'image/svg+xml'}));
                new SVGLoader().load(url, data=>{
                    let paths = data.paths;
                    paths.forEach(path=>{
                        const shapes = SVGLoader.createShapes( path );
                        for ( let j = 0; j < shapes.length; j ++ ) {
                            const shape = shapes[ j ];
                            const geometry = new THREE.ShapeGeometry( shape );
                            const mesh = new THREE.Mesh( geometry, new THREE.LineDashedMaterial( {
                                color: color,
                                side: THREE.DoubleSide,
                                depthWrite: false
                            } ));
                            mesh.scale.y = this.data.scale;
                            el.object3D.add( mesh );
                        }
                    })
                    el.object3D.scale.y *= -1

                })
                
               
            })
           
    },
    update(oldData){
        let meshs = this.el.object3D.children
        var diff = AFRAME.utils.diff(this.data, oldData);
        if(diff.scale != undefined){
            let showNum = meshs.length * this.data.scale;
            meshs.forEach((m, i)=>{
                if(i<showNum){
                    m.scale.y = 1
                }else if((i<showNum+2)&&(this.data.scale>0)){
                    m.scale.y = (showNum+2-i)/2
                }else{
                    m.scale.y = 0
                }
            })
        }

    }
})
