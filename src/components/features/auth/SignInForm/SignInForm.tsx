import { useTranslation } from 'react-i18next'
import { Input, Button } from '@/components/shared/ui'

export const SignInForm = () => {
	const { t } = useTranslation('auth')

	return (
		<div>
			<h1>{t('signIn')}</h1>

			<form onSubmit={(e) => e.preventDefault()}>
				<Input
					type="email"
					placeholder={t('email')}
				/>

				<Input
					type="password"
					placeholder={t('password')}
				/>

				<p>
					{t('forgotPassword?')}
				</p>

				<p>
					{t('noAccount?')} <a href="/signin">{t('signUp')}</a>
				</p>

				<Button type="submit">
					{t('signIn')}
				</Button>
			</form>
		</div>
	)
}