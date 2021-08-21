// Interfaces
import { ExternalType } from '../../interfaces/atomInterfaces'

export const ExternalLink: React.VFC<ExternalType> = ({
  className,
  link,
  children,
  text,
  target,
  downLoad
}: ExternalType) => (
  // *************** JSX *************** //
  <a
    className={className}
    href={link}
    target={target ? '_blank' : '_self'}
    rel={'noreferrer'}
    download={downLoad ? true : false}
  >
    {children ? children : text}
  </a>
)
