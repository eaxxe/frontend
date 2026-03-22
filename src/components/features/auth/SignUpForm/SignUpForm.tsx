import { useTranslation } from 'react-i18next'
import { Input, Button } from '@/components/shared/ui'

export const SignUpForm = () => {
	const { t } = useTranslation('auth')

	return (
		<div>
			<h1>{t('signUp')}</h1>

			<form onSubmit={(e) => e.preventDefault()}>
				<Input
					type="email"
					placeholder={t('email')}
				/>

				<Input
					type="text"
					placeholder={t('code')}
					rightElement={
						<Button type="button" styleType="sendCode">
							{t('sendCode')}
						</Button>
					}
				/>

				<Input
					type="password"
					placeholder={t('password')}
					isPassword
				/>

				<Input
					type="password"
					placeholder={t('confirmPassword')}
				/>

				<p>
					{t('alreadyHaveAnAccount?')} <a href="/signin">{t('signIn')}</a>
				</p>

				<Button type="submit">
					{t('signUp')}
				</Button>
			</form>
		</div>
	)
}