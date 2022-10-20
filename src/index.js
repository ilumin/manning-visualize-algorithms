import "./styles.css";
import p5 from "p5";

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
    // const itemWidth = width/items
    // console.log("data:", data);
    // sketch.background(100);
    // p.fill(255);
    // p.ellipse(p.mouseX, p.mouseY, 50, 50);

    data.forEach((item, index) => {
      const x = index * itemWidth;
      const w = itemWidth;
      const h = -item;
      p.rect(x, y, w, h);
    });
  };
};

new p5(sketch, window.document.getElementById("container"));
