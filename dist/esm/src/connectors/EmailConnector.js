import { Connector } from '@wagmi/core';
import { W3mFrameProvider } from '@web3modal/wallet';
import { createWalletClient, custom, SwitchChainError } from 'viem';
export class EmailConnector extends Connector {
    constructor(config) {
        super(config);
        this.id = 'w3mEmail';
        this.name = 'Web3Modal Email';
        this.ready = true;
        this.provider = {};
        if (typeof window !== 'undefined') {
            this.provider = new W3mFrameProvider(config.options.projectId);
        }
    }
    async getProvider() {
        return Promise.resolve(this.provider);
    }
    async connect(options = {}) {
        const { address, chainId } = await this.provider.connect({ chainId: options.chainId });
        return {
            account: address,
            chain: {
                id: chainId,
                unsupported: this.isChainUnsupported(1)
            }
        };
    }
    async switchChain(chainId) {
        try {
            const chain = this.chains.find(c => c.id === chainId);
            if (!chain) {
                throw new SwitchChainError(new Error('chain not found on connector.'));
            }
            await this.provider.switchNetwork(chainId);
            const unsupported = this.isChainUnsupported(chainId);
            this.emit('change', { chain: { id: chainId, unsupported } });
            return chain;
        }
        catch (error) {
            if (error instanceof Error) {
                throw new SwitchChainError(error);
            }
            throw error;
        }
    }
    async disconnect() {
        await this.provider.disconnect();
    }
    async getAccount() {
        const { address } = await this.provider.connect();
        return address;
    }
    async getChainId() {
        const { chainId } = await this.provider.getChainId();
        return chainId;
    }
    async getWalletClient() {
        const { address, chainId } = await this.provider.connect();
        return Promise.resolve(createWalletClient({
            account: address,
            chain: { id: chainId },
            transport: custom(this.provider)
        }));
    }
    async isAuthorized() {
        const { isConnected } = await this.provider.isConnected();
        return isConnected;
    }
    onAccountsChanged() {
    }
    onChainChanged() {
    }
    onDisconnect() {
    }
}
//# sourceMappingURL=EmailConnector.js.map