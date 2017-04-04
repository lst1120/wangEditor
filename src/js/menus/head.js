/*
    menu - header
*/
import $ from '../util/dom-core.js'

// 构造函数
function Head(editor) {
    this.editor = editor
    this.$elem = $('<div class="w-e-menu"><i class="w-e-icon-header"><i/></div>')
    this.type = 'droplist'

    // 当前是否 active 状态
    this.active = false
}

// 原型
Head.prototype = {
    constructor: Head,

    // 试图改变 active 状态
    tryChangeActive: function (e) {

    }
}

export default Head