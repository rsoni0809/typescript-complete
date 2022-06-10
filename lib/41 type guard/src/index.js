"use strict";
function isSquare(shape) {
    return 'size' in shape;
}
function isRectangle(shape) {
    return 'width' in shape;
}
function area(shape) {
    if (isSquare(shape)) {
        return shape.size * shape.size;
    }
    if (isRectangle(shape)) {
        return shape.width * shape.height;
    }
    const _ensure = shape;
    return _ensure;
}
