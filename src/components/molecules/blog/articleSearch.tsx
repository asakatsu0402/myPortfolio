// Modules
import React, { useCallback, useContext } from 'react'
import { useRouter } from 'next/router'
// Components
import { Label } from '../../atoms/label'
import { Input } from '../../atoms/input'
import { Underline } from '../../atoms/underLine'
import { Button } from '../../atoms/button'
// Functions
import { SearchContext } from '../../../functions/commonFunctions'

export const ArticleSearch: React.VFC = () => {
  // *************** Const *************** //
  const { search, setSearch } = useContext(SearchContext)
  const router = useRouter()

  const handleSearch = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.currentTarget
      setSearch(value)
    },
    [setSearch]
  )

  const handleDownSearch = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') void router.push(`/blog/search/?keyword=${search}`)
    },
    [search, router]
  )

  const searchStart = useCallback(() => {
    void router.push(`/blog/search/?keyword=${search}`)
  }, [search, router])

  // *************** JSX *************** //
  return (
    <div className="flexBetweenSet">
      <div className="lineInputGroup">
        <Label className="font-bold" htmlFor="search" text="記事検索" />
        <Input
          className="lineInput p-1"
          name="search"
          type="text"
          placeholder="Search…"
          value={search}
          functions={handleSearch}
          onKeyDown={handleDownSearch}
        />
        <Underline />
      </div>
      <Button
        className="blackButton p-1"
        text="Search"
        functions={searchStart}
      />
    </div>
  )
}
