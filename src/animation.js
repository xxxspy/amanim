
import './style.css'
import {checkElement, checkVariable, checkAnimation, captionDuration} from './utils'


function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}

// window.MathJax.Hub.Config({
//     jax: ["input/TeX", "output/HTML-CSS"],
//     tex2jax: {
//       inlineMath: [ ['$','$'], ["\\(","\\)"] ],
//       displayMath: [ ['$$','$$'], ["\\[","\\]"] ],
//       processEscapes: true
//     },

//   });
//   window.MathJax.Hub.Queue(()=>{
//       window.MathjaxReady = true;
//       console.log('ready...')
//   })
window.MathjaxReady = true;

export const promisifyLoader = ( loader, onProgress ) => {
    const promiseLoader = async url => new Promise( ( resolve, reject ) => {
        loader.load(url, resolve, onProgress, reject);
    });
    return {
        originalLoader: loader,
        load: promiseLoader,
    };
};

function cloneConfig (config) {
    var key;
    var newConfig = {};
    for (key in config) {
        if (typeof config[key] === 'function') {
        newConfig[key] = config[key];
        } else if (typeof config[key] === 'object') {
        newConfig[key] = AFRAME.utils.clone(config[key]);
        } else {
        newConfig[key] = config[key];
        }
    }
    return newConfig;
}

export class Animation {

    constructor({
        backgroudMusic=null,
        speed=1,
        soundDirName='sounds',
        homeDirName='01',
    }){
        this.backgroudMusic = backgroudMusic
        this.speed = speed
        this.soundIndex = -1
        this.soundDirName = soundDirName
        this.homeDirName = homeDirName
    }

    construct(conFunc, animationsFunc){
        return checkElement('#scene').then(()=>{
            this.construct_()
            let selector = conFunc()
            if(!selector){
                throw new Error('conFunc should return a selector!')
            }
            checkElement(selector).then(()=>{
                checkVariable('MathjaxReady').then(()=>{
                    animationsFunc()
                    setTimeout(()=>{
                        let animPros = [];
                        this.animData.forEach(an=>{
                            if(an.type=='caption'){
                                
                            }else if(an.type == 'animation'){
                                animPros.push(checkAnimation(`animation__${an.name}`))
                            }else if((an.type == 'eventAnimation') && (an.name!=undefined)){
                                animPros.push(checkAnimation(`animation__${an.name}`))
                            }else if(an.type=='eventAnimations'){
                                an.events.forEach(en=>{
                                    animPros.push(checkAnimation(`animation__${en.anmName}`))
                                })
                            }
                        })
                        Promise.all(animPros).then(()=>{
                            this.animData.forEach(an=>{
                                if(an.type=='caption'){
                                    this.doAddCaption(an.caption, an.offset, an.duration)
                                }else if(an.type == 'animation'){
                                    this.doAddAnimation(an.name, an.offset)
                                }else if(an.type == 'eventAnimation'){
                                    this.doAddEventAnimation(an.selectors, an.eventName, an.duration)
                                }else if(an.type == 'eventAnimations'){
                                    this.timeline.add({
                                        changeBegin: ()=>{
                                            an.events.forEach(en=>{
                                                $(en.selectors).each((i, e)=>{
                                                    e.emit(en.startEvents)
                                                })
                                            })
                                        },
                                        duration: an.duration || 500,
                                    })
                                }else if(an.type == 'changeBegin'){
                                    this.timeline.add({
                                        changeBegin: an.func,
                                        duration: an.duration || 500,
                                    })
                                }else if(an.type == 'img'){
                                    this.doShowImg(an.url, an.left, an.ltop, an.dur, an.offset)
                                }
                            })
                            this.seekbarContainer.show()
                        })
                        
                        
                    }, 1000)
                })
            })
        })
    }




