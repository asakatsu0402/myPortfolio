import clsx from 'clsx'

type Props = {
  className?: string
}

export const Underline: React.FC<Props> = ({ className }: Props) => (
  <div className={clsx(['underline', className])} />
)
