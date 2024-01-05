if(window.THREE==undefined){
    window.THREE = AFRAME.THREE
}
import '../../src/componets/scatter'
import '../../src/componets/arrow'
import '../../src/componets/paramPosition'
import '../../src/componets/font-awesome'
import '../../src/componets/points'
import '../../src/componets/distance'
import '../../src/componets/curve'
import '../../src/componets/mathjax'
import '../../src/componets/stars'
import '../../src/componets/func-graph/GraphComponent/Graph'
import {Animation} from '../../src/animation'
import {captionDuration} from '../../src/utils'
import {COLOR} from '../../src/componets/constants'

//graph="function:f(u, v) = [u, abs(0.7*v*(1+cos(u/2))), sin(u/4)*5];showAxes:true;width:2"

const Data = {
	t1x: 0,
	t2x: 0.6,
	t3x: 1.8,
	t4x: 0.5
}

function showStars(){
	anim.add(`
	<a-entity
			id="stars"
			scale="0.5 0.5 0.5"
			position="1.5 1.5 0"
			visible="true"
			stars="starOpacity:0.0;lineOpacity:0;constellationStarSize:0.5;"
			animation__showstars="property:stars.starOpacity; from:0; to:0.9; dur:2000;autoplay:false;startEvents:showstars"
			animation__hidestars="property:stars.starOpacity; from:0.9; to:0; dur:2000;autoplay:false;startEvents:hidestars"
			animation__largercon="property:stars.constellationStarSize;from:0.5;to:1;autoplay:false;startEvents:showconlines"
			animation__showconlines="property:stars.lineOpacity;from:0;to:1;dur:3000;autoplay:false;delay:1000;startEvents:showconlines"
			animation__hideconlines="property:stars.lineOpacity;from:1;to:0;dur:3000;autoplay:false;delay:1000;startEvents:hideconlines"
			animation__hideall="property:visible;from:true;to:false;delay:3000;autoplay:false;startEvents:hideconlines"
		></a-entity>
	`)
	anim.addCaption('大家好,我是data sense')
	anim.showEnding()
	anim.addCaption('我们一直在研究随机现象,但是我们一直被随机所愚弄', '+=3000')
	anim.addEventAnimation('#stars', 'showstars', anim.previousCaptionDuration())
	anim.addCaption('因为我们相信随机现象背后一定有一个规律')
	anim.addEventAnimation('#stars', 'showconlines')
	anim.constructAnimation({
		selector: '#camera',
		property: 'position',
		to: '1.5 1.5 100',
		dur: 2000,
		startEvents: 'showconlines',
	})
	anim.setCamera('dampingFactor', 0.5)
	// anim.camRotateTo(1, 0, 0, 0.01)
	anim.addCaption('然后刻意忘记那些不服从规律的星星,我们就发明了星座')
	anim.addEventAnimation('#stars', 'hidestars')
	anim.addCaption('有一种随机现象最容易欺骗我们,那就是均值回归')
	anim.addEventAnimation('#stars', 'hideconlines')
}

