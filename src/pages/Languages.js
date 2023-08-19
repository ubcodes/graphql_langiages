import React from 'react'
import useLanguages from '../hooks/useLanguages'
import "./Languages.css"
import { Link } from 'react-router-dom'

const Languages = () => {
    const { error, loading, data } = useLanguages();

    if (error) {
        return <div>Oops, an error occurred</div>;
    }

    if (loading) {
        return <div>Still loading...</div>;
    }

    return (
        <div className='languages_container'>
            {data.languages.map(language => {
                return (
                    <div className='languages_box' key={language.code}> {/* Add a unique key */}
                       <Link to={`/${language.code}`}>
                        <p>{language.code}</p>
                        <h2>{language.name}</h2>
                        <h3>{language.native}</h3>
                       </Link>
                    </div>
                );
            })}
        </div>
    );
}

export default Languages;
