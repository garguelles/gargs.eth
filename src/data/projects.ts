export interface Project {
  id: string;
  name: string;
  description: string;
  tags: string[];
  links: {
    label: string;
    url: string;
  }[];
}

export const projects: Project[] = [
  {
    id: "1",
    name: "DEFI PROTOCOL",
    description: "A decentralized lending protocol enabling users to borrow and lend crypto assets with algorithmic interest rates. Built on Ethereum with cross-chain bridges to Layer 2 solutions.",
    tags: ["DeFi", "Smart Contracts", "Solidity"],
    links: [
      { label: "GitHub", url: "https://github.com" },
      { label: "Live Demo", url: "https://example.com" },
      { label: "Docs", url: "https://docs.example.com" }
    ]
  },
  {
    id: "2",
    name: "NFT MARKETPLACE",
    description: "An open marketplace for digital art and collectibles with zero platform fees. Features lazy minting, IPFS storage, and support for multiple token standards.",
    tags: ["NFT", "Web3", "IPFS"],
    links: [
      { label: "Launch App", url: "https://example.com" },
      { label: "Contract", url: "https://etherscan.io" }
    ]
  },
  {
    id: "3",
    name: "WEB3 ANALYTICS TOOL",
    description: "Developer tooling for tracking on-chain metrics, smart contract interactions, and wallet analytics. Real-time indexing across 15+ EVM chains.",
    tags: ["Analytics", "TypeScript", "GraphQL"],
    links: [
      { label: "Website", url: "https://example.com" },
      { label: "API Docs", url: "https://api.example.com" },
      { label: "GitHub", url: "https://github.com" }
    ]
  }
];
