import '@web3modal/polyfills';
import type { Chain } from '@wagmi/core';
export interface ConfigOptions {
    projectId: string;
    chains: Chain[];
    metadata?: {
        name?: string;
        description?: string;
        url?: string;
        icons?: string[];
        verifyUrl?: string;
    };
    enableInjected?: boolean;
    enableEIP6963?: boolean;
    enableCoinbase?: boolean;
    enableEmail?: boolean;
    enableWalletConnect?: boolean;
}
export declare function defaultWagmiConfig({ projectId, chains, metadata, enableInjected, enableCoinbase, enableEIP6963, enableEmail, enableWalletConnect }: ConfigOptions): import("@wagmi/core").Config<import("@wagmi/core/index-e744bbc2.js").P<import("viem").FallbackTransport>, import("@wagmi/core/index-e744bbc2.js").W>;
