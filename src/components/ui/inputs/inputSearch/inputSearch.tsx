import iconSearch from '../inputSearch/icons/search.png'
import { Img, InputSearch, Search } from './inputSearch-Styled'
import { useState } from 'react'
import { type } from 'os'

type SearchPropsType = {
  onSearch: (event: string) => void
  onSearchPlans?: (event: string) => void
}

const InputPesquisa = ({ onSearch, onSearchPlans }: SearchPropsType) => {
  const [search, setSearch] = useState('')

  const handleSearchSubmit = () => {
    if (search.length === 0 || search.trim() === '') {
    } else {
      onSearch(search)
      /* onSearchPlans(search) */
    }
  }
  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearchSubmit()
    }
  }

  return (
    <Search>
      <InputSearch
        type="text"
        id="idInputPesquisar"
        placeholder="Pesquise uma palavra-chave"
        value={search}
        onChange={e => setSearch(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <Img src={iconSearch} alt="lupa-pesquisar" onClick={handleSearchSubmit} />
    </Search>
  )
}

export default InputPesquisa
