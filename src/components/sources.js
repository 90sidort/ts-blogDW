import React from 'react'
import sourcesStyles from '../styles/sources.module.scss'

const Sources = (props) => {
    const sourceTable = props.sources.split("   ")
    return (
        <div className={sourcesStyles.sourceDiv}>
            <p>
                Źródła:
            </p>
            <ol>
                {sourceTable.map((source) => {
                    if(source.includes('http')) {
                        return (
                            <li><a className={sourcesStyles.sourceLink} href={source} target="_blank" rel="noopener noreferrer">{source}</a></li>
                        )
                    } else {
                        return (
                            <li>{source}</li>
                        )
                    }
                })}
            </ol>
        </div>
    )
}

export default Sources