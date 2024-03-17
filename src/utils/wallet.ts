/**
 * Formats a wallet address to show the first 4 characters, an ellipsis, and the last 4 characters.
 *
 * @param {string} address The wallet address to format.
 * @return {string} The formatted wallet address.
 */
export function formatWalletAddress(address: string): string {
  // Ensure the address is a string and has a sufficient length
  if (address.length < 9) {
    console.error('Invalid address or address too short.')
    return address
  }

  // Extract the first 4 characters, ellipsis, and the last 4 characters
  return `${address.slice(0, 4)}...${address.slice(-4)}`
}
