// Modules
import React from "react"
// Components
import { Label } from "../../atoms/label"
import { Input } from "../../atoms/input"

// *************** Type *************** //
type Props = {

}

export const ArticleSearch: React.VFC<Props> = (
  props: Props
) => {
  // *************** JSX *************** //
  return (
    <div>
      <Label
        className="font-bold"
        htmlFor="search"
        text="記事検索"
      />
      <Input
        className={`p-2`}
        name="search"
        type="text"
        placeholder="記事タイトル"
      />
    </div>
  )
}