import { iamText } from '../../../config/aboutConfig'

export const Iam = (): JSX.Element => (
  <div className="w-3/5">
    <p className="first-letter:text-4xl">{iamText.en}</p>
    <p className="mt-5 first-letter:text-4xl">{iamText.ja}</p>
  </div>
)
