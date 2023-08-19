import React from 'react'
import { useQuery, gql } from  "@apollo/client"

const GET_LANGUAGE = gql`
query GetLanguage($code : ID!) {
  language(code : $code){
    code
    name
    native
}
}
`

const useLanguage = (code) => {

    const { error, loading, data } = useQuery(GET_LANGUAGE, {
        variables: {
          code :   code //pass the code variable to the query
        }
    });


  return{
    error,
    data,
    loading
  }
}

export default useLanguage