'use strict'

class Stopwatch {
  constructor(elemDom) {
    this.elemDom = elemDom;
    this.timeId = null;
    this.isActive = false;
    this.startTime = 0;
    this.pauseTime = 0;
    this.lapTime = 0;
    this.deltaTime = 0;
    this.min = 0;
    this.sec = 0;
    this.msec = 0;
    this.createTimer();
  }
  createTimer () {
    // create wrapper timer
    this.wrapper=document.createElement('div')
    // create timer
    this.timer = document.createElement('div')
    this.timer.classList.add('stopwatch')
    // create time tablo
    this.tablo = document.createElement('p')
    this.tablo.classList.add('time', 'js-time')
    this.tablo.textContent='00.00.0'
    // create button Start
    this.btnStart = document.createElement('button');
    this.btnStart.classList.add('btn','js-start');
    this.btnStart.textContent='Start'
    // create button Lap
    this.btnLap=document.createElement('button');
    this.btnLap.classList.add('btn','js-lap');
    this.btnLap.textContent='Lap'
    // create button Reset
    this.btnReset=document.createElement('button');
    this.btnReset.classList.add('btn','js-reset');
    this.btnReset.textContent='Reset'
    // create list result
    this.listLaps = document.createElement('ul');
    this.listLaps.classList.add('laps','js-laps');


    this.timer.append(this.tablo, this.btnStart, this.btnLap, this.btnReset)
    this.wrapper.append(this.timer, this.listLaps);
    this.elemDom.append(this.wrapper)

    this.btnStart.addEventListener('click', this.start.bind(this));
    this.btnLap.addEventListener('click', this.saveResult.bind(this));
    this.btnReset.addEventListener('click', this.reset.bind(this));

  }
  start () {
    let target = event.target;
    if (!this.isActive) {
      if (this.pauseTime !== 0) {
        this.startTime = Date.now() - this.deltaTime;;
      }else{
        this.startTime=Date.now();
      }
      target.classList.add('active')
      this.isActive = true;
      this.timeId=setInterval(this.goTime.bind(this),100,this.startTime)
      target.textContent='Pause';
      target.addEventListener('click',this.pause.bind(this))
    }
  }
  pause(event){
    let target= event.target
    if(this.isActive){
      this.isActive=false;
      target.textContent='Continue';
      target.classList.remove('active')
      this.pauseTime = +new Date
      clearInterval(this.timeId)
      this.deltaTime = this.pauseTime-this.startTime
      target.addEventListener('click',this.start.bind(this))
    }
  }

  reset(event){
      
      clearInterval(this.timeId);
      this.btnStart.textContent='Start';
      this.btnStart.classList.remove('active');
      this.tablo.textContent='00.00.0';
      this.isActive= false;
      this.timeId = null;
      this.startTime = 0;
      this.pauseTime = 0;
      this.lapTime = 0;
      this.deltaTime = 0;
      this.min = 0;
      this.sec = 0;
      this.msec = 0;
      this.btnStart.addEventListener('click', this.start.bind(this));
      let lapTr = [...document.querySelectorAll('li')];
      lapTr.forEach(num => num.remove());

  }
  saveResult(){
    let resultTime = document.createElement('li');
    resultTime.textContent = this.tablo.textContent;
    this.listLaps.append(resultTime)
    this.btnLap.classList.add('active-lap')
    setTimeout(()=>this.btnLap.classList.remove('active-lap'),500)
  }


  goTime(nSec){
    let time = new Date () - nSec;
    this.msec=Math.floor((time/100)%10);
    this.sec=Math.floor((time/1000)%60);
    if(this.sec<9){
      this.sec='0'+this.sec
    }
    this.min=Math.floor((time/1000/60)%60)
    if(this.min<9){
      this.min='0'+this.min
    }
    this.tablo.textContent=`${this.min}.${this.sec}.${this.msec}`
  }


}

const parentA = document.body

new Stopwatch(parentA);
