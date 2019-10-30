export const activateMenu = ({ isCurrent, isPartiallyCurrent }) => ({
  style: {
    background: isPartiallyCurrent ? 'blue' : "inherit",
    color: isPartiallyCurrent ? 'red' : "inherit"
  }
})