function eleFixed() {
    var targets=[];
    //判断输入是否为html元素
    function _isElement(value) {
        return (
            typeof HTMLElement === 'object' ? value instanceof HTMLElement :
            value && typeof value === "object" && value !== null && value.nodeType === 1 && typeof value.nodeName==="string"
        )
    }
    //元素冻结位置处理函数
    function _handler(){
        for(var i in targets){
            var offsetTop =targets[i].scroll.scrollTop;
            if(offsetTop > targets[i].offsetTop){
                targets[i].target.style.transform = 'translateY('+ (offsetTop - targets[i].offsetTop) +'px)';
            }else{
                targets[i].target.style.transform = 'translateY(0px)';
            }
        }
    }
    //获取私有变量或者访问私有方法
    this.GetTargets=function() {
        return targets;
    }
    this.pushTargets=function(newTarget) {
        targets.push(newTarget);
    }
    this.Call_isElement=function(value){
        return _isElement(value);
    }
    this.handler=function() {
        _handler();
    }
}
    //绑定元素
    eleFixed.prototype.bind =  function (option) {
        var _isElement=this.Call_isElement;
        if(typeof option !== 'object') return console.error('eleFixed: push param must be a Object');
        if(!option.target && !_isElement(option.target)) return console.error('eleFixed: target must be a HTMLElement');
        if(!option.offsetTop && typeof option.offsetTop !== 'number') return console.error('eleFixed: param\'s offsetTop must be a Number');
        if(!option.scroll && !_isElement(option.scroll)) return console.error('eleFixed: scroll must be a HTMLElement');  
        /*window.eleFixed.this.pushTargets(option)*/
        //if(!scrollTarget && !_isElement(scrollTarget)) return console.error('eleFixed: scrollTarget must be a HTMLElement') 
        this.pushTargets(option);
        option.scroll.addEventListener('scroll', this.handler);
    }

    //解除绑定
    eleFixed.prototype.unbind = function (target) {
        var _isElement=this.Call_isElement;
        if(target && _isElement(target)){
            var targets = this.GetTargets();
            for(var i in targets){
                if(target.isEqualNode(targets[i].target)){
                    target.style.transform = 'translateY(0px)'
                    try{
                        targets[i].scroll.removeEventListener('scroll',this.handler);
                    }
                    catch(e)
                    {
                        return console.error(e);
                    }
                    targets.splice(i, 1);
                    break
                }
            }
        }
        else{
            return console.error('eleFixed: target must be a HTMLElement');
        }
    }
