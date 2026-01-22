import React from 'react'
import withShowHide from './withShowHide'


const SecretMessage = ({ isVisible, toggleVisibility }) => (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', borderRadius: '5px' }}>
        <h3>Secret Message Component</h3>
        <button onClick={toggleVisibility}>
            {isVisible ? 'Hide Message' : 'Show Message'}
        </button>
        {isVisible && (
            <p style={{ marginTop: '10px', color: 'blue', fontWeight: 'bold' }}>
                This is a secret message revealed!
            </p>
        )}
    </div>
)


const SpoilerContent = ({ isVisible, toggleVisibility }) => (
    <div style={{ border: '1px solid #da5555', padding: '10px', margin: '10px', borderRadius: '5px' }}>
        <h3>Movie Spoiler Component</h3>
        <div style={{ filter: isVisible ? 'none' : 'blur(5px)', transition: '0.3s' }}>
            <p>The main character is actually a ghost!</p>
        </div>
        <button style={{ marginTop: '10px' }} onClick={toggleVisibility}>
            {isVisible ? 'Hide Spoiler' : 'Reveal Spoiler'}
        </button>
    </div>
)

const SecretMessageWithHOC = withShowHide(SecretMessage)
const SpoilerWithHOC = withShowHide(SpoilerContent)

const ShowHideDemo = () => {
    return (
        <div>
            <h2>Task 1: Show/Hide HOC Demo</h2>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <SecretMessageWithHOC />
                <SpoilerWithHOC />
            </div>
        </div>
    )
}

export default ShowHideDemo