    construct_() {
        const backgroudMusic = this.backgroudMusic
        const speed = this.speed
        this.isPlaying = false;
        this.hasPlayed = [];
        this.animations = []; // Animations are a dictionary = {name, function, terminate_condition, ...letiables}
        this.start = 0; // the index from which to start playing animations, for optimized animations
        this.delay = 0;
        this.curIndex = 0;
        this.download = false;
        this.speed = speed

        /* This way of animating is not provably optimal but works well with small number
        * of animations. We will think of better ways after this crude implementation works
        * as planned.
        */

        this.createCaption()
        this.scene = $('#scene');
        this.camera = this.createCamera();
        // this.createLights();

        window.addEventListener('resize', () => {
            // TODO
        });

        if(backgroudMusic){
            this.scene.append(`<a-entity id="bgm" sound="src: ${backgroudMusic};volume:0.6;loop:true; autoplay:false;positional:false;"></a-entity>`)


            this.bgmEntity = $('#bgm')
        }

        this.timeline = AFRAME.ANIME.timeline({autoplay: false, complete: ()=>{
            // this.timeline.seek(0)
            this.playButton.attr('class', "bi bi-arrow-repeat")
            this.isPlaying=false;
        }, update: ()=>{
            this.seekbar.val(this.timeline.progress/100)
            if(this.timeline.progress==100){
                // this.timeline.seek(0)
                this.playButton.attr('class', "bi bi-arrow-repeat")
                this.isPlaying=false;
            }
        }})
        this.createSeekBar()
        if(this.animData==undefined){
            this.animData = []
        }

    };

    action(constructFunc, animatesFunc){

        let selector = constructFunc(this);
        if(!selector){
            throw new Error('animatesFunc should return a selector to check existence')
        }
        checkElement(selector).then(()=>{

            // setTimeout(()=>{this.seekbarContainer.show()}, 1000)
        })

    }

    
    createCaption(){
        this.captionDiv = $('<div id="caption" class="caption animate__animated animate__rotateOut"></div>')
        $('body').append(this.captionDiv)
        this.sounds = []
    }

    add(el){
        this.scene.append(el)
    }



    createCamera(){
        // this.scene.append(`
        // <a-entity
        //     id="camera"
        //     camera="fov: 80; zoom: 1;"
        //     position="0 2 3"
        //     orbit-controls="
        //         autoRotate: false;
        //         target: #${this.focusTarget};
        //         enableDamping: true;
        //         dampingFactor: 0.125;
        //         rotateSpeed:0.25;
        //         minDistance:3;
        //         maxDistance:100;
        //         "
        //     mouse-cursor="">
        //     <a-entity geometry="primitive:cone; radius-bottom:1; radius-top:0" scale=".33 1 .33" position="0 0 0" rotation="90 0 0" material="color: #0099ff; transparent: true; opacity:0.5"></a-entity>
        // </a-entity>
        // `)
        return $('#camera')
    };

    addAnimation(name, offset=undefined){
        if(this.animData==undefined){
            this.animData = []
        }
        this.animData.push({
            name, offset, type: 'animation'
        })
        console.log({
            name, offset, type: 'animation'
        })
    };

    addEventAnimation(selectors, eventName, duration=undefined, name=undefined){
        if(duration==undefined){
            duration = this.previousCaptionDuration()
            if(duration==-1){
                duration = 1000
            }
        }
        if(this.animData==undefined){
            this.animData = []
        }
        this.animData.push({
            type: 'eventAnimation',
            eventName,
            selectors,
            duration,
            name,
        })
    };

    doAddEventAnimation(selectors, eventName, duration=1000){
        const animFunc = ()=>{
            $(selectors).each((i, el)=>{
                el.emit(eventName)
            })
        }
        this.timeline.add({
            duration,
            changeBegin: animFunc,
        })
    };


    checkAnimations(){
        this.animData.forEach()
    };


    doAddAnimation(name, offset=undefined){
        name = name.toLowerCase()
        let animationName = 'animation__' + name;
        let els = $( `[${animationName}]`)
        let config;
        let durs = []
        let runAt = this.timeline.duration;
        if(offset){
            if(typeof offset == 'string'){
                eval(`runAt${offset}*${this.speed}`)
            }else{runAt=offset}
        }
        els.each((i, e)=>{
            let component = e.components[animationName]
            if(component==undefined){
                console.error('not find animation:' + animationName)
            }
            component.updateConfig();
            component.stopRelatedAnimations();
            config = cloneConfig(component.config);
            config.target = config.targets; 
            if(this.speed!=1){
                config.duration = config.duration*this.speed
            }
            durs.push(config.duration)
            if(els.length>1){
                this.timeline.add(config, runAt)
            }else{
                this.timeline.add(config, offset)
            }
        })
    };

