// Types
import type { SectionType } from '../../types/molecules'

export const Section: React.VFC<SectionType> = ({
  className,
  title,
  children
}: SectionType) => (
  // *************** JSX *************** //
  <section className={`exceptTopSection ${className}`}>
    <h2 className="text-3xl">{title}</h2>
    {children}
  </section>
)
