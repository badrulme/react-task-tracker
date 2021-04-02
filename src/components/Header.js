import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

export const Header = ({ title, onAdd, showAddTask }) => {
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button onClick={onAdd} color={!showAddTask ? 'green' : 'red'} text={!showAddTask ? 'Add' : 'Close'} />
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