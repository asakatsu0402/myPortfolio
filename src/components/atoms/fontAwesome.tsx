// Modules
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
// Types
import type { FontAwesomeType } from '../../types/atomTypes'

// *************** Add Icons *************** //
library.add(fas, fab, far)

export const FontAwesome: React.VFC<FontAwesomeType> = ({
  className,
  icon,
  size
}: FontAwesomeType) => (
  // *************** JSX *************** //
  <FontAwesomeIcon className={className} icon={icon} size={size} />
)
