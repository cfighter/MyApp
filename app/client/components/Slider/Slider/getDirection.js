
//获取角度
const getSlideAngle = function(dx, dy) {
    return Math.atan2(dy, dx) * 180 / Math.PI;
};
//根据起点和终点返回方向 
//1：向上，2：向下，3：向左，4：向右,0：未滑动
const getDirection = function(startX, startY, endX, endY) {
    var dy = startY - endY;
    var dx = endX - startX;
    var result = 0;
    //如果滑动距离太短
    if (Math.abs(dx) < 5 && Math.abs(dy) < 5) {
        return result;
    }
    var angle = getSlideAngle(dx, dy);
    if (angle >= -45 && angle < 45) {
        result = 4;
    } else if (angle >= 45 && angle < 135) {
        result = 1;
    } else if (angle >= -135 && angle < -45) {
        result = 2;
    } else if ((angle >= 135 && angle <= 180) || (angle >= -180 && angle < -135)) {
        result = 3;
    }
    return result;
};
export default getDirection;