    onceAnimation(animfunc, initFunc=null, duration=1000){
        let tanim = {
            name: "normal",
            fraction: 0,
            runCount: 0,
            set: null,
            speed: 1/59,
        };
        let setFunc = frac=>{
            if(frac==0){
                if(initFunc){
                    initFunc(tanim)
                    tanim.runCount = 0
                }
            }else if(frac>0){
                tanim.runCount += 1
                if(tanim.runCount==1){
                    animfunc(tanim)
                }
            }
        }
        tanim.set = setFunc;
        tanim.speed = tanim.speed / duration * 1000
        this.animations.push(tanim)
        this.hasPlayed.push(false)

    }

    addCaption(caption, offset=undefined, duration=500){
        if(this.animData==undefined){
            this.animData = []
        }
        this.animData.push({
            type: 'caption',
            caption,
            offset,
            duration,
        })
        console.log({
            type: 'caption',
            caption,
            offset,
            duration,
        })

    };

    previousCaptionDuration(){
        let preCap = undefined
        for(let i=this.animData.length-1;i>=0;i--){
            if(preCap==undefined){
                let an = this.animData[i];
                if(an.type=='caption'){
                    preCap = an
                }
            }
        }
        if(preCap==undefined){
            return -1
        }
        return captionDuration(preCap.caption)
    };

    doAddCaption(caption, offset=undefined, duration=200){
        let sound = undefined;
        let soundID = undefined;
        let src = `${this.homeDirName}/${this.soundDirName}/${caption}.mp3`
        let audioAss = $(`[src="${src}"]`)
        if(audioAss.length>0){
            this.soundIndex += 1
            let id = `s-${this.soundIndex}`
            soundID = `s${id}`
            audioAss.attr('id', id)
            $('#scene').append(`<a-entity id="${soundID}" sound="src: #${id};poolSize:3;positional:false;"></a-entity>`)
        }else{
            console.error('找不到:'+`[src="${src}"]`)
        }
        this.timeline.add({
            duration: duration,
            changeBegin:anim=>{
                this.captionDiv.text(caption)
                console.log('show caption.....:' + caption)
                this.captionDiv.removeClass('animate__rotateOut')
                this.captionDiv.addClass('animate__flipInX')
                if(soundID!=undefined){
                    sound = $('#'+soundID)[0].components.sound;
                }
                if(sound!=undefined){
                    $('#'+soundID)[0].addEventListener('sound-ended', ()=>{
                        this.captionDiv.removeClass('animate__flipInX')
                    })
                    sound.playSound()
                    console.warn('playing:'+soundID)
                }else{
                    setTimeout(()=>{
                        this.captionDiv.removeClass('animate__flipInX')
                    }, captionDuration(caption))
                }
            }
        }, offset)
    }

    seek = value => {
       this.timeline.seek(value)
    };
    pause = () => {
        if(!this.isPlaying)
            return;
        this.isPlaying = false;
        this.playButton.attr('class', "bi bi-play-fill");
        if(this.backgroudMusic)this.bgmPause()
        this.timeline.pause()
    };
    bgmPause(){
        this.bgmEntity[0].components.sound.pauseSound()
    };
    bgmStop(){
        this.bgmEntity[0].components.sound.stopSound()

    };
    bgmPlay(){
        this.bgmEntity[0].components.sound.playSound()

    };
    sanitizeTime = value => {
        let minutes = Math.floor(value / 60);
        let seconds = value % 60;
        let smin = minutes > 9 ? minutes.toString(10) : "0" + minutes.toString(10);
        let ssec = seconds > 9 ? seconds.toString(10) : "0" + seconds.toString(10);
        return smin + ":" + ssec;
    };

