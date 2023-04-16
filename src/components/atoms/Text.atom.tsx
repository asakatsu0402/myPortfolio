import useTranslation from 'next-translate/useTranslation'

import type { TextType } from '../../types/atomTypes'

export const Text: React.FC<TextType> = ({
  nameSpace = 'common',
  text,
  objName,
  objValue,
  secondName,
  secondValue
}: TextType) => {
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
