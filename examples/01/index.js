import '../../src/componets/scatter'
import '../../src/componets/arrow'
import '../../src/componets/font-awesome'
import '../../src/componets/points'
import '../../src/componets/distance'
import '../../src/componets/curve'
import '../../src/componets/mathjax'
import {Animation} from '../../src/animation'








window.scatterData = [
    {x: 2,   y: 1.8 },
    {x: 1.9, y: 1.5 },
    {x: 1.8, y: 1.5 },
    {x: 1.7, y: 1.4 },
    {x: 1.6, y: 1.5 },
    {x: 1.5, y: 1.8 },
    {x: 1.2, y: 1.2 },
    {x: 0.9, y: 0.7 },
    {x: 0.8, y: 0.6 },
    {x: 0.7, y: 0.5 },
    {x: 0.5, y: 0.4 },
]

window.scatterData2 = [
    {x: 2,   y: 1.8 , z:0.2},
    {x: 1.9, y: 1.5 , z:-0.40},
    {x: 1.8, y: 1.5 , z:0.5},
    {x: 1.7, y: 1.4 , z:0.1},
    {x: 1.6, y: 1.5 , z:0},
    {x: 1.5, y: 1.8 , z:0.4},
    {x: 1.2, y: 1.2 , z:0.6},
    {x: 0.9, y: 0.7 , z:0.8},
    {x: 0.8, y: 0.6 , z:0},
    {x: 0.7, y: 0.5 , z:-0.1},
    {x: 0.5, y: 0.4 , z:0.3},
]

const FitLine = {
    b0: -0.056,
    b1: .91,
    ymean: 1.17,
}

const FLPoint = {
    x: scatterData[5].x,
    y: scatterData[5].x*FitLine.b1+FitLine.b0,
    z: 0
}

// 假设我们知道什么是直角坐标系
// 横坐标表示身高,纵坐标表示体重
// 假如我们用一条直线表示身高和体重的关系
// 当然身高和体重的关系不一定是直线关系, 但是为了简化模型, 我们假设他们是直线关系

// 直线上任意的一点都有对应的身高和体重
// 假设我们知道一个人的身高为h, 做一条垂直与x轴的线, 那么这个交点对应的y坐标就是这个人的体重

// 或者假设我们知道这条直线的方程
// 带入身高h, 就知道体重为w

// 现在的问题是, 我们并不知道回归方程中的两个参数截距和斜率
// 截距决定了回归线和y轴的交点, 斜率决定了回归线的倾斜
// 如果知道这两个参数, 回归方程可以写为

// 根据高中数学知识, 两点决定一条直线
// 我们可以找两个人, 测量他们的身高和体重
// 连接这两个点的线就是回归线, 同样可以求得这个回归线的方程

// 但是我们知道, 用两个样本的数据来决定身高和体重的关系是不合理的
// 受到随机因素的影响, 我们的回归线可以有无限多种

// 因此我们采集了很多人的身高和体重数据
// 我们无法简单的用两点决定一条直线的方法求回归方程
// 我们只能找到一条直线, 让点到线的距离尽量短

// 而这个距离叫做残差

const AxisLength = 3
const anim = new Animation({speed:1, backgroudMusic: 'sounds/bensound-betterdays.mp3'})
const pointPositions = {
    a: {x:2.2, y:2.5, z:0},
    b: {x:1, y:1.3, z:0},
    c: {x:1.6, y:1.9, z:0},
}

anim.construct(()=>{
    constructStage1();
    constructStage2();
    anim.constructEnding()
    return '#scatter'
}, animations)


