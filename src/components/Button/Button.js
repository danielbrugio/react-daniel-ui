import PropTypes from 'prop-types'

import { StyledButton } from './StyledButton'

export const Button = (props) => {
  const { children, onClick, disabled, ...otherProps } = props

  return (
    <StyledButton
        
      
      onClick={disabled ? undefined : onClick}
      isDisabled={disabled}
      {...otherProps}
    >
      {children}
      
    </StyledButton>
  )
}

Button.propTypes = {
  variant: PropTypes.string,
  size: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool
}

Button.defaultProps = {
  variant: 'primary',
  size: 'medium',
  onClick: null,
  disabled: false
}

Button.displayName = 'Button'
