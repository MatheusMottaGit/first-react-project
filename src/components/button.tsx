import React, { FunctionComponent } from 'react'

type ButtonProps= {
    theme?: 'dark' | 'light'
    onClick?: ()=>void
}

export const Button: FunctionComponent<ButtonProps> = () => {
  return (
    <div>
        <button>Enviar</button>
    </div>
  )
}

