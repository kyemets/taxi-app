import React, { ButtonHTMLAttributes, FC } from 'react'
import cn from 'classnames'

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement>{
	title: string;
	color: string;
	bgColor: string;
	cb: () => void;
	isDisabled?: boolean;
}


const Button: FC<IButton> = (props) => {

	const {title, bgColor, cb, color, isDisabled, ...left} = props

  return (
	<button {...left} className={cn(
		'rounded-2xl block w-2/3 p-3 text-lg font-medium mx-auto shadow-md transition-colors duration-300 ease-in-out', {
			'cursor-not-allowed': isDisabled,
		}
	)}
	style={{
		backgroundColor: isDisabled ? 'rgb(229, 231, 235)' : bgColor, color
	}}
	onClick={cb}
	disabled={isDisabled}
	>
		{title}
	</button>
  )
}

export default Button
