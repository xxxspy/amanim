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
}

function construct(){
    anim.add($(`
		
		<a-entity 
            position="1.5 1.5 0"
            id="graph" 
			rotation="0 0 0"
			graph="function:f(u, v) = [u, 0, sin(u/4)*5];showAxes:true;width:0.1"
		></a-entity>
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
			position="0 1.5 0"
			arrow="direction:1 0 0;length:3"
		></a-entity>

		// ???????????????????????????t1???????????????
		<a-entity
			id="t1arrow"
			position="${Data.t1x} 1 0"
			arrow="direction:0 1 0;length:0.5;color:${COLOR.RED_C}"
		></a-entity>
		<a-entity
			id="t2arrow"
			position="${Data.t2x} 1 0"
			arrow="direction:0 1 0;length:0.5;color:${COLOR.RED_C}"
		></a-entity>
		<a-entity
			id="t3arrow"
			position="${Data.t3x} 1 0"
			arrow="direction:0 1 0;length:0.5;color:${COLOR.RED_C}"
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
			radius="0.03" 
			color="#8080ff" 
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
			radius="0.03" 
			color="#ff8080" 
			wireframe="true"
			wireframe-linewidth="1"
		></a-sphere >
	</a-entity>
	<a-box 
		id="bluebox"
		position="1.2 1.2 -1"
		color="blue" depth="2" height="0.0" width="0.5" opacity="0.3"
	></a-box>
	<a-box 
		id="redbox"
		position="1.7 1.7 -0.84"
		color="red" depth="1.7" height="0.0" width="0.5" opacity="0.3"
	></a-box>
	`)

	


// 	`
	
// 	`

}

function animations(){
	// anim.constructEnding()
	anim.addCaption('?????????,??????data sense')
	anim.showEnding()
	// anim.addCaption('?????????????????????????????????,????????????????????????????????????', '+=3000')
	// anim.addEventAnimation('#stars', 'showstars', anim.previousCaptionDuration())
	// anim.addCaption('?????????????????????????????????????????????????????????')
	// anim.addEventAnimation('#stars', 'showconlines')
	// anim.constructAnimation('#camera', {
	// 	property: 'position',
	// 	to: '1.5 1.5 100',
	// 	dur: 2000,
	// 	startEvents: 'showconlines',
	// })
	// anim.setCamera('dampingFactor', 0.5)
	// anim.camRotateTo(1, 0, 0, 0.01)
	// anim.addCaption('????????????????????????????????????????????????,????????????????????????')
	// anim.addEventAnimation('#stars', 'hidestars')
	// anim.addCaption('??????????????????????????????????????????,?????????????????????')
	// anim.addEventAnimation('#stars', 'hideconlines')
	
	// anim.constructAnimation('#camera', {
	// 	property: 'position',
	// 	to: '1.5 1.5 3',
	// 	dur: 1000,
	// 	startEvents: 'close',
	// })
	// anim.camRotateTo(0, 0, 3, 0.1)
	anim.addCaption('???????????????????????????????????????????????????')
	anim.constructAnimation({
		selectors: '#graph', 
		property: 'graph.width',
		from: 0.1,
		to: 2,
		dur: 4000,
		startEvents: 'showgraph',
	})
	anim.addCaption('?????????????????????')
	anim.constructAnimation({
		selectors: '#xaxis',
		property: 'arrow.length',
		from: 0,
		to: 3,
		dur: 3000,
		startEvents: 'showxaxis',
	})
	anim.addCaption('?????????????????????')
	anim.constructAnimation({
		selectors: '#yaxis', 
		property: 'arrow.length',
		from: 0,
		to: 3,
		dur: 3000,
		startEvents: 'showyaxis',
	})
	anim.addCaption('?????????????????????????????????????????????')
	anim.constructAnimation({
		selectors: '#aball', 
		property: 'radius',
		from: 0,
		to: 0.06,
		dur: 2000,
		startEvents: 'showaball',
	})
	//property:parampos.x;from:1.5;to:1.66;dur:1000
	anim.addCaption('?????????????????????,??????????????????,???????????????,?????????????????????????????????')
	anim.constructAnimation({
		selectors: '#aballcontainer', 
		property: 'parampos.x',
		from: 1,
		to: 2,
		dur: 2000,
		startEvents: 'movehigh',
	})
	// ?????????????????????t1???????????????
	// ?????????????????????t2???????????????,????????????t3???????????????
	// ?????????????????????????????????????????????,??????????????????????????????
	anim.addCaption('???????????????????????????t1???????????????')
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
	anim.addCaption('?????????????????????t2???????????????')
	anim.constructAnimations([{
		selectors: '#aballcontainer', 
		property: 'parampos.x',
		to: Data.t2x,
		dur: 3000,
		startEvents: 'showt2',
		addEventAnimation: false,
	}, {
		selectors: '#t2arrow', 
		property: 'arrow.length',
		from: 0,
		to: 0.5,
		dur: 2000,
		startEvents: 'showt2',
	}])
	anim.addCaption('????????????t3???????????????')
	anim.constructAnimations([{
		selectors: '#aballcontainer', 
		property: 'parampos.x',
		to: Data.t3x,
		dur: 3000,
		startEvents: 'showt3',
		addEventAnimation: false,
	},  {
		selectors: '#t3arrow', 
		property: 'arrow.length',
		from: 0,
		to: 0.5,
		dur: 2000,
		startEvents: 'showt3',
	}])
	anim.addCaption('?????????????????????????????????????????????,??????????????????????????????')
	anim.constructAnimations([{
		selectors: '#aballcontainer', 
		property: 'parampos.x',
		to: Data.t1x,
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

	
	anim.addCaption('??????????????????????????????????????????????????????')
	anim.constructAnimation({
		selectors: '#graph',
		property: 'graph.function',
		to: 'f(u, v) = [u, abs(0.7*v*(1+cos(u/2))), sin(u/4)*5]',
		dur: 500,
		startEvents: 'showfunc',
	})
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
	anim.addCaption('?????????????????????????????????????????????,?????????????????????', undefined, 5000)
	anim.constructAnimation({
		selectors: '#greenbox',
		property: 'width',
		from: 0,
		to: 0.5,
		startEvents: 'showgrennbox',
		delay: 1000,
		dur: 3000,
	})
	anim.addCaption('????????????????????????????????????,???????????????', '-=1000', 5000)
	anim.addCaption('????????????????????????????????????????????????')
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
	anim.addCaption('????????????????????????????????????????????????')
	anim.constructAnimations([{
		selectors: '#luckballs',
		property: 'visible',
		to: true,
		dur: 1000,
		startEvents: 'showluckballs',
	},{
		selectors: '#unluckballs',
		property: 'visible',
		to: true,
		dur: 1000,
		startEvents: 'showluckballs',
	},])
	anim.addCaption('????????????????????????????????????,????????????????????????????????????')
	anim.constructAnimations([{
		selectors: '#redbox',
		property: 'height',
		to: 0.6,
		dur: 2000,
		startEvents: 'showbox',
	},{
		selectors: '#bluebox',
		property: 'height',
		to: 0.6,
		dur: 2000,
		delay: 2000,
		startEvents: 'showbox',
	},])
	anim.addCaption('???????????????????????????????????????????????????????????????', undefined, 3000)
	anim.constructAnimations([{
		selectors: '#luckballs',
		property: 'visible',
		to: false,
		dur: 1000,
		startEvents: 'showluckballs',
	},])
	anim.addCaption('????????????????????????????????????????????????,???????????????????????????')
	anim.constructAnimation({
		selectors: '#unluckballs',
		property: 'randompos.xMax',
		to: 2,
		startEvents: 'retest',
		dur: 2000,
	})
	anim.addCaption('?????????????????????')
	

	


}

const anim = new Animation({speed:1, backgroudMusic: 'sounds/bensound-betterdays.mp3', homeDirName: '02'})


anim.construct(()=>{
    construct()
    return '#graph'
}, animations)

