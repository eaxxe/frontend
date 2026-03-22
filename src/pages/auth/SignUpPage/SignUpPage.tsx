import { AuthLayout } from "@/components/layout"
import { SignUpForm } from "@/components/features/auth"

export const SignUpPage = () => {
	return (
		<AuthLayout>
			<SignUpForm></SignUpForm>
		</AuthLayout>
	)
}