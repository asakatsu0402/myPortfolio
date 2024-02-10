import useTranslation from 'next-translate/useTranslation'

type Props = {
  nameSpace?: 'common' | 'top' | 'about' | 'contact' | 'works'
  objName?: string
  objValue?: string
  secondName?: string
  secondValue?: string
  text: string | Array<string>
}

export const Text: React.FC<Props> = ({
  nameSpace = 'common',
  text,
  objName,
  objValue,
  secondName,
  secondValue
}: Props) => {
  const { t } = useTranslation()

  return (
    <>
      {objName && !secondName
        ? t(`${nameSpace}:${text}`, { [objName]: objValue })
        : secondName
        ? t(`${nameSpace}:${text}`, {
            [objName]: objValue,
            [secondName]: secondValue
          })
        : t(`${nameSpace}:${text}`)}
    </>
  )
}
