// Modules
import useTranslation from 'next-translate/useTranslation'
// Types
import type { TextType } from '../../types/atomTypes'

export const Text: React.VFC<TextType> = ({
  nameSpace = 'common',
  text,
  objName,
  objValue,
  secondName,
  secondValue
}: TextType) => {
  // *************** Const *************** //
  const { t } = useTranslation()

  // *************** JSX *************** //
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
