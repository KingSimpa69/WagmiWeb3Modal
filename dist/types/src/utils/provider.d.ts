import type { Chain, ChainProviderFn } from '@wagmi/core';
interface Options {
    projectId: string;
}
export declare function walletConnectProvider<C extends Chain = Chain>({ projectId }: Options): ChainProviderFn<C>;
export {};