function constructStage1(){
    const b0 = 0.3
    const b1 = 1
    const axis = $(`
    <a-entity
        id="axis"
        arrow__x="headLength:0.1;headWidth:0.1;direction: 1 0 0;length:0" 
        arrow__y="headLength:0.1;headWidth:0.1;direction: 0 1 0;length:0" 
        arrow__z="headLength:0.1;headWidth:0.1;direction: 0 0 1;length:0" 
        line="start:0 0 0;end:0 0 0"
        position="0 0 0"
        animation__showX="property:arrow__x.length;from:0;to:${AxisLength};autoplay:false;ease:easeOutBack;dur:3000"
        animation__showY="property:arrow__y.length;from:0;to:${AxisLength};autoplay:false;ease:easeOutBack;dur:3000"
        animation__showB1="property:line.start;to:-${b0} 0 0;autoplay:false;"
        animation__showZ="property:arrow__z.length;from:0;to:${AxisLength};autoplay:false;ease:easeOutBack;dur:3000"
    ></a-entity>
    `)
    anim.add(axis)
    const texts = $(`
        <a-entity 
            position="${pointPositions.c.x} -0.2 0" 
            htmlembed="ppu:256" 
            scale="0 0 0"
            animation__showH="property:scale;from:0 0 0;to:1.5 1.5 0;dur:3000;autoplay:false"
            animation__moveH1="property:position;from:${pointPositions.c.x} -0.2 0;to:${pointPositions.a.x} -0.2 0;dur:3000;autoplay:false"
            animation__moveH3="property:position;from:${pointPositions.a.x} -0.2 0;to:${pointPositions.b.x} -0.2 0;dur:3000;autoplay:false"
            animation__clearFormula="property:scale;to:0 0 0;from:1.5 1.5 0;autoplay:false"
        >
            <h1>h</h1>
        </a-entity>
        <a-entity 
            position="3 -0.2 0" 
            htmlembed="ppu:256" 
            scale="0 0 0"
            animation__showheight="property:scale;from:0 0 0;to:2 2 0;dur:2000;autoplay:false;ease:easeOutBack"
        >
            <h1>身高</h1>
        </a-entity>
        <a-entity 
            position="-0.4 3 -0.05" 
            htmlembed="ppu:256" 
            scale="0 0 0"
            rotation="1 0 0"
            animation__showtizhong="property:scale;from:0 0 0;to:2 2 0;dur:1500;autoplay:false;ease:easeOutBack"
        >
            <h1>体重</h1>
        </a-entity>
    `)
    anim.add(texts)

    /////// points
    let p = pointPositions
    anim.add($(`
    <a-entity
        point__a="x:${p.a.x}; y:${p.a.y}; z:${p.a.z};size:0.0001"
        point__b="x:${p.b.x}; y:${p.b.y}; z:${p.b.z};size:0.0001"
        point__c="x:${p.c.x}; y:${p.c.y}; z:${p.c.z};size:0.0001;color:#F7A1A3;"
        animation__show_apoint="property:point__a.size;from:0.001;to:0.2;dur:3000;autoplay:false"
        animation__show_bpoint="property:point__b.size;from:0.001;to:0.2;dur:1000;autoplay:false"
        animation__move_apoint="property:point__a.x;from:1;to:0.4;dur:3000;autoplay:false"
        animation__showCPoint="property:point__c.size;from:0.001;to:0.1;dur:3000;autoplay:false"
        animation__moveH1="property:point__c.x;from:${p.c.x};to:${p.a.x};autoplay:false;dur:3000"
        animation__moveH2="property:point__c.y;from:${p.c.y};to:${p.a.y};autoplay:false;dur:3000"
        animation__moveH3="property:point__c.x;from:${p.a.x};to:${p.b.x};autoplay:false;dur:3000"
        animation__moveH4="property:point__c.y;from:${p.a.y};to:${p.b.y};autoplay:false;dur:3000"
        animation__largerPointA="property:point__a.size;from:0.2;to:0.3;autoplay:false;dur:500"
        animation__largerPointB="property:point__b.size;from:0.2;to:0.3;autoplay:false;dur:500"
        animation__moveFitLine="property:point__a.x;from:${p.a.x};to:${p.a.x-1};autoplay:false;"
        animation__moveFitLineY="property:point__a.y;from:${p.a.y};to:${p.a.y-1.7};autoplay:false;"
        animation__clearStag1a="property:point__a.size;to:0;autoplay:false"
        animation__clearStag1b="property:point__b.size;to:0;autoplay:false"
        animation__clearFormula="property:point__c.size;from:0.1;to:0.00001;autoplay:false"
    ></a-entity>
    
    `))

    // lines
    let cXLineTop = 2.7
    let cXLineBottom = -0.2

    anim.add($(`
    <a-entity
        help="c点向y轴的垂线"
        line__cpointy="start:${p.c.x} ${p.c.y} 0; end::${p.c.x} ${p.c.y} 0; color: white"
        animation__showcpointLineY="property:line__cpointy.end;from:${p.c.x} ${p.c.y} 0;to:0 ${p.c.y} 0;autoplay:false;dur:2000;"
        animation__moveH1="property:line__cpointy.start;from:${p.c.x} ${p.c.y} 0;to:${p.a.x} ${p.a.y} 0;autoplay:false;dur:3000"
        animation__moveH2="property:line__cpointy.end;from:0 ${p.c.y} 0;to:0 ${p.a.y} 0;autoplay:false;dur:3000"
        animation__moveH3="property:line__cpointy.start;from:${p.a.x} ${p.a.y} 0;to:${p.b.x} ${p.b.y} 0;autoplay:false;dur:3000"
        animation__moveH4="property:line__cpointy.end;from:0 ${p.a.y} 0;to:0 ${p.b.y} 0;autoplay:false;dur:3000"
        animation__clearFormula="property:line__cpointy.end;from:0 ${p.b.y} 0;to:${p.b.x} ${p.b.y} 0;autoplay:false"
    >

    </a-entity>
    <a-entity
        line__cpointx="start:${p.c.x} ${cXLineBottom} 0; end: ${p.c.x} ${cXLineBottom} 0; color: white"
        animation__showcpointLineX="property:line__cpointx.end;from:${p.c.x} ${cXLineBottom} 0;to:${p.c.x} ${cXLineTop} 0;autoplay:false"
        animation__moveH1="property:line__cpointx.start;from:${p.c.x} ${cXLineBottom} 0;to:${p.a.x} ${cXLineBottom} 0;autoplay:false;dur:3000"
        animation__moveH2="property:line__cpointx.end;from:${p.c.x} ${cXLineTop} 0;to:${p.a.x} ${cXLineTop} 0;autoplay:false;dur:3000"
        animation__moveH3="property:line__cpointx.start;from:${p.a.x} ${cXLineBottom} 0;to:1 ${cXLineBottom} 0;autoplay:false;dur:3000"
        animation__moveH4="property:line__cpointx.end;from:${p.a.x} ${cXLineTop} 0;to:1 ${p.b.y} 0;autoplay:false;dur:3000"
        animation__clearFormula="property:line__cpointx.end;from:1 ${p.b.y} 0;to: 1 ${cXLineBottom} 0;autoplay:false;"
        ></a-entity>
    <a-entity
        help="拟合线和c点x轴的垂线"
        line__fitline="start: ${p.a.x} ${p.a.y} 0; end: ${p.a.x} ${p.a.y} 0; color: white"
        animation__showFitLine="property:line__fitline.end;from:${p.a.x} ${p.a.y} 0;to:${p.b.x} ${p.b.y} 0;autoplay:false"
        animation__extendFitLine="property:line__fitline.end;from:${p.b.x} ${p.b.y} 0;to:0 ${b0} 0;autoplay:false"
        animation__showB1="property:line__fitline.end;from:0 ${b0} 0;to:-${b0} 0 0;autoplay:false"
        animation__clearFormula="property:line__fitline.end;from:-${b0} 0 0;to: ${p.b.x} ${p.b.y} 0;autoplay:false;"
        animation__moveFitLine="property:line__fitline.start;from: ${p.a.x} ${p.a.y} 0;to: ${p.a.x-1} ${p.a.y} 0;autoplay:false;"
        animation__moveFitLineY="property:line__fitline.start;from: ${p.a.x-1} ${p.a.y} 0;to: ${p.a.x-1} ${p.a.y-1.7} 0;autoplay:false;"
        animation__clearStag1a="property:line__fitline.start;from:  ${p.a.x-1} ${p.a.y-1.7} 0;to: ${p.b.x} ${p.b.y} 0;autoplay:false;"
        ></a-entity>
    <a-entity
        distance="start:0 ${p.a.y} 0;end:${p.a.x} ${p.a.y} 0;color:#d7ecff;scale:0.001"
        animation__showxdis="property:distance.scale;from:0;to:1;autoplay:false"
        animation__hidedis="property:distance.scale;from:1;to:0;autoplay:false"
        animation__hideAllPoints="property:distance.scale;from:1;to:0;autoplay:false"
    ></a-entity>
    <a-entity
        distance="start:${p.a.x} 0 0;end:${p.a.x} ${p.a.y} 0;color:#d7ecff;scale:0.001"
        animation__showydis="property:distance.scale;from:0;to:1;autoplay:false"
        animation__hidedis="property:distance.scale;from:1;to:0;autoplay:false"
        animation__hideAllPoints="property:distance.scale;from:1;to:0;autoplay:false"
        ></a-entity>
    `))
    // 回归公式
    anim.add($(`
    <a-entity 
        position="1 2 0" 
        scale="2 2 0"
        animation__showFormula="property:mathjax.scale;from:0;to:1;autoplay:false;dur:3000"
        animation__hideyFormula="property:mathjax.scale;from:1;to:0;autoplay:false;dur:1000"
        mathjax="content:y = b_0 + b_1 x;scale:0"
    >
    </a-entity>
    <a-entity 
        position="-0.2 ${b0} 0" 
        animation__showB0="property:mathjax.scale;from:0;to:1;autoplay:false"
        animation__clearFormula="property:mathjax.scale;from:1;to:0;autoplay:false;"
        mathjax="content:b_0;scale:0"
    >
    </a-entity>
    <a-entity 
        position="0.5 0.3 0" 
        animation__drawCurve="property:mathjax.scale;from:0;to:1;autoplay:false"
        animation__clearFormula="property:mathjax.scale;from:1;to:0;autoplay:false;"
        mathjax="content:\alpha;scale:0;"
    >
    </a-entity>
    <a-entity
        position="1 1 0" 
        animation__showB1Formula="property:mathjax.scale;to:1;autoplay:false;"
        animation__clearFormula="property:mathjax.scale;from:1;to:0;autoplay:false;"
        mathjax="content:b_1=tan(\alpha);scale:0"
    ></a-entity>
    `))

    /// 斜率
    anim.add($(`
        <a-entity
            ellipsecurve="x:-0.3;end:0.000001"
            animation__drawCurve="property:ellipsecurve.end;to:${Math.PI*0.25};autoplay:false"
            animation__clearFormula="property:ellipsecurve.end;to:0.000001;autoplay:false"
        ></a-entity>
    `))
}



