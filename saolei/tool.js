function bindMouseEvent(el){
    var args = [].slice.call(arguments),
    el = el || document;
    args[0] = function(){},
    args[1] = args[1] || args[0],
    args[2] = args[2] || args[0],
    args[3] = args[3] || args[0],
    el.onmousedown = function(e){
        e = e || window.event;
        var button = e.button;
        if ( !e.which && isFinite(button) ) {
            e.which  = [0,1,3,0,2,0,0,0][button];//0现在代表没有意义
        }
        args[e.which](e);
    }
}
function log(info){

    console.log(String(Date())+": "+info)
}