import { StyledTextInput } from './StyledTextInput'
import PropTypes from 'prop-types'

export const TextInput = (props) => {
  const { children, placeholder, onChange, ...otherProps } = props

  return (
    <StyledTextInput
      placeholder={placeholder}
      onChange={onChange}
      {...otherProps}
    />
  )
}

TextInput.propTypes = {
  onChange: PropTypes.func,
  variant: PropTypes.string,
  size: PropTypes.string,
  placeholder: PropTypes.string
}

TextInput.defaultProps = {
  onChange: () => {},
  variant: 'primary',
  size: 'medium',
  placeholder: ''
}

TextInput.displayName = 'TextInput'
