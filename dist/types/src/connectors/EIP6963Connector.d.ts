import type { Chain, WindowProvider } from '@wagmi/core';
import { InjectedConnector } from '@wagmi/core/connectors/injected';
interface Info {
    uuid: string;
    name: string;
    icon: string;
    rdns: string;
}
interface EIP6963Wallet {
    info: Info;
    provider: WindowProvider;
}
interface ConnectOptions {
    chainId?: number;
}
interface Config {
    chains?: Chain[];
}
export declare class EIP6963Connector extends InjectedConnector {
    #private;
    readonly id = "eip6963";
    readonly name = "EIP6963";
    constructor(config: Config);
    connect(options: ConnectOptions): Promise<{
        account: `0x${string}`;
        chain: {
            id: number;
            unsupported: boolean;
        };
    }>;
    protected onAccountsChanged: (accounts: string[]) => void;
    disconnect(): Promise<void>;
    isAuthorized(eip6963Wallet?: EIP6963Wallet): Promise<boolean>;
    getProvider(): Promise<WindowProvider | undefined>;
    setEip6963Wallet(eip6963Wallet: EIP6963Wallet): void;
}
export {};
