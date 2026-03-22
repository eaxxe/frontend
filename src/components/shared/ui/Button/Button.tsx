import styles from './Button.module.css'

type StyleType = 'standard' | 'sendCode'

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
	styleType?: StyleType
	className?: string
}

export const Button = ({
	styleType = 'standard',
	className,
	children,
	...props
}: Props) => {
	return (
		<button
			{...props}
			className={`${styles.button} ${styles[styleType]} ${className || ''}`}
		>
			{children}
		</button>
	)
}
