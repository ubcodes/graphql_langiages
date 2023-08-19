import React from 'react'
import useLanguage from '../hooks/useLanguage'
import { useParams } from 'react-router-dom';




const Language = () => {
    const { code } = useParams();
    // const code = "am";

    const { error, loading , data } = useLanguage(code);

     if (error) {
        return <div>Oops, an error occurred</div>;
    }

    if (loading) {
        return <div>Still loading...</div>;
    }

    //to acces th query result using the query name
    const language = data.language

    console.log(data)

  return (
    <div className='language_container'>
        <div className='language_content'>
            {/* {data.language.map(language => { */}
                 <div>
                    <p><b>code</b>: {language.code}</p>
                    <p><b>name</b>: {language.name}</p>
                    <p><b>native</b>: {language.native}</p>

                    </div>
            {/* })}/ */}
        </div>
    </div>
  )
}

export default Language