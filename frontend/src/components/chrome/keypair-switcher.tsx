import React from 'react'
import { KeyPair, Wallet } from '../../contexts/global/global-context'
import { ButtonUnstyled } from '../button-unstyled'
import { Kebab } from '../icons/kebab'
import { Dropdown, DropdownMenu, DropdownMenuItem } from '../popovers'

interface KeypairSwitcherProps {
  wallet: Wallet
  onSelect: (kp: KeyPair) => void
}

export function KeypairSwitcher({ wallet, onSelect }: KeypairSwitcherProps) {
  return (
    <Dropdown
      content={
        <DropdownMenu>
          {wallet.keypairs?.map(kp => (
            <DropdownMenuItem key={kp.publicKey}>
              <ButtonUnstyled onClick={() => onSelect(kp)}>
                {kp.name}{' '}
                <span className='text-muted'>{kp.publicKeyShort}</span>
              </ButtonUnstyled>
            </DropdownMenuItem>
          ))}
        </DropdownMenu>
      }>
      <ButtonUnstyled>
        <Kebab style={{ width: 15 }} />
      </ButtonUnstyled>
    </Dropdown>
  )
}
