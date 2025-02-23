import type React from "react";
import "./globals.css";
import { Sidebar } from "@/components/sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className="dark">
			<body>
				<SidebarProvider>
					<div className="flex min-h-screen">
						<Sidebar />
						<main className="flex-1 border-l bg-background">{children}</main>
					</div>
				</SidebarProvider>
			</body>
		</html>
	);
}
