import React, { useState } from 'react'
import ShowHideDemo from './ShowHideDemo'
import ToggleDemo from './ToggleDemo'

const HOCLab = () => {
    const [activeTask, setActiveTask] = useState('showHide')

    return (
        <div style={{ padding: '20px', border: '2px dashed #888', borderRadius: '8px', margin: '20px 0' }}>
            <h1>HOC Lab Assignments</h1>

            <div style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
                <button
                    onClick={() => setActiveTask('showHide')}
                    style={{
                        backgroundColor: activeTask === 'showHide' ? '#007bff' : '#ccc',
                        color: 'white',
                        padding: '10px 20px',
                        border: 'none',
                        cursor: 'pointer'
                    }}
                >
                    Task 1: Show / Hide HOC
                </button>

                <button
                    onClick={() => setActiveTask('toggle')}
                    style={{
                        backgroundColor: activeTask === 'toggle' ? '#007bff' : '#ccc',
                        color: 'white',
                        padding: '10px 20px',
                        border: 'none',
                        cursor: 'pointer'
                    }}
                >
                    Task 2: Toggle HOC
                </button>
            </div>

            <div style={{ padding: '20px', background: '#f9f9f9', borderRadius: '8px' }}>
                {activeTask === 'showHide' && <ShowHideDemo />}
                {activeTask === 'toggle' && <ToggleDemo />}
            </div>
        </div>
    )
}

export default HOCLab
