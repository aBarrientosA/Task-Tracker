import React from 'react'
import PropTypes from 'prop-types'
const Header = ({title}) => {
    return (
        <header className='header'>
            <h1>{title}</h1>
        </header>
    )
}
Header.defaultProps = {
    title: "Task Tracker",
}
Header.propTypes = {
    title: PropTypes.string.isRequired,
}
// You can encapsulate the styling like this
// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'black'
// }
export default Header
