import p5 from "p5";
import "./styles.css";

const items = 200;
const y = window.innerHeight;
const data = [...Array(items)].map((_) => ~~(Math.random() * y));
const itemWidth = window.innerWidth / items;

let sketch = function (p) {
  p.setup = function () {
    p.createCanvas(window.innerWidth, window.innerHeight);
    p.background(0);
  };
  p.draw = () => {
    data.forEach((item, index) => {
      const x = index * itemWidth;
      const w = itemWidth;
      const h = -item;
      p.rect(x, y, w, h);
    });
  };
};

new p5(sketch, window.document.getElementById("container"));
