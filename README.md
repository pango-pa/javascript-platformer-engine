# Canvas Physics Demo

A simple JavaScript project that uses the HTML5 `<canvas>` element to render a basic physics‑driven player box. The player can move left, right, and jump, with gravity, acceleration, and friction applied.

---

## 🚀 Features

- **Canvas Rendering**  
  Draws a bordered play area, a ground platform, and a red player box.

- **Player Movement**
  - Move left and right with arrow keys  
  - Smooth acceleration and deceleration  
  - Jump when on the ground

- **Physics Simulation**
  - Gravity affects vertical movement  
  - Friction slows horizontal movement  
  - Collision detection with ground, walls, and ceiling

- **Game Loop**
  Uses `requestAnimationFrame` to update physics and redraw the scene every frame.

---

## 🎮 Controls

| Key | Action |
|-----|--------|
| ←   | Move left |
| →   | Move right |
| ↑   | Jump (only when on the ground) |

---

## 🧠 How It Works

- The script tracks the player’s `x` and `y` position, along with horizontal and vertical velocity.
- Gravity increases vertical velocity each frame.
- Horizontal input changes `xVelocity`, which is then reduced by friction.
- Collision checks prevent the player from leaving the screen or falling through the ground.
- The `animate()` function updates everything and redraws the scene continuously.

---

## ▶️ Running the Demo

1. Create an HTML file with a `<canvas>` element.
2. Include this JavaScript file.
3. Open the HTML file in your browser.
4. Use the arrow keys to move the red box.

---

## 📁 File Structure Example

