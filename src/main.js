import { Application } from '@splinetool/runtime';
import { Spinner } from '/src/spin.js';

const canvas = document.getElementById('canvas3d');
const app = new Application(canvas);
app.load('https://prod.spline.design/YjIX0UWC-akL3G23/scene.splinecode');


let opts = {
    lines: 13,
    length: 28,
    width: 14,
    radius: 42,
    scale: 1,
    corners: 1,
    color: '#2f5e70',
    opacity: 0.25,
    rotate: 0,
    direction: 1,
    speed: 1,
    trail: 60,
    fps: 20,
    zIndex: 2e9,
    className: 'spinner',
    top: '50%',
    left: '50%',
    shadow: false,
    hwaccel: false,
    position: 'absolute',
   };
    var target = document.getElementById('spinner');
    var spinner = new Spinner(opts).spin(target);


    setTimeout(()=>{
            spinner.stop();
    },9000)


