// Modules
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import type { IconName, IconPrefix } from '@fortawesome/free-brands-svg-icons'

type Props = {
  className?: string
  icon: [IconPrefix, IconName]
  size?: 'xs' | 'lg' | '1x' | '2x' | '3x' | '4x' | '5x' | '10x'
}

// *************** Add Icons *************** //
library.add(fas, fab, far)

export const FontAwesome: React.VFC<Props> = ({ className, icon, size }: Props) => (
  // *************** JSX *************** //
  <FontAwesomeIcon className={className} icon={icon} size={size} />
)
