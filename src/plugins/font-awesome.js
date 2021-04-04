import { library } from '@fortawesome/fontawesome-svg-core'
import {
  fas,
  faAngleUp,
  faAngleDown,
  faPooStorm,
  faAngleDoubleUp,
  faAngleDoubleDown,
} from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import FontAwesomeIcon from '../lib/FontAwesomeIcon.vue'
import {} from '@fortawesome/free-brands-svg-icons'

library.add(
  fas,
  far,
  faAngleUp,
  faAngleDown,
  faPooStorm,
  faAngleDoubleUp,
  faAngleDoubleDown
)

export { FontAwesomeIcon }
