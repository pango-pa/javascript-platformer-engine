const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 1374
canvas.height = 742

// player position
let x = 10
let y = 100

// vertical physics
let velocity = 0
let acceleration = 0.5
let onGround = false

// horizontal physics
let xVelocity = 0
const moveSpeed = 0.9     // how fast you accelerate
const friction = 0.85     // how fast you slow down

// sizes
const groundHeight = 50
const boxWidth = 100
const boxHeight = 100

// movement keys
const keys = {
    left: false,
    right: false
}

// INPUT
window.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') keys.left = true
    if (event.key === 'ArrowRight') keys.right = true

    if (event.key === 'ArrowUp' && onGround) {
        velocity = -10
        onGround = false
    }
})

window.addEventListener('keyup', (event) => {
    if (event.key === 'ArrowLeft') keys.left = false
    if (event.key === 'ArrowRight') keys.right = false
})


function animate() {
    requestAnimationFrame(animate)

    // clear screen
    c.fillStyle = 'aqua'
    c.fillRect(0, 0, canvas.width, canvas.height)

    // draw border
    c.strokeStyle = 'black'
    c.lineWidth = 5
    c.strokeRect(0, 0, canvas.width, canvas.height)

    // draw ground
    c.fillStyle = 'green'
    c.fillRect(0, canvas.height - groundHeight, canvas.width, groundHeight)

    // horizontal movement with acceleration
    if (keys.left) xVelocity -= moveSpeed
    if (keys.right) xVelocity += moveSpeed

    // apply friction
    xVelocity *= friction

    // apply horizontal movement
    x += xVelocity

    // gravity
    velocity += acceleration
    y += velocity

    // ground collision
    const groundY = canvas.height - groundHeight
    if (y + boxHeight > groundY) {
        y = groundY - boxHeight
        velocity = 0
        onGround = true
    }


    // left wall
    if (x < 0) {
        x = 0
        xVelocity = 0
    }

    // right wall
    if (x + boxWidth > canvas.width) {
        x = canvas.width - boxWidth
        xVelocity = 0
    }

    // top wall
    if (y < 0) {
        y = 0
        velocity = 0
    }

    // draw player
    c.fillStyle = 'red'
    c.fillRect(x, y, boxWidth, boxHeight)
}

animate()
