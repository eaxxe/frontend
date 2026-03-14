import { AuthLayout } from "@/components/layout"
import { SignInForm } from "@/components/features/auth"

export const SignInPage = () => {
	return (
		<AuthLayout>
			<SignInForm></SignInForm>
		</AuthLayout>
	)
}