function constructStage2(){
    // 拟合直线  残差  R2的讲解
    anim.add($(`
    <a-entity
        points="pointsData:scatterData;showNums:0;fitLineSlop:${FitLine.b1};fitLineIntercept:${FitLine.b0}"
        animation__showps="property:points.showNums; from:0; to:1; autoplay:false;"
        animation__drawErr="property:points.errorLineScale;from:0;to:1;autoplay:false;dur:3000"
        animation__drawFitLine="property:points.fitLineScale;from:0;to:1;autoplay:false;dur:4000"
        animation__ssr0points="property:points.bestFitPointScale;from:0;to:1;autoplay:false;"
        animation__ssr1points="property:points.bestFitPointScale;from:1;to:0;autoplay:false;"
        animation__moveFitLine1="property:points.fitLineIntercept;from:${FitLine.b0};to:1;autoplay:false;dur:3000"
        animation__moveFitLine2="property:points.fitLineIntercept;to:${FitLine.b0};from:1;autoplay:false;dur:3000"
        animation__zeroSlop="property:points.fitLineSlop;to:0;autoplay:false;dur:3000"
        animation__normSlop="property:points.fitLineSlop;to:${FitLine.b1};autoplay:false;dur:1000"
        animation__meanIntercept="property:points.fitLineIntercept;to:${FitLine.ymean};autoplay:false;dur:3000"
        animation__normIntercept="property:points.fitLineIntercept;to:${FitLine.b0};autoplay:false;dur:1000"
        animation__hideAllPoints="property:points.showNums;from:1; to:0; autoplay:false;"
        animation__hideAllPoints="property:visible;from:true;to:false;autoplay:false;dur:300;"
    ></a-entity>
    <a-entity
        points="pointsData:scatterData2;showNums:0;fitLineSlop:${FitLine.b1};fitLineIntercept:${FitLine.b0}"
        animation__rotoZ="property:points.showNums; from:0; to:1; autoplay:false;"
        ></a-entity>
    <a-entity
        position="${FLPoint.x+1} 1 0"
        animation__showR2="property:mathjax.scale;to:1;autoplay:false;"
        mathjax="content:R^2 ;scale:0"
    ></a-entity>
    <a-entity
        position="${FLPoint.x+1.2} 1 0"
        animation__showR22="property:mathjax.scale;to:1;autoplay:false;"
        mathjax="content: = ;scale:0"
    ></a-entity>
    <a-entity
        position="${FLPoint.x+1.4} 1.05 0"
        line="start: 0 0 0; end: 0 0 0;color:#ffffff"
        animation__showR22="property:line.end;from:0 0 0;to:1 0 0;autoplay:false;"
    ></a-entity>

    <a-entity
        animation__showR222="property:mathjax.scale;to:1;autoplay:false;dur:5000"
        mathjax="content:R^2 = {1 - {Unexplained Variation}\\over {Total Variation}} ;scale:0"
    ></a-entity>

    <a-entity
        position="${FLPoint.x+1} 2 0"
        mathjax="content:SSR_0 = \\sum(y_i - \\bar y)^2 ;scale:0"
        animation__showVar="property:mathjax.scale;from:0;to:1;autoplay:false;dur:2000"
        animation__showR22="property:position;to:${FLPoint.x+1.4} 0.8 0;autoplay:false;"
        ></a-entity>
    <a-entity
        position="${FLPoint.x+1} 1.5 0"
        animation__ssrHatShow="property:mathjax.scale;from:0;to:1;autoplay:false;dur:2000"
        animation__showR22="property:position;to:${FLPoint.x+1.4} 1.2 0;autoplay:false;"
        mathjax="content:\\hat{SSR} = \\sum(\\hat y_i - \\bar y)^2 ;scale:0"
    ></a-entity>

    <a-entity 
        position="1.6 2.5 0" 
        animation__showErrFormula="property:mathjax.scale; to:1; autoplay:false;dur:3000"
        animation__hideAllPoints="property:mathjax.scale; from:1;to:0; autoplay:false;dur:3000"
        mathjax="content: e = y - \\hat y ;scale:0"
    >   
    </a-entity>
    <a-entity 
        position="${FLPoint.x} ${FLPoint.y+0.6} ${FLPoint.z}" 
        animation__showErrorDistance="property:mathjax.scale;to:1;autoplay:false;dur:3000"
        animation__hideAllPoints="property:mathjax.scale;from:1;to:0;autoplay:false;dur:3000"
        mathjax="content: y ;scale:0"
    >   
    </a-entity>
    <a-entity 
        position="${FLPoint.x} ${FLPoint.y-0.15} ${FLPoint.z}" 
        animation__showErrorDistance="property:mathjax.scale;to:1;autoplay:false;dur:3000"
        animation__hideAllPoints="property:mathjax.scale;to:0;from:1;autoplay:false;dur:3000"
        mathjax="content:\\hat y ;scale:0"
    >   
    </a-entity>
    <a-entity 
        position="${FLPoint.x+0.1} ${FLPoint.y-0.15} ${FLPoint.z}" 
        animation__yHatFormula="property:mathjax.scale;to:1;autoplay:false;dur:2000"
        animation__hideAllPoints="property:mathjax.scale;to:0;from:1;autoplay:false;dur:2000"
        mathjax="content:= b_0 + b_1 x ;scale:0"
    >   
    </a-entity>
    <a-entity 
        position="${FLPoint.x+1} ${FLPoint.y+1} ${FLPoint.z}" 
        mathjax="content:SSR = \\sum ( y_i - \\hat y_i )^2;scale:0"
        animation__ssrFormula="property:mathjax.scale;from:0;to:1;autoplay:false;dur:3000"
        animation__hideAllPoints="property:mathjax.scale;from:1;to:0;autoplay:false;dur:3000"
        
    ></a-entity>
    <a-entity
        position="-1.4 -0.2 0"
        mathjax="content: R^2 > ?;scale:0"
        animation__r2standard="property:mathjax.scale;from:0;to:1;autoplay:false;dur:2000"
    ></a-entity>
    
    <a-image 
        position="-1 3 0"
        src="#scatter1"
        scale="2 0 0"
        animation__psy="property:scale;from:1.5 0 0;to:1.5 1.5 0;autoplay:false;dur:2000"
        animation__hideAllPoints="property:scale;from:1.5 1.5 0;to:0 0 0;autoplay:false;"
        ></a-image>
    <a-entity
        position="-1.6 2 0"
        mathjax="content:Psychology;scale:0"
        animation__psy="property:mathjax.scale;from:0;to:1;autoplay:false;dur:2000"
    ></a-entity>
    <a-entity
        position="-1.6 0 0"
        mathjax="content:Economics;scale:0"
        animation__eco="property:mathjax.scale;from:0;to:1;autoplay:false;dur:2000"
    ></a-entity>
    
    <a-image 
        scale="2 0 0"
        position="-1 1 0"
        src="#scatter2"
        animation__eco="property:scale;from:1.5 0 0;to:1.5 1.5 0;autoplay:false;"
        animation__hideAllPoints="property:scale;from:1.5 1.5 0;to:0 0 0;autoplay:false;"
        ></a-image>
    <a-image 
        scale="2 0 0"
        position="1 3 0"
        src="#questionaire"
        animation__questionaire="property:scale;from:1.5 0 0;to:1.5 1.5 0;autoplay:false;"
        animation__hideAllPoints="property:scale;from:1.5 1.5 0;to:0 0 0;autoplay:false;"
        ></a-image>

    <a-entity
        distance="scale:0;start: ${FLPoint.x} ${FLPoint.y} ${FLPoint.z}; end: ${scatterData[5].x} ${scatterData[5].y} 0"
        animation__showErrorDistance="property:distance.scale;to:1;autoplay:false;"
    ></a-entity>
    <a-entity
        point="x:${FLPoint.x};y:${FLPoint.y};z:0;size:0"
        animation__showErrorDistance="property:point.size;from:0;to:0.1;autoplay:false"
    ></a-entity>
    <a-image 
        id="scatter"
        position="1 1 0"
        src="#scatter"
        scale="2 0 0"
        animation__multivar="property:scale;from:2 0 0;to:1.5 1.5 0;autoplay:false;"
        animation__hideAllPoints="property:scale;from:1.5 1.5 0;to:0 0 0;autoplay:false;"
    ></a-image>
    `))
}


