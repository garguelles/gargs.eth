'use client';

import { useEffect, useState } from 'react';
import { ethers } from 'ethers';

export default function PoapsPage() {
	const [loading, setLoading] = useState(true);
	const [balance, setBalance] = useState<string | null>(null);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		async function checkPoapBalance() {
			try {
				console.log('Starting POAP balance check for gargs.eth...');

				// Use Ethereum mainnet provider for ENS resolution
				const mainnetProvider = new ethers.JsonRpcProvider('https://eth.llamarpc.com');

				// Resolve ENS name to address on Ethereum mainnet
				const walletAddress = await mainnetProvider.resolveName('gargs.eth');
				console.log('Resolved gargs.eth to address:', walletAddress);

				if (!walletAddress) {
					throw new Error('Could not resolve gargs.eth');
				}

				// Use Gnosis Chain provider for POAP contract
				const gnosisProvider = new ethers.JsonRpcProvider('https://rpc.gnosischain.com');
				const poapContract = new ethers.Contract(
					'0x22c1f6050e56d2876009903609a2cc3fef83b415',
					['function balanceOf(address owner) view returns (uint256)'],
					gnosisProvider
				);

				const balance = await poapContract.balanceOf(walletAddress);
				const balanceString = balance.toString();

				console.log('POAP Balance for gargs.eth:', balanceString);
				console.log('Raw balance object:', balance);

				setBalance(balanceString);
				setLoading(false);
			} catch (err) {
				console.error('Error checking POAP balance:', err);
				setError(err instanceof Error ? err.message : 'Unknown error');
				setLoading(false);
			}
		}

		checkPoapBalance();
	}, []);

	return (
		<div className="min-h-screen bg-background flex items-center justify-center p-4">
			<div className="max-w-2xl w-full space-y-6 text-center">
				<h1>POAP Balance Checker</h1>

				{loading && <p>Loading POAP balance...</p>}
				{error && <p className="text-red-500">Error: {error}</p>}
				{balance && (
					<div>
						<p className="text-lg">Balance: {balance} POAPs</p>
						<p className="text-sm text-muted-foreground">Check the console for detailed logs</p>
					</div>
				)}
			</div>
		</div>
	);
}
