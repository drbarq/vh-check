'use strict'

var vhCheck = require('../dist/vh-check.js')
var test = vhCheck()
var message = (!test.isNeeded ? 'not ' : '') + 'needed.<br/>Gap is: '
message = message + test.value + 'px'
const domCheckWrapper = document.querySelector('.js-check')
domCheckWrapper.innerHTML = message
