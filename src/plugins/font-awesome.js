import { library } from '@fortawesome/fontawesome-svg-core'
import {
  fas,
  faPooStorm,
  faAngleDoubleUp,
  faAngleDoubleDown,
  faArrowAltCircleRight,
  faArrowAltCircleDown,
  faArrowAltCircleUp,
  faExclamationTriangle,
} from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import FontAwesomeIcon from '../lib/FontAwesomeIcon.vue'
import {} from '@fortawesome/free-brands-svg-icons'

library.add(
  fas,
  far,
  faPooStorm,
  faAngleDoubleUp,
  faAngleDoubleDown,
  faArrowAltCircleRight,
  faArrowAltCircleDown,
  faArrowAltCircleUp,
  faExclamationTriangle
)

export { FontAwesomeIcon }