    createSeekBar(){
        this.seekbarContainer = $('<div class="animation-bottom"></div>')
        $('body').append(this.seekbarContainer);
        this.seekbar = $('<input type="range" min="0" max="1" value="0" step="0.0001" class="seekbar">')
        this.seekbarContainer.append(this.seekbar);
        this.seekbar.on('input', e => {
            this.timeline.seek(parseFloat(e.target.value)*this.timeline.duration);
            this.seekbar.attr('value', e.target.value)
            this.seekbar.val(e.target.value)
            console.log('event:' + e.target.vale)
            console.log(e.target)
        })
        console.log('play button.....')
        this.playButton = $('<i class="bi bi-play-fill" style="position:relative;color:white;margin:0 10px;cursor:pointer;"></i>')
        this.playButton.on('click', ()=>{
            if (this.isPlaying)
                this.pause();
            else if( this.playButton.attr('class').indexOf('bi-arrow-repeat')>=0){
                this.timeline.seek(0)
                this.play(false)
            }else{
                this.play(false);
            }
        })

        this.seekbarContainer.append(this.playButton);
        this.timeContainer = $(`<span class="time-container">00:00 / ${this.sanitizeTime(this.timeline.duration)}</span>`)
        this.seekbarContainer.append(this.timeContainer);

        let fullscreen = $('<i class="bi bi-fullscreen fullscreen"></i>');
        this.fullscreen = false;
        fullscreen.on("click", () => {
            if (this.fullscreen) {
                if (document.exitFullscreen)
                    document.exitFullscreen();
                else if (document.webkitExitFullscreen)
                    document.webkitExitFullscreen();
                else if (document.mozCancelFullScreen)
                    document.mozCancelFullScreen();
                else if (document.msExitFullscreen)
                    document.msExitFullscreen();
                else
                    alert("Exit fullscreen doesn't work");
                this.fullscreen = false;
                fullscreen.attr('class', "fas fa-expand");
            } else {
                let container = this.container[0]
                if (container.RequestFullScreen)
                    container.RequestFullScreen();
                else if (container.webkitRequestFullScreen)
                    container.webkitRequestFullScreen();
                else if (container.mozRequestFullScreen)
                    container.mozRequestFullScreen();
                else if (container.msRequestFullscreen)
                    container.msRequestFullscreen();
                else
                    alert("This browser doesn't supporter fullscreen");
                this.fullscreen = true;
                fullscreen.attr('class', "fas fa-compress")
            }
        });
        this.seekbarContainer.append(fullscreen);
        this.seekbarContainer.hide()
    }

    play = (initial = true) => {
        if (this.isPlaying)
            return;
        this.playButton.attr('class', "bi bi-pause-fill");
        this.isPlaying = true;
        if(this.timeline.duration==0){}
        this.timeline.play()
        if(this.backgroudMusic)this.bgmPlay();
    };
    stop = () => {
        this.timeline.pause()
        if(this.backgroudMusic)this.bgmStop();
    };

