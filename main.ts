radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 69) {
        ringing = 1
        while (ringing == 1) {
            random = randint(300, 3000)
            images.iconImage(IconNames.Diamond).showImage(0)
            music.playSoundEffect(music.createSoundEffect(
            WaveShape.Square,
            random,
            random + 100,
            165,
            0,
            116,
            SoundExpressionEffect.None,
            InterpolationCurve.Logarithmic
            ), SoundExpressionPlayMode.InBackground)
            images.createImage(`
                # . . . #
                . . # . .
                . # . # .
                . . # . .
                # . . . #
                `).showImage(0)
            music.playSoundEffect(music.createSoundEffect(
            WaveShape.Square,
            random + -400,
            random + -300,
            165,
            0,
            116,
            SoundExpressionEffect.None,
            InterpolationCurve.Logarithmic
            ), SoundExpressionPlayMode.InBackground)
            images.createImage(`
                . # . # .
                # . . . #
                . . # . .
                # . . . #
                . # . # .
                `).showImage(0)
            music.playSoundEffect(music.createSoundEffect(
            WaveShape.Square,
            random + -900,
            random + -800,
            165,
            0,
            116,
            SoundExpressionEffect.None,
            InterpolationCurve.Logarithmic
            ), SoundExpressionPlayMode.InBackground)
        }
    }
})
input.onButtonPressed(Button.A, function () {
    ringing = 0
})
input.onButtonPressed(Button.B, function () {
    ringing = 0
})
let random = 0
let ringing = 0
radio.setGroup(69)
ringing = 0
