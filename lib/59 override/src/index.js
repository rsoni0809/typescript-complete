"use strict";
class Visibility {
    constructor() {
        this.visible = true;
    }
    setVisible(visible) {
        this.visible = visible;
    }
}
class MockVisibility extends Visibility {
    setVisible(visible) {
        console.log(visible ? 'Shown' : 'Hidden');
    }
}
// app code
const real = new Visibility();
real.setVisible(true);
real.setVisible(false);
// test code
const mock = new MockVisibility();
mock.setVisible(true);
mock.setVisible(false);
