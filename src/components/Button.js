
import PropTypes from 'prop-types'

const Button = ({ color, text , onClick}) => {
    return (
        <Button style={{ backgroundColor: color }} className='btn'
        onClick = {onClick}>
            {text}
        </Button>
    )
}
Button.defaultProps = {
    color: 'steelBlue'
}
Button.defaultProps = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
}
export default Button;
