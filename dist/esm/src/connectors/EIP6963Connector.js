var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _EIP6963Connector_defaultProvider, _EIP6963Connector_eip6963Wallet;
import { InjectedConnector } from '@wagmi/core/connectors/injected';
import { getAddress } from 'viem';
const connectedRdnsKey = 'connectedRdns';
export class EIP6963Connector extends InjectedConnector {
    constructor(config) {
        super({ chains: config.chains, options: { shimDisconnect: true } });
        this.id = 'eip6963';
        this.name = 'EIP6963';
        _EIP6963Connector_defaultProvider.set(this, undefined);
        _EIP6963Connector_eip6963Wallet.set(this, undefined);
        this.onAccountsChanged = (accounts) => {
            if (accounts.length === 0) {
                this.storage?.removeItem(connectedRdnsKey);
                this.emit('disconnect');
            }
            else if (accounts[0]) {
                this.emit('change', {
                    account: getAddress(accounts[0])
                });
            }
        };
        __classPrivateFieldSet(this, _EIP6963Connector_defaultProvider, this.options.getProvider(), "f");
    }
    async connect(options) {
        const data = await super.connect(options);
        if (__classPrivateFieldGet(this, _EIP6963Connector_eip6963Wallet, "f")) {
            this.storage?.setItem(connectedRdnsKey, __classPrivateFieldGet(this, _EIP6963Connector_eip6963Wallet, "f").info.rdns);
        }
        return data;
    }
    async disconnect() {
        await super.disconnect();
        this.storage?.removeItem(connectedRdnsKey);
        __classPrivateFieldSet(this, _EIP6963Connector_eip6963Wallet, undefined, "f");
    }
    async isAuthorized(eip6963Wallet) {
        const connectedEIP6963Rdns = this.storage?.getItem(connectedRdnsKey);
        if (connectedEIP6963Rdns) {
            if (__classPrivateFieldGet(this, _EIP6963Connector_eip6963Wallet, "f") && connectedEIP6963Rdns === __classPrivateFieldGet(this, _EIP6963Connector_eip6963Wallet, "f").info.rdns) {
                const provider = __classPrivateFieldGet(this, _EIP6963Connector_eip6963Wallet, "f").provider;
                const accounts = await provider.request({ method: 'eth_accounts' });
                if (accounts.length) {
                    return true;
                }
            }
            if (eip6963Wallet) {
                __classPrivateFieldSet(this, _EIP6963Connector_eip6963Wallet, eip6963Wallet, "f");
            }
        }
        return super.isAuthorized();
    }
    async getProvider() {
        return Promise.resolve(__classPrivateFieldGet(this, _EIP6963Connector_eip6963Wallet, "f")?.provider ?? __classPrivateFieldGet(this, _EIP6963Connector_defaultProvider, "f"));
    }
    setEip6963Wallet(eip6963Wallet) {
        __classPrivateFieldSet(this, _EIP6963Connector_eip6963Wallet, eip6963Wallet, "f");
    }
}
_EIP6963Connector_defaultProvider = new WeakMap(), _EIP6963Connector_eip6963Wallet = new WeakMap();
//# sourceMappingURL=EIP6963Connector.js.map