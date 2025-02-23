import { Card } from "@/components/ui/card";
import Image from "next/image";
import { Github, MapPin, Clock } from "lucide-react";
import { formatRelativeTime } from "@/lib/utils";

// This would typically come from your data source
const feedItems = [
	{
		type: "photo",
		image: "/placeholder.svg?height=400&width=600",
		location: "Tokyo, Japan",
		caption: "Cherry blossoms in full bloom at Ueno Park",
		date: "2024-02-24T15:30:00Z",
	},
	{
		type: "github",
		repo: "vercel/next.js",
		prNumber: "12345",
		title: "Add new feature for API routes",
		date: "2024-02-23T09:15:00Z",
	},
	{
		type: "text",
		content:
			"Just deployed a new feature to production. Excited to share more soon!",
		date: "2024-02-22T18:45:00Z",
	},
];

export default function Page() {
	return (
		<div className="max-w-2xl mx-auto py-8 px-4">
			<div className="space-y-6">
				{feedItems.map((item, index) => {
					if (item.type === "photo") {
						return (
							<Card key={index} className="overflow-hidden">
								<div className="relative aspect-[4/3]">
									<Image
										src={item.image || "/placeholder.svg"}
										alt={item.caption || ""}
										fill
										className="object-cover"
									/>
								</div>
								<div className="p-4 space-y-3">
									{item.location && (
										<div className="flex items-center text-sm text-muted-foreground">
											<MapPin className="w-4 h-4 mr-1" />
											{item.location}
										</div>
									)}
									{item.caption && <p className="text-sm">{item.caption}</p>}
									<div className="flex items-center text-sm text-muted-foreground">
										<Clock className="w-4 h-4 mr-1" />
										{formatRelativeTime(item.date)}
									</div>
								</div>
							</Card>
						);
					}

					if (item.type === "github") {
						return (
							<Card key={index} className="p-4 space-y-3">
								<div className="flex items-start space-x-3">
									<Github className="w-5 h-5 mt-1 text-muted-foreground" />
									<div className="space-y-1">
										<p className="text-sm">
											Merged PR #{item.prNumber} in{" "}
											<a
												href={`https://github.com/${item.repo}`}
												className="font-medium hover:underline"
											>
												{item.repo}
											</a>
										</p>
										<p className="text-sm text-muted-foreground">
											{item.title}
										</p>
									</div>
								</div>
								<div className="flex items-center text-sm text-muted-foreground">
									<Clock className="w-4 h-4 mr-1" />
									{formatRelativeTime(item.date)}
								</div>
							</Card>
						);
					}

					if (item.type === "text") {
						return (
							<Card key={index} className="p-4 space-y-3">
								<p className="text-sm">{item.content}</p>
								<div className="flex items-center text-sm text-muted-foreground">
									<Clock className="w-4 h-4 mr-1" />
									{formatRelativeTime(item.date)}
								</div>
							</Card>
						);
					}
				})}
			</div>
		</div>
	);
}
