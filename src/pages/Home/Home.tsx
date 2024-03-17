import { FC } from 'react'
import { useWeb3Modal, useWeb3ModalState } from '@web3modal/wagmi/react'
import { useAccount, useDisconnect } from 'wagmi'
import { formatWalletAddress } from '../../utils/wallet.ts'

export const Home: FC = () => {
  const { open, close } = useWeb3Modal()
  const { address, isConnecting, isDisconnected, status } = useAccount()
  const { disconnect } = useDisconnect()
  const walletAddress = formatWalletAddress(address || '')

  const handleClick = (event) => {
    console.log('status is: ' + status)
    if (status === 'connected') {
      console.log('attempting to close')
      disconnect()
    } else {
      console.log('attempting to open')
      open()
    }
  }

  return (
    <div className="w-full h-screen flex flex-col align-middle text-center justify-center bg-[#27365E]">
      <div className="text-9xl">Welcome DaVinci</div>
      <button onClick={handleClick}>{status === 'connected' ? walletAddress : 'Connect'}</button>
    </div>
  )
}
