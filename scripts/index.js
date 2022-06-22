// elements
import { minutesDisplay, secondsDisplay } from './elements.js'
import Sound from './sounds.js'
import Events from './events.js'
import Timer from './timer.js'

const sound = Sound()
const timer = Timer({
  minutesDisplay,
  secondsDisplay,
})

Events({ timer, sound })
