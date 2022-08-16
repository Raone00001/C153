//Terrain Rotation
AFRAME.registerComponent("terrain-rotation-reader", {
  schema: {
    speedOfRotation: { type: "number", default: 0 }    
  },
  init: function () {
    window.addEventListener("keydown", (e) => {
      if (e.key === "ArrowRight") {
        if (this.data.speedOfRotation < 0.1) {
          this.data.speedOfRotation += 0.01;
        }
      }
      if (e.key === "ArrowLeft") {
        if (this.data.speedOfRotation > -0.1) {
          this.data.speedOfRotation -= 0.01;
        }
      }
    });
  },
  tick: function () {
    var mapRotation = this.el.getAttribute("rotation");

    mapRotation.y += this.data.speedOfRotation;

    this.el.setAttribute("rotation", {
      x: mapRotation.x,
      y: mapRotation.y,
      z: mapRotation.z
    });
  }
});

AFRAME.registerComponent("plane-rotation-reader",{
  schema: {
    speedOfRotation: { type: "number", default: 0 },
    speedOfAscend: {type: "number", default: 0}   
  },
  init: function () {
    window.addEventListener("keydown", (e) => {
      this.data.speedOfRotation = this.el.getAttribute("rotation")
      this.data.speedOfAscend = this.el.getAttribute("position")

      var plane_rotation = this.data.speedOfRotation
      var plane_position = this.data.speedOfAscend

      if (e.key === "ArrowRight"){
        if (plane_rotation.x < 10) {
          plane_rotation.x += 0.5
          this.el.setAttribute("rotation", plane_rotation)
        };
      }

      if (e.key === "ArrowLeft"){
        if (plane_rotation.x > -10) {
          plane_rotation.x -= 0.5
          this.el.setAttribute("rotation", plane_rotation)
        };
      }

      if (e.key === "ArrowUp"){
        //This is for z rotation
        if (plane_rotation.z < 20) {
          plane_rotation.z += 0.5
          this.el.setAttribute("rotation", plane_rotation)
        };

        //This is for y position
        if (plane_position.y < 2) {
          plane_position.y += 0.01
          this.el.setAttribute("position", plane_position)
        };
      }

      if (e.key === "ArrowDown"){
        //This is for z rotation
        if (plane_rotation.z > -10) {
          plane_rotation.z -= 0.5
          this.el.setAttribute("rotation", plane_rotation)
        };

        //This is for y position
        if (plane_position.y > -2) {
          plane_position.y -= 0.01
          this.el.setAttribute("position", plane_position)
        };
      }

    })
  }
})


