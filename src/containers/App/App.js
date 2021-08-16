import React, {Component} from 'react'
import './App.module.css';
import words from "../../words";
import styles from './App.module.css'
import Word from '../../components/Word/Word'

class App extends Component{
    state = {
        selectedWord: words[Math.floor(Math.random()*words.length)],
        index: 0
    }

    keyPressHandler = (event) => {
        if (event.key === this.state.selectedWord[this.state.index]){
            console.log('Bingo', event.key)
            this.setState({
                index: this.state.index+1
            })
        }
        if (this.state.index === this.state.selectedWord.length - 1) {
            this.setState({
                selectedWord: words[Math.floor(Math.random()*words.length)],
                index: 0
            })
        }
    }
    render () {
        return(
            <div className={styles.view} onKeyPress={this.keyPressHandler} tabIndex={'0'}>
                <h1 className={styles.header}>Words-per-minute</h1>
                <div className={styles.wordContainer}>
                    <Word word={this.state.selectedWord} focusedIndex={this.state.index}/>
                </div>
            </div>
        )
    }
}

export default App;
