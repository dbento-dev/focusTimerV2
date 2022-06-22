export default function () {
  const buttonPressAudio = new Audio(
    'https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true'
  )

  const kitchenTimer = new Audio(
    'https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true'
  )

  const forestAudio = new Audio('./assets/audio/floresta.wav')
  const rainAudio = new Audio('./assets/audio/chuva.wav')
  const officeAudio = new Audio('./assets/audio/cafeteria.wav')
  const fireplaceAudio = new Audio('./assets/audio/lareira.wav')

  forestAudio.loop = true
  rainAudio.loop = true
  officeAudio.loop = true
  fireplaceAudio.loop = true

  function pressButton() {
    buttonPressAudio.play()
  }

  function forestAudioSound() {
    toggleAudioPlay(forestAudio)

    rainAudio.pause()
    officeAudio.pause()
    fireplaceAudio.pause()
  }

  function rainAudioSound() {
    toggleAudioPlay(rainAudio)
    officeAudio.pause()
    fireplaceAudio.pause()
    forestAudio.pause()
  }

  function officeAudioSound() {
    toggleAudioPlay(officeAudio)
    fireplaceAudio.pause()
    forestAudio.pause()
    rainAudio.pause()
  }

  function fireplaceAudioSound() {
    toggleAudioPlay(fireplaceAudio)
    forestAudio.pause()
    rainAudio.pause()
    officeAudio.pause()
  }

  function timeEnd() {
    kitchenTimer.play()
  }

  function toggleAudioPlay(audio) {
    let isPaused = audio.paused
    if (isPaused) {
      audio.play()
    } else {
      audio.pause()
    }
  }

  return {
    pressButton,
    forestAudioSound,
    rainAudioSound,
    officeAudioSound,
    fireplaceAudioSound,
    timeEnd,
    toggleAudioPlay,
  }
}
