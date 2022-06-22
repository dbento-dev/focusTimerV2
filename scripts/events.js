// elements
import {
  playButton,
  stopButton,
  plusButton,
  minusButton,
  forestSoundButton,
  rainSoundButton,
  officeSoundButton,
  fireplaceSoundButton,
  minutesDisplay,
  secondsDisplay,
} from './elements.js'

export default function ({ timer, sound }) {
  // events
  forestSoundButton.addEventListener('click', function () {
    forestSoundButton.classList.toggle('active')
    rainSoundButton.classList.remove('active')
    officeSoundButton.classList.remove('active')
    fireplaceSoundButton.classList.remove('active')
    sound.pressButton()
    sound.forestAudioSound()
  })

  rainSoundButton.addEventListener('click', function () {
    rainSoundButton.classList.toggle('active')
    officeSoundButton.classList.remove('active')
    fireplaceSoundButton.classList.remove('active')
    forestSoundButton.classList.remove('active')
    sound.pressButton()
    sound.rainAudioSound()
  })

  officeSoundButton.addEventListener('click', function () {
    officeSoundButton.classList.toggle('active')
    fireplaceSoundButton.classList.remove('active')
    forestSoundButton.classList.remove('active')
    rainSoundButton.classList.remove('active')
    sound.pressButton()
    sound.officeAudioSound()
  })

  fireplaceSoundButton.addEventListener('click', function () {
    fireplaceSoundButton.classList.toggle('active')
    forestSoundButton.classList.remove('active')
    rainSoundButton.classList.remove('active')
    officeSoundButton.classList.remove('active')
    sound.pressButton()
    sound.fireplaceAudioSound()
  })

  plusButton.addEventListener('click', function () {
    if (minutesDisplay.textContent <= 55) {
      let minutes = Number(minutesDisplay.textContent) + 5
      let seconds = Number(secondsDisplay.textContent)
      timer.updateDisplay(minutes, seconds)
    }

    sound.pressButton()
  })

  minusButton.addEventListener('click', function () {
    if (minutesDisplay.textContent > 5) {
      let minutes = Number(minutesDisplay.textContent) - 5
      let seconds = Number(secondsDisplay.textContent)
      timer.updateDisplay(minutes, seconds)
    }
    sound.pressButton()
  })

  playButton.addEventListener('click', function () {
    timer.countDown()
    sound.pressButton()
  })

  stopButton.addEventListener('click', function () {
    timer.pause()
    sound.pressButton()
  })
}