    constructEnding(){
        $('head').append(`
            <style>
            @font-face {
                font-family: "biliiconfont";
                src        : url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAPkAAsAAAAAB9QAAAOYAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDHAqDFIJ8ATYCJAMQCwoABCAFhG0HRBvqBsgekkRJFFSCBAooiYgRgudff+p9kmwr3yHgMSkjTYA89nREgHn9yxTglAI6soDy/zn/5XLlWk/2NHmz907dmsDU4j7PNXUpnt/O5lRJ0VRNjUd7AxxF64C6sdIGvAnjhrErL2I7BHCIJxepUau0FnhiMPoJIAP6sl3AM6XF1MQKFsFdMtUgS3Bh1Vx1Bljs/15eUywWFC6NMbRJL2UvkDzj2Sw95f8UOrgUxOOZATYLNJALGJA+pdZuuISBXDSO0tqVcsBiUTBWXcyzsf//kWQvKmv+5YFC0CBujGhfAEpRUMMzbAIKnsUQEHg2KwoN8EJ6W8ADTASwHzFjTywYVFq0BDv5x1qnwutr94/uXBvTUL+4dt2ujIaGtV3zd0TV1R3sWLM6tLZuxTnr/LBzfy308HbozU2oWnPS67ftuly/Hrr2JFTE39m8PKxpZUuEz7ZV4S4rt2abjr9ypfbq1brr1xumXjNe2dZq6Vor5a2XXmnRwrth6fXW4i1+OCy72rLlb3bA8/Pshd6enOPL2Oz7+yvOzNi4Lfknudf5kMdpnzu9z3uSFHRsf9rZzSuz3uMePP1T1PTxXdFX05izS9PWmbxyy8YbyX/Cey4kl7qLX6J3BfMrimDs4qrLJe45bEXgcAwHPqJ+BQIJn+F+l5cvXbB8HxVAYfzmfS0qFumIxYqqWI92qamdaiJa5a3VKCuykUd1kUf3yOqRgf68UZ6cN8KrGeal9fQwwwGA/+kTOttn04d13dB6rU76g91o8bXedAQI/jy9l5Bze2LLQ2T/z9Be/BvEivh/iVumGVVq6IyRZbZIsxnyE/1QgIMD/KUIBHNvDE1Y62gQLGExFB7ioLGkUg0zFy68lMKNpRIOOdSe7SWEYbggxgfIZiaAEMg+KPw5Dk0gZ6mGeRcuwnkLN4Gi4dBKQpb0ki59Hfkw1EVRL+wehMYebGMsA/UOYqsR67B0kaTUZ9UjYje6YU5+YTasRjZExhhh72NzKWUgQ7AVqsBuyGLBkCPYhHpopoFSjpdV0KvsSpk92Aq8qQ4B0QUF0QukG4NA+tIDxgbjZqd4575fDYLFgYUuSA2pwl8PgmDH2DikiHwKW1DVKlsr0rXsM5w+WHIZAYUB0gsCxgqkFjAjLGYAAxlS3skEogdKJn16+Dh4FKBMvdqqMufXWJ9wCeBgLGlEiRYjLuzwPtjR02VjPXr7uvIhK8WNDnZ0GwEA') format('woff2');
            }
            #biliend {
                width: 100%;
                height: 100%;
                position: absolute;
                padding-left: 20%;
                padding-top: 20%;
                left: 0;
                top: 0;
                background-color: #1c4652de;
            }
              
              .biliicon , .bicons{
                font-family            : "biliiconfont" !important;
                font-size              : 84px;
                font-style             : normal;
                -webkit-font-smoothing : antialiased;
                -moz-osx-font-smoothing: grayscale;
                display: table-cell;
                padding: 40px;
              }

            .icon-dianzan, .icon-shoucang, .icon-toubi{
              margin: 6%;
            }
              /* 分别是点赞、投币、收藏 */
              .icon-shoucang:before {
                content: "\\e61b";
              }
              
              .icon-dianzan:before {
                content: "\\e600";
              }
              
              .icon-toubi:before {
                content: "\\e686";
              }
            
            </style>
        `)
        $('body').append(`
            <div id="biliend" class="animate__animated animate__bounceOutUp">
                <div id="contact">
                    
                DataSense统计咨询
                <br>
                @mlln-cn
                <br>
                www.mlln.cn
                </div>
                <div class="bicons animate__animated">
                <i class="biliicon icon-dianzan"></i>
                </div>
                <div class="bicons animate__animated">
                <i class="biliicon icon-toubi"></i>
                </div>
                <div class="bicons animate__animated">
                <i class="biliicon icon-shoucang"></i>
                </div>

            </div>

        `)
    };

    showEnding(){
        this.timeline.add({
            changeBegin: anim=>{
                $('#biliend').removeClass('animate__bounceOutUp')
                $('#biliend').addClass('animate__bounceInDown')
            },
            changeComplete: anim=>{
                $('#biliend').removeClass('animate__bounceInDown')
            },
            duration: 2000,
        });
        $('.bicons').each((i, e)=>{
            this.timeline.add({
                changeBegin: anim=>{
                    $(e).addClass('animate__animated animate__flipInX')
                },
                changeComplete: anim=>{
                    $(e).removeClass('animate__animated animate__flipInX')
                },
                duration: 500,
            })
        })
        this.timeline.add({
            changeComplete: anim=>{
                $('#biliend').addClass('animate__bounceOutUp')
            },
            duration: 3000,
        })
    };

    showImg(url, left='50%', top='50%', dur=1000, offset=undefined){
        this.animData.push({
            type: 'img',
            url,
            left,
            top,
            dur,
            offset,
        })
    }

    doShowImg(url, left='50%', top='50%', dur=1000, offset=undefined){
        let img = $(`
        <img class="animate__animated" src="${url}" style="position:absolute;left:${left};top:${top};display:none">
    `)
        $('body').append(img)
        this.timeline.add({
            changeBegin: ()=>{
                img.show()
                img.addClass('animate__animated animate__flipInX')
            },
            // changeComplete: ()=>{
            //     img.removeClass('animate__flipInX')
            //     img.addClass('animate__flipOutX')
            // },
            duration: dur,
        }, offset)
    };

