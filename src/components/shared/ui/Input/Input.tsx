import styles from './Input.module.css'
import EyeOpen from '@/assets/icons/input/eye_open.svg?react'
import EyeClose from '@/assets/icons/input/eye_close.svg?react'
import { useState } from 'react'

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
	rightElement?: React.ReactNode
	isPassword?: boolean
	className?: string
}

export const Input = ({
	rightElement,
	isPassword,
	className,
	...props
}: Props) => {
	const [showPassword, setShowPassword] = useState(false)
	const isPasswordField = isPassword || props.type === 'password'

	const inputType = isPasswordField
		? (showPassword ? 'text' : 'password')
		: props.type

	return (
		<div className={`${styles.wrapper} ${className || ''}`}>
			<input
				{...props}
				type={inputType}
				className={styles.input}
			/>

			<div className={styles.rightElement}>
				{isPasswordField ? (
					<button
						type="button"
						onClick={() => setShowPassword(prev => !prev)}
						className={styles.iconButton}
					>
						{showPassword ? (
							<EyeOpen className={styles.icon} />
						) : (
							<EyeClose className={styles.icon} />
						)}
					</button>
				) : (
					rightElement
				)}
			</div>
		</div>
	)
}