import React, { useState } from 'react'

const withToggle = (WrappedComponent) => {
    return (props) => {
        const [isToggled, setIsToggled] = useState(false)

        const toggle = () => {
            setIsToggled((prev) => !prev)
        }

        return (
            <WrappedComponent
                {...props}
                isToggled={isToggled}
                toggle={toggle}
            />
        )
    }
}

export default withToggle
