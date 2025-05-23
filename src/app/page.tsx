import Image from "next/image";
import { Github, Twitter } from "lucide-react";

export default function Page() {
	return (
		<div className="min-h-screen bg-background flex items-center justify-center p-4">
			<div className="max-w-2xl w-full space-y-6 text-center">
				<div className="relative w-64 h-64 mx-auto rounded-2xl overflow-hidden">
					<Image
						src="/gargs.png"
						alt="Profile image with Japanese oni mask"
						fill
						className="object-cover"
						priority
					/>
				</div>
				<div className="space-y-2">
					<h1 className="text-3xl font-bold tracking-tight">gargs.eth</h1>
					<p className="text-muted-foreground">
						Building{" "}
						<a
							href="https://twitter.com/blossomland_"
							className="text-primary hover:underline"
							target="_blank"
							rel="noopener noreferrer"
						>
							@blossomland_
						</a>
						&nbsp; and &nbsp;
						<a
							href="https://x.com/cellfi_xyz"
							className="text-primary hover:underline"
							target="_blank"
							rel="noopener noreferrer"
						>
							@cellfi_xyz
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
						<Github className="w-6 h-6" />
						<span className="sr-only">GitHub</span>
					</a>
					<a
						href="https://warpcast.com/gargs.eth"
						target="_blank"
						rel="noopener noreferrer"
						className="text-muted-foreground hover:text-foreground transition-colors"
					>
						<svg
							width="24"
							height="24"
							viewBox="0 0 1260 1260"
							xmlns="http://www.w3.org/2000/svg"
						>
							<g clipPath="url(#clip0_1_2)">
								<path d="M947.747 1259.61H311.861C139.901 1259.61 0 1119.72 0 947.752V311.871C0 139.907 139.901 0.00541362 311.861 0.00541362H947.747C1119.71 0.00541362 1259.61 139.907 1259.61 311.871V947.752C1259.61 1119.72 1119.71 1259.61 947.747 1259.61Z" />
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
						href="https://twitter.com/grd_arguelles"
						target="_blank"
						rel="noopener noreferrer"
						className="text-muted-foreground hover:text-foreground transition-colors"
					>
						<Twitter className="w-6 h-6" />
						<span className="sr-only">X (Twitter)</span>
					</a>
				</div>
			</div>
		</div>
	);
}
