/*
 * Author: Alex Gibson
 * https://github.com/alexgibson/shake.js
 * License: MIT license
 */
if (typeof window.DeviceMotionEvent != 'undefined') {
    // Shake sensitivity (a lower number is more)
    var sensitivity = 20;

    // Position variables
    var x1 = 0, y1 = 0, z1 = 0, x2 = 0, y2 = 0, z2 = 0;

    // Listen to motion events and update the position
    window.addEventListener('devicemotion', function (e) {
        x1 = e.accelerationIncludingGravity.x;
        y1 = e.accelerationIncludingGravity.y;
        z1 = e.accelerationIncludingGravity.z;
    }, false);

    // Periodically check the position and fire
    // if the change is greater than the sensitivity
    setInterval(function () {
        var change = Math.abs(x1-x2+y1-y2+z1-z2);

        if (change > sensitivity) {
         jQuery(document).ready(function () {
    window.Lightbox = new jQuery().visualLightbox({
        autoPlay: true
        , borderSize: 7
        , classNames: 'vlightbox1'
        , closeLocation: 'top'
        , descSliding: true
        , enableRightClick: false
        , enableSlideshow: true
        , prefix: 'vlb1'
        , resizeSpeed: 7
        , slideTime: 4
        , startZoom: true
    })
});
        }

        // Update new position
        x2 = x1;
        y2 = y1;
        z2 = z1;
    }, 150);
}
//(function(global, factory) {
//    if (typeof define === 'function' && define.amd) {
//        define(function() {
//            return factory(global, global.document);
//        });
//    } else if (typeof module !== 'undefined' && module.exports) {
//        module.exports = factory(global, global.document);
//    } else {
//        global.Shake = factory(global, global.document);
//    }
//} (typeof window !== 'undefined' ? window : this, function (window, document) {
//
//    'use strict';
//
//    function Shake(options) {
//        //feature detect
//        this.hasDeviceMotion = 'ondevicemotion' in window;
//
//        this.options = {
//            threshold: 15, //default velocity threshold for shake to register
//            timeout: 1000 //default interval between events
//        };
//
//        if (typeof options === 'object') {
//            for (var i in options) {
//                if (options.hasOwnProperty(i)) {
//                    this.options[i] = options[i];
//                }
//            }
//        }
//
//        //use date to prevent multiple shakes firing
//        this.lastTime = new Date();
//
//        //accelerometer values
//        this.lastX = null;
//        this.lastY = null;
//        this.lastZ = null;
//
//        //create custom event
//        if (typeof document.CustomEvent === 'function') {
//            this.event = new document.CustomEvent('shake', {
//                bubbles: true,
//                cancelable: true
//            });
//        } else if (typeof document.createEvent === 'function') {
//            this.event = document.createEvent('Event');
//            this.event.initEvent('shake', true, true);
//        } else {
//            return false;
//        }
//    }
//
//    //reset timer values
//    Shake.prototype.reset = function () {
//        this.lastTime = new Date();
//        this.lastX = null;
//        this.lastY = null;
//        this.lastZ = null;
//    };
//
//    //start listening for devicemotion
//    Shake.prototype.start = function () {
//        this.reset();
//        if (this.hasDeviceMotion) {
//            window.addEventListener('devicemotion', this, false);
//        }
//    };
//
//    //stop listening for devicemotion
//    Shake.prototype.stop = function () {
//        if (this.hasDeviceMotion) {
//            window.removeEventListener('devicemotion', this, false);
//        }
//        this.reset();
//    };
//
//    //calculates if shake did occur
//    Shake.prototype.devicemotion = function (e) {
//        var current = e.accelerationIncludingGravity;
//        var currentTime;
//        var timeDifference;
//        var deltaX = 0;
//        var deltaY = 0;
//        var deltaZ = 0;
//
//        if ((this.lastX === null) && (this.lastY === null) && (this.lastZ === null)) {
//            this.lastX = current.x;
//            this.lastY = current.y;
//            this.lastZ = current.z;
//            return;
//        }
//
//        deltaX = Math.abs(this.lastX - current.x);
//        deltaY = Math.abs(this.lastY - current.y);
//        deltaZ = Math.abs(this.lastZ - current.z);
//
//        if (((deltaX > this.options.threshold) && (deltaY > this.options.threshold)) || ((deltaX > this.options.threshold) && (deltaZ > this.options.threshold)) || ((deltaY > this.options.threshold) && (deltaZ > this.options.threshold))) {
//            //calculate time in milliseconds since last shake registered
//            currentTime = new Date();
//            timeDifference = currentTime.getTime() - this.lastTime.getTime();
//
//            if (timeDifference > this.options.timeout) {
//                window.dispatchEvent(this.event);
//                this.lastTime = new Date();
//            }
//        }
//
//        this.lastX = current.x;
//        this.lastY = current.y;
//        this.lastZ = current.z;
//
//    };
//
//    //event handler
//    Shake.prototype.handleEvent = function (e) {
//        if (typeof (this[e.type]) === 'function') {
//            return this[e.type](e);
//        }
//    };
//
//    return Shake;
//}));
