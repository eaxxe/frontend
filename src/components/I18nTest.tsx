import { useTranslation } from 'react-i18next';

export const I18nTest = () => {
	const { t, i18n } = useTranslation('auth');

	const toggleLanguage = () => {
		const nextLang = i18n.language === 'en' ? 'de' : 'en';
		i18n.changeLanguage(nextLang);
	};

	return (
		<div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
			{/* Выводим перевод по ключу */}
			<h2>{t('signIn')}</h2>

			<button onClick={toggleLanguage} style={{ padding: '8px 16px', cursor: 'pointer' }}>
				Переключить язык (Текущий: {i18n.language})
			</button>
		</div>
	);
};