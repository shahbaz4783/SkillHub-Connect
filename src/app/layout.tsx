import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: 'SkillHub Connect | The Premium Marketplace for Skilled Professionals',
	description:
		'The premier platform connecting skilled professionals with exciting projects. Find or hire top talent, seamlessly manage projects, and build a thriving career.',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
