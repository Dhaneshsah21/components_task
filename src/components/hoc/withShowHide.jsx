import React, { useState } from 'react'

const withShowHide = (WrappedComponent) => {
    return (props) => {
        const [isVisible, setIsVisible] = useState(false)

        const toggleVisibility = () => {
            setIsVisible((prev) => !prev)
        }

        return (
            <WrappedComponent
                {...props}
                isVisible={isVisible}
                toggleVisibility={toggleVisibility}
            />
        )
    }
}

export default withShowHide
