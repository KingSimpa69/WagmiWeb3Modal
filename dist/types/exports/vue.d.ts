import type { Web3ModalOptions } from '../src/client.js';
import { Web3Modal } from '../src/client.js';
export type { Web3ModalOptions } from '../src/client.js';
export declare function createWeb3Modal(options: Web3ModalOptions): Web3Modal;
export { useWeb3ModalTheme, useWeb3Modal, useWeb3ModalState, useWeb3ModalEvents } from '@web3modal/scaffold-vue';
export { EIP6963Connector } from '../src/connectors/EIP6963Connector.js';
export { defaultWagmiConfig } from '../src/utils/defaultWagmiCoreConfig.js';
