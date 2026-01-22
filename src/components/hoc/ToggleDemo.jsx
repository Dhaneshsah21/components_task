import React from 'react'
import withToggle from './withToggle'


const LightModeCard = ({ isToggled, toggle }) => {
    const style = {
        padding: '20px',
        margin: '10px',
        border: '1px solid #ccc',
        backgroundColor: isToggled ? '#fff' : '#f0f0f0',
        color: '#333',
        transition: '0.3s'
    }

    return (
        <div style={style}>
            <h3>Light Mode Component</h3>
            <p>Status: {isToggled ? 'ON' : 'OFF'}</p>
            <button onClick={toggle}>
                Switch {isToggled ? 'Off' : 'On'}
            </button>
        </div>
    )
}

const DarkModeCard = ({ isToggled, toggle }) => {
    const style = {
        padding: '20px',
        margin: '10px',
        border: '1px solid #333',
        backgroundColor: isToggled ? '#333' : '#666',
        color: '#fff',
        transition: '0.3s'
    }

    return (
        <div style={style}>
            <h3>Dark Mode Component</h3>
            <p>Status: {isToggled ? 'Active' : 'Inactive'}</p>
            <div
                onClick={toggle}
                style={{
                    cursor: 'pointer',
                    padding: '5px 10px',
                    background: isToggled ? 'lime' : 'grey',
                    color: 'black',
                    display: 'inline-block',
                    borderRadius: '4px',
                    marginTop: '10px'
                }}
            >
                Click to Toggle
            </div>
        </div>
    )
}

const LightModeWithHOC = withToggle(LightModeCard)
const DarkModeWithHOC = withToggle(DarkModeCard)

const ToggleDemo = () => {
    return (
        <div>
            <h2>Task 2: Toggle HOC Demo</h2>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <LightModeWithHOC />
                <DarkModeWithHOC />
            </div>
        </div>
    )
}

export default ToggleDemo