function showStuGrades(){
	anim.add($(`
		
		<a-entity 
			position="1.5 1.5 0"
			id="graph" 
			rotation="0 0 0"
			graph="function:f(u, v) = [u, 0, sin(u/4)*5];showAxes:true;width:0;showGrid:false;showBoundingLabels:false"
		></a-entity>
		
		<a-entity 
			position="1 1.02 0"
			parampos="x:1;y:Math.sin((x-1.5)*10/4)*0.5+1.5;z:0"
			id="aballcontainer"
			animation__showt1="property:parampos.x;from:"
			>
			<a-sphere
				id="aball"
				radius="0.0" 
				color="#ffff00" 
				rotation="0 0 0"
				
			></a-sphere >
		</a-entity>


		<a-entity
			id="yaxis"
			position="1.5 0 0"
			arrow="direction:0 1 0;length:0"
		></a-entity>
		<a-entity
			id="xaxis"
			position="0 1.5 0;length:0"
			arrow="direction:1 0 0;length:0"
		></a-entity>

		// 假设某次考试在时间t1的时候进行
		<a-entity
			id="t1arrow"
			position="${Data.t1x} 1 0"
			arrow="direction:0 1 0;length:0.5;color:${COLOR.RED_C};length:0"
		></a-entity>
		<a-entity
			id="t2arrow"
			position="${Data.t2x} 1 0"
			arrow="direction:0 1 0;length:0.5;color:${COLOR.RED_C};length:0"
		></a-entity>
		<a-entity
			id="t3arrow"
			position="${Data.t3x} 1 0"
			arrow="direction:0 1 0;length:0.5;color:${COLOR.RED_C};length:0"
		></a-entity>
		
	`))

	anim.add(`
	<a-box 
		id="greenbox"
		position="1.5 2 0"
		color="green" depth="1.7" height="1.4" width="0" opacity="0.4"
	></a-box>
	<a-entity
		id="unluckballs"
		randompos="n:60;xMax:1.5;xMin:0.8;y:Math.sin((x-1.5)*10/4)*0.5+1.5;z:-Math.abs(Math.cos((x-1.5)*10/3))*Math.random()*1.3"
		visible="false"
	>
		<a-sphere   
			id="unluckSphere"
			radius="0.03" 
			color='#8080ff'
			wireframe="true"
			wireframe-linewidth="1"
		></a-sphere >
	</a-entity>
	<a-entity
		id="luckballs"
		randompos="n:60;xMax:2.1;xMin:1.3;y:Math.sin((x-1.5)*10/4)*0.5+1.5;z:-Math.abs(Math.cos((x-1.5)*10/3))*Math.random()*1.3"
		visible="false"
	>
		<a-sphere   
			id="luckSphere"
			radius="0.03" 
			color="#ff8080" 
			wireframe="true"
			wireframe-linewidth="1"
		></a-sphere >
	</a-entity>
	<a-box 
		id="bluebox"
		position="1.2 1.2 -1"
		color="blue" depth="2" height="0.0" width="0.5" opacity="0"
	></a-box>
	<a-box 
		id="redbox"
		position="1.7 1.7 -0.84"
		color="red" depth="1.7" height="0.0" width="0.5" opacity="0"
	></a-box>

	<a-entity
		class="reg-arrows"
		position="0.5 0.5 0;length:0"
		arrow="direction:1 1 0;length:0;color:${COLOR.RED_B}"
	></a-entity>
	<a-entity
		class="reg-arrows"
		position="2.5 2.5 0;length:0"
		arrow="direction:-1 -1 0;length:0;color:${COLOR.RED_B}"
	></a-entity>
	`)

	// animations #######################################
	anim.camAutoRotate(false)
	anim.camRotateTo(0, 0, 3, 0.1)
	// 身体状态

	anim.addCaption('我们假定这是一个学生成绩的随机曲线', )
	anim.constructAnimations([{
		selectors: '#graph', 
		property: 'graph.showGrid',
		from: false,
		to: true,
		dur: 1000,
		anmName: 'showGrid',
		startEvents: 'showgraph',
	},{
		selectors: '#graph', 
		property: 'graph.width',
		from: 0.1,
		to: 2,
		dur: 3000,
		startEvents: 'showgraph',
	}])
	anim.addCaption('横坐标表示时间')
	anim.constructAnimation({
		selectors: '#xaxis',
		property: 'arrow.length',
		from: 0,
		to: 3,
		dur: 3000,
		startEvents: 'showxaxis',
	})
	anim.addCaption('纵坐标表示成绩')
	anim.constructAnimation({
		selectors: '#yaxis', 
		property: 'arrow.length',
		from: 0,
		to: 3,
		dur: 3000,
		startEvents: 'showyaxis',
	})
	anim.addCaption('某一次测试成绩用小球的位置表示')
	anim.constructAnimation({
		selectors: '#aball', 
		property: 'radius',
		from: 0,
		to: 0.06,
		dur: 2000,
		startEvents: 'showaball',
	})
	//property:parampos.x;from:1.5;to:1.66;dur:1000
	anim.addCaption('小球的位置越高,表示成绩越好', '+=100')
	anim.constructAnimation({
		selectors: '#aballcontainer', 
		property: 'parampos.x',
		from: 1,
		to: 2,
		dur: 3000,
		startEvents: 'movehigh',
	})
	anim.addCaption('对于能力差的学生,成绩高低很大程度上受到运气的影响')
	// 假设某次考试在t1的时间进行
	// 下次考试可能在t2的时候进行,也可能在t3的时候进行
	// 这时候成绩的变化主要是因为随机,而不是学生的能力变化
	// anim.addCaption('假设某次考试在时间t1的时候进行')
	anim.constructAnimations([{
		selectors: '#aballcontainer', 
		property: 'parampos.x',
		from: 2,
		to: Data.t1x,
		dur: 3000,
		startEvents: 'showt1',
		addEventAnimation: false,
	}, {
		selectors: '#t1arrow', 
		property: 'arrow.length',
		from: 0,
		to: 0.5,
		dur: 2000,
		startEvents: 'showt1',
	}])
	anim.addCaption('不同时间同样难度的考试成绩就是不同')
	anim.constructAnimations([{
		selectors: '#aballcontainer', 
		property: 'parampos.x',
		to: Data.t2x,
		dur: 2000,
		startEvents: 'showt2',
		addEventAnimation: false,
	}, {
		selectors: '#t2arrow', 
		property: 'arrow.length',
		from: 0,
		to: 0.5,
		dur: 1000,
		startEvents: 'showt2',
	}])

	anim.constructAnimations([{
		selectors: '#aballcontainer', 
		property: 'parampos.x',
		to: Data.t3x,
		dur: 2000,
		startEvents: 'showt3',
		addEventAnimation: false,
	},  {
		selectors: '#t3arrow', 
		property: 'arrow.length',
		from: 0,
		to: 0.5,
		dur: 1000,
		startEvents: 'showt3',
	}])
	anim.addCaption('学生的能力决定了他的成绩变化的范围')
	anim.constructAnimations([{
		selectors: '#aballcontainer', 
		property: 'parampos.x',
		to: Data.t4x,
		dur: 3000,
		startEvents: 'tostart',
		addEventAnimation: false,
	},  {
		selectors: '#t1arrow,#t2arrow,#t3arrow', 
		property: 'arrow.length',
		to: 0,
		dur: 1000,
		startEvents: 'tostart',
	}])

	anim.addCaption('所谓否极泰来就是,运气差到极点,下次大概率运气会变好')
	anim.constructAnimation({
		selectors: '#aballcontainer', 
		property: 'parampos.x',
		from: 1,
		to: 2,
		dur: 3000,
		startEvents: 'movetop',
	})

	
	anim.addCaption('成绩分布基本上是正态分布的')
	anim.constructAnimations([{
		selectors: '#graph',
		property: 'graph.function',
		to: 'f(u, v) = [u, abs(0.7*v*(1+cos(u/2))), sin(u/4)*5]',
		dur: 500,
		startEvents: 'showfunc',
	}, {
		selectors: '#aball', 
		property: 'radius',
		from: 0.06,
		to: 0,
		dur: 500,
		startEvents: 'hideaball',
	}])
	anim.constructAnimations([{
		selectors: '#graph',
		property: 'graph.width',
		to: 0.54,
		dur: 3000,
		delay: 2000,
		startEvents: 'shownorm1',
	}, {
		selectors: '#graph',
		property: 'rotation',
		to: '90 0 0',
		dur: 3000,
		startEvents: 'rotate90',
	}])
	anim.addCaption('成绩在均值附近的概率比较大,也就是绿色区域', undefined, 5000)
	anim.constructAnimations([{
		selectors: '#greenbox',
		property: 'width',
		from: 0,
		to: 0.5,
		startEvents: 'showgrennbox',
		delay: 1000,
		dur: 3000,
	}])
	anim.addCaption('成绩低于或者高于均值越多,概率就越小', undefined)
	anim.constructAnimation({
		selectors: '#greenbox',
		property: 'width',
		from: 0.5,
		to: 0,
		startEvents: 'hidegreenbox',
		delay: 1000,
		dur: 2000,
	})
	anim.addCaption('假如一个班级参加了考试')
	anim.constructAnimations([{
		selectors: '#graph',
		property: 'rotation',
		to: '0 0 0',
		dur: 3000,
		startEvents: 'rotate0',
	},{
		selectors: '#greenbox',
		property: 'height',
		to: 0.5,
		startEvents: 'shortgreen',
		delay: 1000,
		dur: 3000,
	},{
		selectors: '#greenbox',
		property: 'position',
		to: '1.5 1.5 0',
		startEvents: 'shortgreen2',
		dur: 3000,
	},])
	anim.addCaption('由于成绩受到运气的影响,每次考试都有发挥超常也有发挥失常的')
	anim.constructAnimations([{
		selectors: '#luckballs',
		property: 'visible',
		to: true,
		dur: 1000,
		startEvents: 'showluckballs',
	},])
	anim.constructAnimation({
		selectors: '#unluckballs',
		property: 'visible',
		to: true,
		dur: 2000,
		startEvents: 'showluckballs',
	})
	anim.addCaption('发挥超常的学生更多集中的均值以上', '+=500')
	anim.constructAnimations([
		{
			selectors: '#redbox',
			property: 'height',
			to: 0.6,
			dur: 2000,
			delay: 1000,
			startEvents: 'showboxred',
		},
		{
			selectors: '#redbox',
			property: 'opacity',
			to: 0.3,
			dur: 1000,
			delay: 1000,
			startEvents: 'showboxred',
		},

	])
	anim.addCaption('发挥失常的学生更多集中在均值以下')
	anim.constructAnimations([

		{
			selectors: '#bluebox',
			property: 'height',
			to: 0.6,
			dur: 2000,
			delay: 2000,
			startEvents: 'showboxblue',
		},
		{
			anmName: 'blueboxopacity',
			selectors: '#bluebox',
			property: 'opacity',
			to: 0.3,
			dur: 1000,
			delay: 2000,
			startEvents: 'showboxblue',
		},
	])
	anim.addCaption('如果我们让运气差的学生再次参加类似的考试', undefined, 3000)
	anim.constructAnimations([{
		selectors: '#luckballs',
		property: 'visible',
		to: false,
		dur: 1000,
		startEvents: 'hideluckballs',
	},])
	anim.constructAnimations([
		{
			selectors: '#redbox',
			property: 'height',
			to: 0,
			dur: 1000,
			startEvents: 'hideRedBox',
		},
		{
			selectors: '#redbox',
			property: 'opacity',
			to: 0,
			dur: 1000,
			anmName: 'redboxopacity',
			startEvents: 'hideRedBox',
		},
	])
	anim.addCaption('他们不可能一直运气差,所以第二次考试成绩会提升', undefined, 4000)
	anim.constructAnimation({
		selectors: '#unluckballs',
		property: 'randompos.xMax',
		to: 2,
		startEvents: 'retest',
		dur: 3000,
	})
	anim.addCaption('也就是朝着第一次考试的全班均值的方向变化')
	anim.constructAnimations([{
		selectors: '.reg-arrows',
		property: 'arrow.length',
		to: 1,
		startEvents: 'regpoint',
		dur: 3000,
	}])
	anim.addCaption('这就是均值回归')
	anim.constructAnimation({
		selectors: '#graph',
		property: 'rotation',
		to: '90 0 0',
		dur: 1000,
		startEvents: 'rotateBack',
	})
}
const DirName = '02'
const imgDir = 'imgs'
function conclusion(){
	anim.camRotateTo(0, 1, 0, 0.1)
	anim.addCaption('想象一个自以为是的研究员对成绩落后的学生实行了干预')
	anim.showImg(`${DirName}/${imgDir}/astudent.png`, '30%', '10%', 2000)
	anim.addCaption('无论这种干预是什么')
	anim.showImg(`${DirName}/${imgDir}/teacher.png`, '30%', '10%', 2000)
	anim.addCaption('都可能见到成绩的提升 但这不能证明干预有效')
	anim.showImg(`${DirName}/${imgDir}/uprise.png`, '30%', '10%', 2000)
	anim.addCaption('这就是随机均值回归欺骗我们的原理')
	anim.addCaption('正如一些依靠经验判断药物是否有效的人')
	anim.showImg(`${DirName}/${imgDir}/doctor.png`, '30%', '10%', 2000)
	anim.addCaption('你们是否承认人的健康总是时好时坏')
	anim.showImg(`${DirName}/${imgDir}/test.png`, '30%', '10%', 2000)
	anim.addCaption('你们是否承认不用药物干预情况下病人也能好转')
	anim.showImg(`${DirName}/${imgDir}/health.png`, '30%', '10%', 2000)
}

function construct(){
	// 学生成绩
    

	


// 	`
	
// 	`

}

function animations(){
	
	
	
	// anim.constructAnimation({
	// 	selector: '#camera',
	// 	property: 'position',
	// 	to: '1.5 1.5 3',
	// 	dur: 1000,
	// 	startEvents: 'close',
	// })
	
	

	


}

const anim = new Animation({speed:1, backgroudMusic: 'sounds/bensound-betterdays.mp3', homeDirName: '02'})


anim.construct(()=>{
	anim.constructEnding()
	showStars()
	showStuGrades()
	conclusion()
    return '#graph'
}, animations)

