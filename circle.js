class Circle {
  constructor(x, y, r) {
    let options = {
      friction: 0.3,
      restitution: 0.6
    };
    this.body = Bodies.circle(x, y, r, options);
    this.r = r;
    this.color = color(random(255), random(255), random(255));
  }

  isOffScreen() {
    var pos = this.body.position;
    return ( (pos.y > height + 100) || pos.x <0 || pos.x > width);
  }

  show() {
    let pos = this.body.position;
    let angle = this.body.angle;

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    strokeWeight(1);
    stroke(this.color);
    fill(this.color);
    ellipse(0, 0, this.r * 2);
    pop();
  }
}