    hideImg(url, dur=1000, offset=undefined){
        let img = $(`img[src="${url}"]`)
        this.timeline.add({
            changeBegin: ()=>{
                img.removeClass('animate__flipInX')
                img.addClass('animate__flipOutX')
            },
            duration: dur,
        }, offset)
    }

    get controls(){
        return $('#camera')[0].components['orbit-controls']
    }

    setCamera(property, value, duration=200){
        this.animData.push({
            type: 'changeBegin',
            func: ()=>{
                let el = $('#camera')[0]
                el.setAttribute('orbit-controls', property, value);
            },
            duration: duration,
        })
    }

    camRotateTo(x, y, z, speed=undefined){
        console.log('push data: rotate to')
        this.animData.push({
            type: 'changeBegin',
            func: ()=>{
                console.log('camera rotating to:' + `${x} ${y} ${z}`)
                let el = $('#camera')[0]
                if(speed!=undefined){
                    el.setAttribute('orbit-controls', 'rotateToSpeed',  speed);
                }
                el.setAttribute('orbit-controls', 'rotateTo', `${x} ${y} ${z}`);
            },
            duration: 200,
        })
    }

    camAutoRotate(auto, duration=undefined, speed=undefined){
        this.animData.push({
            type: 'changeBegin',
            func: ()=>{
                let el = $('#camera')[0]
                if(speed!=undefined){
                    el.setAttribute('orbit-controls', 'autoRotateSpeed', speed);
                }
                el.setAttribute('orbit-controls', 'autoRotate', auto);
            },
            duration: duration||200,
        })
    }

    camAutoRotateSpeed(speed){
        this.animData.push({
            type: 'changeBegin',
            func: ()=>{
                let el = $('#camera')[0]
                el.setAttribute('orbit-controls', 'autoRotateSpeed', speed);
            },
            duration: 200,
        })
    }

    constructAnimations(anims){
        let events = []
        let duration = -1;
        anims.forEach(an=>{
            an.addEventAnimation = false;
            let anmName = this.constructAnimation(an)
            events.push({
                selectors: an.selectors,
                startEvents: an.startEvents,
                anmName: anmName,
            })
            if(an.dur > duration)duration=an.dur;
        })
        this.animData.push({
            type: 'eventAnimations',
            events,
            duration,
        })
    }

    // constructAnimation(selectors, animData, anmName=undefined, duration=undefined, addEventAnimation=true){
    constructAnimation(animData){
        // animData keys:
        // selectors: css選擇
        // dur: animation的持續時間
        // duration: timeline處罰event后的持續時間
        // anmName: 动画名称,用于构建'animation__anmName'
        // startEvents: 触发动画的事件
        // addEventAnimation: default true; 是否添加动画到timeline
        const selectors = animData.selectors;
        const duration = animData.duration || animData.dur;
        const anmName = animData.anmName || animData.startEvents + makeid(4);
        if(animData.autoplay == undefined){
            animData.autoplay = false
        }
        function data2string(){
            
            const keys = ['to', 'property', 'startEvents', ]
            let animation = '';
            keys.forEach(k=>{
                if(animData[k]==undefined){
                    console.log(animData)
                    throw new Error(`${anmName} 缺少必须的数据:${k}`)
                }
                animation += `${k}:${animData[k]};`
            })
            let alters = ['from', 'type', 'delay', 'dur', 'easing', 'elasticity', 'loop', 'enabled', 'autoplay']
            alters.forEach(al=>{
                if(animData[al]!=undefined){
                    animation += `${al}:${animData[al]};`
                }
            })
            console.log({animation})
            return animation
        }



        $(selectors).attr(
            `animation__${anmName}`,
            data2string(),
        )
        console.log('constructAnimation.........:' + animData.startEvents)
        if(animData.addEventAnimation != false){
            this.addEventAnimation(selectors, animData.startEvents, duration, anmName)
        }
        
        return anmName
    }

    camPosition(x, y, z, dur, name, eventName=undefined){
        if(eventName==undefined){
            eventName = name;
        }
        let animName = `property:position;to:${x} ${y} ${z};dur:${dur};autoplay:false;startEvents:${eventName||name}`
        $('#camera').attr('animation__${name}')
        this.constructAnimation('#camera', 'faraway100', 'property:position.z;')
    }


}
