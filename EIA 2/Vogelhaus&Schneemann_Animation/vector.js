"use strict";
var L09_Canvas_Birdhouse;
(function (L09_Canvas_Birdhouse) {
    class Vector {
        constructor(_x, _y) {
            this.set(_x, _y);
        }
        set(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        scale(_factor) {
            this.x *= _factor;
            this.y *= _factor;
        }
        add(_addend) {
            this.x += _addend.x;
            this.y += _addend.y;
        }
        // Geschwindigkeit zufällig berechnen & Richtung festlegen
        random(_minLength, _maxLength) {
            let length = _minLength = Math.random() * (_maxLength - _minLength);
            // this.set(0, 10);
            this.scale(length);
        }
    }
    L09_Canvas_Birdhouse.Vector = Vector;
})(L09_Canvas_Birdhouse || (L09_Canvas_Birdhouse = {}));
//# sourceMappingURL=vector.js.map