import Image from "next/image";
import { Github, Twitter, Linkedin } from "lucide-react";
import {
	Sidebar as SidebarComponent,
	SidebarContent,
	SidebarHeader,
} from "@/components/ui/sidebar";

export function Sidebar() {
	return (
		<SidebarComponent>
			<SidebarHeader className="border-b p-6">
				<div className="space-y-6">
					<div className="relative w-32 h-32 mx-auto rounded-2xl overflow-hidden">
						<Image
							src="/gargs.png"
							alt="Profile image with Japanese oni mask"
							fill
							className="object-cover"
							priority
						/>
					</div>
					<div className="space-y-2 text-center">
						<h1 className="text-2xl font-bold tracking-tight">gargs.eth</h1>
						<p className="text-sm text-muted-foreground">
							Working on{" "}
							<a
								href="https://twitter.com/blossomland_"
								className="text-primary hover:underline"
								target="_blank"
								rel="noopener noreferrer"
							>
								@blossomland_
							</a>
						</p>
					</div>
					<div className="flex justify-center space-x-4">
						<a
							href="https://github.com/garguelles"
							target="_blank"
							rel="noopener noreferrer"
							className="text-muted-foreground hover:text-foreground transition-colors"
						>
							<Github className="w-5 h-5" />
							<span className="sr-only">GitHub</span>
						</a>
						<a
							href="https://warpcast.com/yourusername"
							target="_blank"
							rel="noopener noreferrer"
							className="text-muted-foreground hover:text-foreground transition-colors"
						>
							<svg
								width="20"
								height="20"
								viewBox="0 0 1260 1260"
								xmlns="http://www.w3.org/2000/svg"
							>
								<g clipPath="url(#clip0_1_2)">
									<path
										className="fill-current"
										d="M947.747 1259.61H311.861C139.901 1259.61 0 1119.72 0 947.752V311.871C0 139.907 139.901 0.00541362 311.861 0.00541362H947.747C1119.71 0.00541362 1259.61 139.907 1259.61 311.871V947.752C1259.61 1119.72 1119.71 1259.61 947.747 1259.61Z"
									/>
									<path
										d="M826.513 398.633L764.404 631.889L702.093 398.633H558.697L495.789 633.607L433.087 398.633H269.764L421.528 914.36H562.431L629.807 674.876L697.181 914.36H838.388L989.819 398.633H826.513Z"
										fill="white"
									/>
								</g>
								<defs>
									<clipPath id="clip0_1_2">
										<rect width="1259.61" height="1259.61" fill="white" />
									</clipPath>
								</defs>
							</svg>
							<span className="sr-only">Farcaster</span>
						</a>
						<a
							href="https://twitter.com/yourusername"
							target="_blank"
							rel="noopener noreferrer"
							className="text-muted-foreground hover:text-foreground transition-colors"
						>
							<Twitter className="w-5 h-5" />
							<span className="sr-only">X (Twitter)</span>
						</a>
						<a
							href="https://linkedin.com/in/yourusername"
							target="_blank"
							rel="noopener noreferrer"
							className="text-muted-foreground hover:text-foreground transition-colors"
						>
							<Linkedin className="w-5 h-5" />
							<span className="sr-only">LinkedIn</span>
						</a>
					</div>
				</div>
			</SidebarHeader>
			<SidebarContent>
				{/* Additional sidebar content can go here */}
			</SidebarContent>
		</SidebarComponent>
	);
}
