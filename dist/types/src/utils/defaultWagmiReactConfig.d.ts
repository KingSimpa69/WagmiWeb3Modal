import '@web3modal/polyfills';
import type { ConfigOptions } from './defaultWagmiCoreConfig.js';
export declare function defaultWagmiConfig({ projectId, chains, metadata, enableInjected, enableCoinbase, enableEIP6963, enableEmail, enableWalletConnect }: ConfigOptions): import("@wagmi/core").Config<import("@wagmi/core/index-e744bbc2.js").P<import("viem").FallbackTransport>, import("@wagmi/core/index-e744bbc2.js").W> & {
    queryClient: import("@tanstack/query-core").QueryClient;
};
