import ContributorCard from "@/components/contributor-card"
import NewsletterForm from "@/components/newsletter-form"
import { Github } from "lucide-react"

export default function Home() {
	return (
		<main className="min-h-screen">
			{/* Hero Section */}
			<div className="relative overflow-hidden bg-black">
				<div className="absolute inset-0 z-0 opacity-10">
					<div className="absolute inset-0 bg-[url('/js-pattern.svg')] bg-repeat opacity-20"></div>
				</div>
				<div className="container relative z-10 mx-auto flex min-h-[60vh] flex-col items-center justify-center px-4 py-16 text-center sm:px-6 lg:px-8">
					<div className="flex items-center space-x-3">
						<div className="flex h-14 w-14 items-center justify-center rounded-xl bg-yellow-400">
							<Github className="h-8 w-8 text-black" />
						</div>
						<h1 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">
							<span className="text-yellow-400">JS</span> Cameroon
						</h1>
					</div>
					<p className="mt-6 max-w-3xl text-xl text-gray-300">
						La communauté JavaScript du Cameroun
					</p>
					<div className="mt-12 flex items-center justify-center">
						<div className="relative">
							<div className="absolute -inset-0.5 animate-pulse rounded-lg bg-gradient-to-r from-yellow-400 to-yellow-600 opacity-75 blur"></div>
							<div className="relative rounded-lg bg-black px-8 py-4 text-center text-white">
								<h2 className="text-lg font-semibold uppercase tracking-wider text-yellow-400">
									Coming Soon
								</h2>
								<p className="mt-2 text-sm text-gray-300">
									Notre site est en cours de développement
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Newsletter Section */}
			<div className="bg-white py-16">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<div className="mx-auto max-w-3xl text-center">
						<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
							Restez informé
						</h2>
						<p className="mt-4 text-lg text-gray-600">
							Inscrivez-vous à notre newsletter pour être notifié du lancement
							officiel et des événements à venir.
						</p>
						<div className="mt-8">
							<NewsletterForm />
						</div>
					</div>
				</div>
			</div>

			{/* Contributors Section */}
			<div className="bg-gray-50 py-16">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<div className="mx-auto max-w-3xl text-center">
						<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
							Contributeurs
						</h2>
						<p className="mt-4 text-lg text-gray-600">
							Rencontrez les personnes qui contribuent au développement de la
							communauté JS Cameroon.
						</p>
					</div>
					<div className="mt-12 grid gap-8 sm:grid-cols-2 md:gap-12">
						<ContributorCard
							name="Bleriot Noguia"
							role="Full Stack Developer"
							image="https://avatars.githubusercontent.com/u/22049477"
							github="https://github.com/bleriotnoguia"
							linkedin="https://linkedin.com/in/bleriotnoguia"
							portfolio="https://bleriotnoguia.com"
						/>
						<ContributorCard
							name="Kael"
							role="Frontend Engineer"
							image="https://avatars.githubusercontent.com/u/10372405"
							github="https://github.com/ekimkael"
							linkedin="https://linkedin.com/in/michelmbili/"
							portfolio="https://ekimkael.github.io"
						/>
					</div>
				</div>
			</div>

			{/* Footer */}
			<footer className="bg-gray-900 py-12 text-center text-white">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex items-center justify-center space-x-2">
						<div className="flex h-8 w-8 items-center justify-center rounded-lg bg-yellow-400">
							<Github className="h-5 w-5 text-black" />
						</div>
						<p className="text-lg font-medium">
							<span className="text-yellow-400">JS</span> Cameroon
						</p>
					</div>
					<p className="mt-4 text-sm text-gray-400">
						© {new Date().getFullYear()} JS Cameroon. Tous droits réservés.
					</p>
				</div>
			</footer>
		</main>
	)
}
