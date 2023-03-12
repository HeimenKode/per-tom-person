input.onGesture(Gesture.ScreenUp, function () {
    music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 1, 5000, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
})
input.onGesture(Gesture.ScreenDown, function () {
    music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
})
input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        . # . # .
        # # . # #
        . . . . .
        . # # # .
        # . . . #
        `)
    basic.pause(500)
})
basic.forever(function () {
    basic.showLeds(`
        # # . # #
        # # . # #
        . . . . .
        . # # # .
        . . . . .
        `)
})
loops.everyInterval(7000, function () {
    basic.showLeds(`
        . . . . .
        # # . # #
        . . . . .
        . # # # .
        . . . . .
        `)
    music.playSoundEffect(music.createSoundEffect(WaveShape.Triangle, 2608, 513, 255, 32, 100, SoundExpressionEffect.Vibrato, InterpolationCurve.Linear), SoundExpressionPlayMode.InBackground)
})
