import React from 'react'
import sourcesStyles from '../styles/sources.module.scss'

class Sources extends React.Component {
    constructor(props) {
        super(props)
        this.state = { show: false }
    }
    showSources = (e) => {
        const isShown = this.state.show === false ? true : false
        this.setState(() => ({ show: isShown}))
    }
    generateSources = () => {
        return this.props.sources.split("   ")
    }
    render() {
        return (
            <div className={sourcesStyles.sourceDiv}>
                <button className={sourcesStyles.sourceButton} onClick={this.showSources}>
                    ŹRÓDŁA
                </button>
                {this.state.show === true &&
                    <ol className={sourcesStyles.sourceList}>
                        {this.generateSources().map((source) => {
                            if(source.includes('http')) {
                                const sourceEl = source.split('||')
                                return (
                                    <li><a className={sourcesStyles.sourceLink} href={sourceEl[0]} target="_blank" rel="noopener noreferrer">{sourceEl[1]}</a></li>
                                )
                            } else {
                                return (
                                    <li>{source}</li>
                                )
                            }
                        })
                    }
                    </ol>
                }
            </div>
        )
    }
}

export default Sources