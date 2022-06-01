import { FormControl, Input, InputAdornment, InputLabel, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import React from 'react'

const SearchInput = ({placeholder}: {placeholder: string}) => {
  return (
    <>
      <FormControl fullWidth>
        <TextField
          className="searchInput"
          fullWidth
          id="input-with-icon-textfield"
          label="Pesquisar por"
          variant="outlined"
          placeholder={placeholder}
          
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
            style: {
              paddingLeft: '20px',
              fontWeight: '500',
              fontFamily: 'Poppins',
              fontSize: '16px',
              lineHeight: '24px',
              marginBottom: '40px'
            }
          }}

          InputLabelProps={{
            style: { fontFamily: 'Poppins', fontWeight: '500', fontSize: '1rem', color: '#A3B8B0'}
         }}
        />
      </FormControl>

    </>
  )
}

export default SearchInput