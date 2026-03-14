import styles from "./AuthLayout.module.css"

type Props = {
	children: React.ReactNode
}

export const AuthLayout = ({ children }: Props) => {
	return (
		<div className={styles.container}>
			<div className={styles.decor}></div>
			<div className={styles.content}>
				{children}
			</div>
		</div>
	)
}