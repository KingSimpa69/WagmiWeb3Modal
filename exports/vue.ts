import { getWeb3Modal } from '@web3modal/scaffold-vue'
import type { Web3ModalOptions } from '../src/client.js'
import { Web3Modal } from '../src/client.js'
import { ConstantsUtil } from '@web3modal/scaffold-utils'

// -- Types -------------------------------------------------------------------
export type { Web3ModalOptions } from '../src/client.js'

// -- Setup -------------------------------------------------------------------
let modal: Web3Modal | undefined = undefined

export function createWeb3Modal(options: Web3ModalOptions) {
  if (!modal) {
    modal = new Web3Modal({
      ...options,
      _sdkVersion: `vue-wagmi-${ConstantsUtil.VERSION}`
    })
    getWeb3Modal(modal)
  }

  return modal
}

// -- Composites --------------------------------------------------------------
export {
  useWeb3ModalTheme,
  useWeb3Modal,
  useWeb3ModalState,
  useWeb3ModalEvents
} from '@web3modal/scaffold-vue'

// -- Universal Exports -------------------------------------------------------
export { EIP6963Connector } from '../src/connectors/EIP6963Connector.js'
export { defaultWagmiConfig } from '../src/utils/defaultWagmiCoreConfig.js'
