import React from 'react';
import styles from './Button.module.scss'

interface Props {
  type?: "button" | "submit" | "reset" | undefined,
  children?: React.ReactNode,
  onClick?: () => void,
  disabled?: boolean
}

function Button({onClick, type, children, disabled}: Props){
  return (
    <button
      onClick={onClick}
      type={type}
      className={styles.button}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button;
