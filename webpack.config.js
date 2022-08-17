const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const TemplateContent = `
<html>
<head>
    <title><TITLE></title>
    <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
  />

    <script src="https://aframe.io/releases/1.2.0/aframe.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/three-text2d@0.6.0/dist/three-text2d.min.js"></script>
    <script src="https://cdn.rawgit.com/tizzle/aframe-orbit-controls-component/v0.1.14/dist/aframe-orbit-controls-component.min.js"></script>
    <script src="https://supereggbert.github.io/aframe-htmlembed-component/dist/build.js"></script>
    <script src="https://cdn.bootcdn.net/ajax/libs/d3/7.0.0/d3.min.js"></script>
    <script src="https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/howler/2.2.3/howler.core.min.js" integrity="sha512-+wqa4/aOL4vwhL637A4p+6epqhUHDqpEfYJa1+PlzlMf908CSOb3xtIeKwZWh5Q0Q/R2nYUKxH4vvcQg+k8KKQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>

    <script type="text/x-mathjax-config">
        MathJax = {
            loader: {load: ['input/tex-base', 'output/svg', 'ui/menu', '[tex]/mhchem']},
            tex: {packages: {'[+]': ['mhchem']}}
        };
    </script>
    <script type="text/javascript" id="MathJax-script" src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js"></script>
    <script src="/<ENTRY>.bundle.js" type="text/javascript" ></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css">
</head>

<body>
    <a-scene id="scene" debug>
        <a-assets id="assets">
            <ASSETS>
            
        </a-assets>
        <a-sphere 
            id="target" 
            visible="false"
            color="yellow" 
            radius="0.1" 
            position="1.5 1.5 0"
        ></a-sphere>
        <a-sky src="sky.png"></a-sky>
        <a-entity
            id="camera"
            camera="fov: 80; zoom: 1;"
            position="1.5 1.5 3"
            orbit-controls="
                autoRotate: false;
                target: #target;
                enableDamping: true;
                dampingFactor: 0.0125;
                rotateToSpeed:0.001;
                minDistance:1;
                maxDistance:100;
                "
            mouse-cursor=""
        >
            <a-entity geometry="primitive:cone; radius-bottom:1; radius-top:0" scale=".33 1 .33" position="0 0 0" rotation="90 0 0" material="color: #0099ff; transparent: true; opacity:0.5"></a-entity>
        </a-entity>
    </a-scene>
</body>
</html>
`

const ExampleHome = 'examples'

const AssetsPlaceholder = '<ASSETS>'
const TitlePlaceHolder = '<TITLE>'
const EntryPlaceHolder = '<ENTRY>'

const TemplateGener = function(options){
    if(options.assets != undefined){
        options.templateContent = options.templateContent.replace(AssetsPlaceholder, options.assets)
    }
    if(options.title != undefined){
        options.templateContent = options.templateContent.replace(TitlePlaceHolder, options.title)
    }
    options.templateContent = options.templateContent.replace(EntryPlaceHolder, options.entry)
    return options
}

function assetsFinder(EXDirName){
    const ImgDirName = 'imgs'
    const soundDirName = 'sounds'
    const imgDir = path.join(__dirname, ExampleHome, EXDirName,  ImgDirName)
    let assets = []
    fs.readdirSync(imgDir).forEach(file=>{
        assets.push(`<img id="${ImgDirName}-${file.split('.')[0]}" src="${EXDirName}/${ImgDirName}/${file}">`)
    })
    fs.readdirSync(path.join(__dirname, ExampleHome, EXDirName, soundDirName)).forEach(file=>{
        assets.push(`<audio id="" src="${EXDirName}/${soundDirName}/${file}" preload="auto"></audio>`)
    })
    
    return assets.join('\n')
}

const entries = [ 
    {
        dir: '01',
        title: '回归分析',
    },
    {
        dir: '02',
        title: '均值回归',
    },
    {
        dir: 'playground',
        title: '测试场地',
    },
]

function genEntry(entries){
    let rtn = {}
    entries.forEach(en=>rtn[en.dir] = `./${ExampleHome}/${en.dir}/index.js`)
    console.log(rtn)
    return rtn
}

function genPlugins(entries){
    let plugins = [new CopyPlugin({
        patterns: [
          { from: "src/statics", to: "statics" },
        ],
    }),]
    entries.forEach(en=>{
        plugins.push(new HtmlWebpackPlugin(TemplateGener({
            templateContent: TemplateContent,
            filename: `${en.dir}.html`,
            entry: en.dir,
            inject: false,
            title: en.title,
            assets: assetsFinder(en.dir),
        })))
    })
    return plugins
}


module.exports = {
    entry:  genEntry(entries),
    devServer: {
        static: {
            directory: path.join(__dirname, ExampleHome),
        },

    },
    mode: 'development',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    module: {
    rules: [
        {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
        },
        {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
        },
    ],
    },
    plugins: genPlugins(entries)
};