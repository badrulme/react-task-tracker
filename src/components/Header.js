import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'
import { useLocation } from 'react-router'

export const Header = ({ title, onAdd, showAddTask }) => {
    const location = useLocation()

    return (
        <header className='header'>
            <h1>{title}</h1>
            {location.pathname === '/' && <Button onClick={onAdd} color={!showAddTask ? 'green' : 'red'} text={!showAddTask ? 'Add' : 'Close'} />}
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string
}

export default Header;