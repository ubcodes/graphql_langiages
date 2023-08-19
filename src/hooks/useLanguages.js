import React from 'react'
import { gql, useQuery } from "@apollo/client"

const GET_LANGUAGES= gql `
query {
  languages{
    code
    name
    native
}
}
`

const useLanguages = () => {
    
    const {error, loading, data} = useQuery(GET_LANGUAGES)


  return {
    data,
    error, 
    loading
  }
}

export default useLanguages