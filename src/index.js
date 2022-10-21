import p5 from "p5";
import "./styles.css";

const items = 200;
const y = window.innerHeight / 2;
const data = [...Array(items)].map((_) => ~~(Math.random() * y));

class Bar {
  constructor(process, { x, y, w, h }) {
    this.process = process;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }

  display() {
    this.process.rect(this.x, this.y, this.w, this.h);
  }

  update({ x, h }) {
    this.x = x;
    this.h = h;
  }
}

class BarGraph {
  constructor(process, { data, width, height, invert = true }) {
    this.process = process;
    this.data = data;
    this.width = width;
    this.height = height;
    this.invert = invert ? 1 : -1;
    this.itemWidth = this.width / data.length;
    this.bar = [];
  }

  display() {
    this.data.forEach((item, index) => {
      const x = index * this.itemWidth;
      const y = this.height / 2;
      const w = this.itemWidth;
      const h = this.invert * item;

      this.bar[index] = new Bar(this.process, { x, y, w, h });
      this.bar[index].display();
    });
  }
}

let unsortedGraph;
let sortedGraph;
let sketch = function (p) {
  p.setup = function () {
    p.createCanvas(window.innerWidth, window.innerHeight);
    p.background(0);

    unsortedGraph = new BarGraph(p, {
      data,
      width: window.innerWidth,
      height: window.innerHeight,
    });

    sortedGraph = new BarGraph(p, {
      data,
      width: window.innerWidth,
      height: window.innerHeight,
      invert: false,
    });
  };

  p.draw = () => {
    unsortedGraph.display();
    sortedGraph.display();
  };
};

new p5(sketch, window.document.getElementById("container"));
