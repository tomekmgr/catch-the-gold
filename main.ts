input.onButtonPressed(Button.A, function () {
    player.move(-1)
})
input.onButtonPressed(Button.AB, function () {
    control.reset()
})
input.onButtonPressed(Button.B, function () {
    player.move(1)
})
let gold: game.LedSprite = null
let player: game.LedSprite = null
game.setScore(0)
game.setLife(2)
let speed = 1000
player = game.createSprite(2, 4)
basic.forever(function () {
    gold = game.createSprite(randint(0, 4), 0)
    gold.turn(Direction.Right, 90)
    basic.pause(speed)
    while (!(gold.isDeleted())) {
        gold.move(1)
        if (gold.isTouching(player)) {
            game.addScore(1)
            basic.showNumber(game.score())
            gold.delete()
            basic.pause(1000)
            speed += -50
            if (speed <= 200) {
                speed = 200
            }
        } else {
            if (gold.get(LedSpriteProperty.Y) == 4) {
                game.removeLife(1)
                gold.delete()
            }
            basic.pause(speed)
        }
    }
})