function animations(){
    anim.addCaption('大家好,我是DataSense,今天我们研究一下回归', 'sounds/example01/大家好,我是DataSense,今天我们研究一下回归.mp3')
    anim.showEnding()
    anim.addCaption('假设我们知道什么是直角坐标系', 'sounds/example01/假设我们知道什么是直角坐标系.mp3')
    anim.addAnimation('showX')
    anim.addAnimation('showY', '-=2000')
    anim.addCaption('横坐标表示身高，纵坐标表示体重', 'sounds/example01/横坐标表示身高，纵坐标表示体重.mp3', '-=500')
    anim.addAnimation('showheight')
    anim.addAnimation('showtizhong', '-=1500')
    anim.addCaption('比如一个人的身高和体重就可以表示为一个点',  'sounds/example01/比如一个人的身高和体重就可以表示为一个点.mp3', '+=500')
    anim.addAnimation('show_apoint')
    anim.addCaption('身高就是点到Y轴的距离', 'sounds/example01/身高就是点到Y轴的距离.mp3', '+=1500')
    anim.addAnimation('showxdis')
    anim.addCaption('体重就是点到X轴的距离', 'sounds/example01/体重就是点到X轴的距离.mp3', '+=800')
    anim.addAnimation('showydis')
    anim.addAnimation('hidedis', '+=1000')
    anim.addCaption('如果知道两个人的信息', 'sounds/example01/如果知道两个人的信息.mp3', '+=1000')
    anim.addAnimation('show_bpoint')
    anim.addCaption('就可以利用两点确定一条直线', 'sounds/example01/就可以利用两点确定一条直线.mp3', '+=1000')
    anim.addAnimation('showFitLine')
    anim.addCaption('这条直线代表身高和体重的关系,比如某人的身高是h', 'sounds/example01/这条直线代表身高和体重的关系,比如某人的身高是h.mp3', '+=2000')
    anim.addAnimation('showH')
    anim.addCaption('从x轴上找到h这一点做垂线，两条线的交叉点的纵坐标就是这个人的体重', 'sounds/example01/从x轴上找到h这一点做垂线，两条线的交叉点的纵坐标就是这个人的体重.mp3', '+=3000')
    anim.addAnimation('showcpointLineX')
    anim.addAnimation('showCPoint')
    anim.addAnimation('showcpointLineY')
    anim.addCaption(
            '所以任意的身高都能找到对应的体重值,可以说这条直线代表了身高和体重的关系,叫做回归线',
            'sounds/example01/所以任意的身高都能找到对应的体重值,可以说这条直线代表了身高和体重的关系,叫做回归线.mp3',
            '+=1000'
    )
    anim.addAnimation('moveH1')
    anim.addAnimation('moveH2', '-=3000')
    anim.addCaption('回归分析就是为了找到自变量和因变量的关系(口误:不一定是线性)', 'sounds/example01/回归分析就是为了找到自变量和因变量的线性关系.mp3', '+=5000')
    anim.addAnimation('moveH3')
    anim.addAnimation('moveH4', '-=3000')
    anim.addCaption('这种关系可以用一个等式表示,叫做回归方程', 'sounds/example01/这种关系可以用一个等式表示,叫做回归方程.mp3', '+=2000')
    anim.addAnimation('showFormula')
    anim.addCaption('b0表示截距, 就是直线和y轴的交点的纵坐标', 'sounds/example01/b0表示截距, 就是直线和y轴的交点的纵坐标.mp3', '+=3500')
    anim.addAnimation('extendFitLine')
    anim.addAnimation('showB0')
    anim.addCaption('b1表示斜率, 就是直线和x轴夹角的正切值,也叫自变量的系数', 'sounds/example01/b1表示斜率, 就是直线和x轴夹角的正切值,也叫自变量的系数.mp3', '+=3000')
    anim.addAnimation('showB1')
    anim.addAnimation('drawCurve')
    anim.addAnimation('showB1Formula')
    anim.addCaption(
        '回归分析中你经常看到这样的表格,常量就是截距b0,从第二行开始就是自变量系数',
        'sounds/example01/回归分析中你经常看到这样的表格,常量就是截距b0,从第二行开始就是自变量系数.mp3',
        '+=3000'
    )
    anim.showImg('imgs/example01/coeffs.png', '30%', '50%', 10000)
    anim.hideImg('imgs/example01/coeffs.png')
    anim.addCaption('到此,我们介绍了回归线的一些属性', 'sounds/example01/到此,我们介绍了回归线的一些属性.mp3', '+=2000')
    anim.addAnimation('clearFormula')
    anim.addCaption('但是要知道,目前的回归线是基于两个人的数据求得的', 'sounds/example01/但是要知道,目前的回归线是基于两个人的数据求得的.mp3', '+=2000')
    anim.addAnimation('largerPointA')
    anim.addAnimation('largerPointB')
    anim.addCaption('这种数据得到的结论不具有代表性,并且你的结论是不稳定的,因为两个人的数据很容易发生剧烈变化', 
    'sounds/example01/这种数据得到的结论不具有代表性,并且你的结论是不稳定的,因为两个人的数据很容易发生剧烈变化.mp3', 
    '+=4000')
    anim.addAnimation('moveFitLine')
    anim.addAnimation('moveFitLineY')
    anim.addCaption('比如你从班级里随机挑选一个男生,他的身高可能是1.8米,也可能是1.7米', 
    'sounds/example01/比如你从班级里随机挑选一个男生,他的身高可能是1.8米,也可能是1.7米.mp3', 
    '+=8000')
    anim.showImg('imgs/example01/height.jpg', '30%', '30%', 7000)
    anim.hideImg('imgs/example01/height.jpg',)
    anim.addCaption('但是一个班级的平均身高基本上都在1.7左右,换一个班级平均身高也不会变化很大', 
    'sounds/example01/但是一个班级的平均身高基本上都在1.7左右,换一个班级平均身高也不会变化很大.mp3', 
    '+=3000')
    anim.showImg('imgs/example01/heights.jpeg', '30%', '30%', 7000)
    anim.hideImg('imgs/example01/heights.jpeg',)
    anim.addCaption('统计学家们不会这么愚蠢','sounds/example01/统计学家们不会这么愚蠢.mp3', '+=2000')
    anim.addAnimation('clearStag1a')
    anim.addAnimation('clearStag1b')
    anim.addCaption('他们通常会采集大量的数据','sounds/example01/他们通常会采集大量的数据.mp3', '+=1000')
    anim.addAnimation('showps')
    anim.addAnimation('hideyFormula', '-=1000')
    anim.addCaption('然后通过复杂的算法找到一条最优的直线','sounds/example01/然后通过复杂的算法找到一条最优的直线.mp3', '+=1000')
    anim.addAnimation('drawFitLine')
    anim.addCaption('数据点通常很难落到这条线上','sounds/example01/数据点通常很难落到这条线上.mp3', '+=500')
    anim.addAnimation('drawErr')
    anim.addCaption('那么点到线上距离就是残差, 注意这个距离不是点到直线的垂直距离',
    'sounds/example01/那么点到线上距离就是残差, 注意这个距离不是点到直线的垂直距离.mp3', '+=2000')
    anim.addAnimation('showErrorDistance')
    anim.addCaption('是因变量的估计值和真实值之间的差距, 而估计值就是通过回归方程计算得到的',
    'sounds/example01/是因变量的估计值和真实值之间的差距, 而估计值就是通过回归方程计算得到的.mp3', '+=5000')
    anim.addAnimation('showErrFormula')
    anim.addAnimation('yHatFormula')
    anim.addCaption(
        '所有的残差的平方和就是回归方程拟合好坏的指标',
        'sounds/example01/所有的残差的平方和就是回归方程拟合好坏的指标.mp3', 
        '+=7000')
    anim.addAnimation('ssrFormula')
    anim.addCaption(
        '残差平方和的最小值就是0, 所有数据点落在回归直线上',
        'sounds/example01/残差平方和的最小值就是0, 所有数据点落在回归直线上.mp3', 
        '+=5000')
    anim.addAnimation('ssr0points', '+=2000')
    anim.addCaption('真实数据中, 残差平方和不可能为0',
    'sounds/example01/真实数据中, 残差平方和不可能为0.mp3', '+=4000')
    anim.addAnimation('ssr1points', '+=2000')
    anim.addCaption('通过最小二乘法可以找到最优的方程, 使得残差平方和最小',
        'sounds/example01/通过最小二乘法可以找到最优的方程, 使得残差平方和最小.mp3', 
        '+=3000')
    anim.addAnimation('moveFitLine1')
    anim.addAnimation('moveFitLine2', '-=3000')
    anim.addCaption('为了比较不同的回归方程拟合的好坏, 我们引入R方统计量', 
        'sounds/example01/为了比较不同的回归方程拟合的好坏, 我们引入R方统计量.mp3', '+=3000')
    anim.addAnimation('showR2')
    anim.addCaption('首先假定有一个基线方程, 自变量对因变量没有影响, 也就是斜率为0', 
    'sounds/example01/首先假定有一个基线方程, 自变量对因变量没有影响, 也就是斜率为0.mp3', '+=4000')
    anim.addAnimation('zeroSlop')
    anim.addCaption('截距变为因变量的平均值, 因为平均值的SSR最小', 
    'sounds/example01/截距变为因变量的平均值, 因为平均值的SSR最小.mp3', '+=6000')
    anim.addAnimation('meanIntercept')
    anim.addCaption('这个时候SSR退化为因变量的方差', 
    'sounds/example01/这个时候SSR退化为因变量的方差.mp3', '+=3000')
    anim.addAnimation('showVar')
    anim.addCaption('我们还会假定一个理想模型,也就是回归线是完美的,所有数据点都落在回归线上', 
    'sounds/example01/我们还会假定一个理想模型,也就是回归线是完美的,所有数据点都落在回归线上.mp3', '+=4000')
    anim.addAnimation('normSlop')
    anim.addAnimation('normIntercept', '-=1000')
    anim.addAnimation('ssr0points', '+=2000')

    anim.addCaption('这时候因变量的方差就是可以被回归解释的方差', 
    'sounds/example01/这时候因变量的方差就是可以被回归解释的方差.mp3', '+=7000')
    anim.addAnimation('zeroSlop',)
    anim.addAnimation('meanIntercept', '-=3000')
    anim.addAnimation('ssrHatShow', '+=2000')
    anim.addAnimation('ssr1points', '+=2000')
    
    anim.addCaption('实际上R平方就是这两个方差的比值', 'sounds/example01/实际上R平方就是这两个方差的比值.mp3','+=1000')
    anim.addAnimation('showR22')

    anim.addCaption('但是R方为多少才能证明你的回归结果比较好?没有固定的标准', 
    'sounds/example01/但是R方为多少才能证明你的回归结果比较好 没有固定的标准.mp3', '+=2000')
    anim.addAnimation('r2standard')
    anim.addCaption('在心理学的某些研究中R方在百分之十左右就很常见', 
    'sounds/example01/在心理学的某些研究中R方在百分之十左右就很常见.mp3','+=5000')
    anim.addAnimation('psy')
    anim.addCaption('在经济学的某些研究中R方在百分之三十左右才比较好', 
    'sounds/example01/在经济学的某些研究中R方在百分之三十左右才比较好.mp3','+=5000')
    anim.addAnimation('eco')
    anim.addCaption('因此不要只根据R方来判断你的研究的优劣,尤其是一些问卷数据误差很大的时候', 
    'sounds/example01/因此不要只根据R方来判断你的研究的优劣,尤其是一些问卷数据误差很大的时候.mp3','+=5000')
    anim.addAnimation('questionaire')
    anim.addCaption('这个视频只介绍了1个自变量的回归分析,然而大部分情况下我们有多个自变量', 
    'sounds/example01/这个视频只介绍了1个自变量的回归分析,然而大部分情况下我们有多个自变量.mp3','+=7000')
    anim.addAnimation('multivar', '+=3000')
    anim.addCaption('因此我们在接下来的视频中会讨论多个自变量的情况', 
    'sounds/example01/因此我们在接下来的视频中会讨论多个自变量的情况.mp3','+=3000')
    anim.addAnimation('hideAllPoints')
    anim.addAnimation('showZ')
    anim.addAnimation('rotoZ', '-=3000')
    anim.addCaption('以及各种中介和调节模型', 'sounds/example01/以及各种中介和调节模型.mp3', '+=4000')
    anim.showImg('imgs/example01/modmed.png', '30%', '10%', 3000)
    anim.hideImg('imgs/example01/modmed.png')
    anim.addCaption('希望大家点赞和关注', 'sounds/example01/希望大家点赞和关注.mp3', '+=3000')
    anim.showEnding()
    anim.addAnimation('move_apoint')
}

window.renderLatex = ()=>{
    console.log('&&&&&&&&&&&&&&&&&&&&&&&')
    $('.katex-ct').each((i, e)=>{
        console.log(i)
        console.log(e.innerHTML)
        $(e).html(katex.renderToString(e.innerHTML))
    })
}