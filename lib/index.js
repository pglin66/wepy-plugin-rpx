function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
var _class = function () {
    function _class() {
        var c = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        _classCallCheck(this, _class);
        var def = {
            filter:new RegExp('\.(wxss|wxml|json)$'),
        };
        this.setting = Object.assign({}, def, c);
    }
    _class.prototype.apply = function apply(op) {
        var setting = this.setting;
        if(setting.filter.test(op.file)){
          op.code=op.code.replace(/\b(\d+(\.\d+)?)px\b/ig, "$1rpx")//替换rpx
        }
        op.next();
    };
    return _class;
}();
exports.default = _class;
