"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.File = exports.Disposible = void 0;
class Disposible {
    constructor() {
        this.isDisposed = false;
    }
    dispose() {
        this.isDisposed = true;
        this.log('disposed');
    }
    log(message) {
        console.log(message);
    }
}
exports.Disposible = Disposible;
class File extends Disposible {
    write(contents) {
        // ... write to file
    }
}
exports.File = File;
