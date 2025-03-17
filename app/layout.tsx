import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import Footer from './ui/footer';
import SideNav from './ui/sidenav';
import ParticleBoard from './ui/particle-board';

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet" />
			</head>
			<body className={`${inter.className} bg-primary-bg antialiased font-inter`}>
				<SideNav />
				<ParticleBoard toggle={true}/>
				{children}
				<Footer />
			</body>
		</html>
	);
}
