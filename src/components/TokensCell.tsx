import React from 'react'
import BTC from '~/icons/btc'
import integerFormatter from '~/lib/integerFormatter'

interface Props {
  tokens: number | null
}

function TokensCell({ tokens }: Props) {
  let displayValue = '0'
  if (tokens !== null) {
    displayValue = integerFormatter(tokens, 5)
  }

  return (
    <div className="flex flex-row justify-end align-middle">
      {displayValue}
      <div className="my-auto pl-1">
        <BTC />
      </div>
    </div>
  )
}

export default TokensCell
