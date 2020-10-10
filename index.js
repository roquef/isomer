import Isomer from './js/isomer.js';
var iso = new Isomer(document.getElementById("canvas"), { scale: 64, angle: 0.45 });

var Shape = Isomer.Shape;
var Point = Isomer.Point;
var Color = Isomer.Color;
var Sprite = Isomer.Sprite;
var red = new Color(160, 60, 50);
var blue = new Color(50, 60, 160);

iso.add(Shape.Prism(Point.ORIGIN, 3, 3, .1));
for(let i = 0; i < 3; i++) {
    for(let n = 0; n < 3; n++) {
        // let caixote = Shape.Pyramid(Point(i, n, 1), { path: './0001.png' });
        // iso.add(caixote);
        iso.add(Sprite(Point(i, n, .1), { path: './0001.png' }));
    }
}
// iso.add(Shape.Pyramid(Point(0, 2, 1)), red);
// iso.add(Shape.Prism(Point(2, 0, 1)), blue);
// iso.add(Shape.Prism(Point.ORIGIN, 3, 3, 1));