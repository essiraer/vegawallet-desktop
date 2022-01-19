import React from 'react'
import { Redirect, useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { WalletPaths } from '.'
import { BreakText } from '../../components/break-text'
import { BulletHeader } from '../../components/bullet-header'
import { Colors } from '../../config/colors'
import { useGlobal } from '../../contexts/global/global-context'
import { Paths } from '../router-config'

export function WalletKeyPair() {
  const {
    state: { wallet }
  } = useGlobal()
  const { pubkey } = useParams<{ pubkey: string }>()
  const keypair = wallet?.keypairs?.find(kp => kp.publicKey === pubkey)

  if (!keypair) {
    return <Redirect to={Paths.Home} />
  }

  return (
    <>
      <div>
        <Link to={WalletPaths.Home}>Back</Link>
      </div>
      <BulletHeader tag='h1'>
        Keypair name:{' '}
        <span style={{ color: Colors.TEXT_COLOR_DEEMPHASISE }}>
          {keypair.name}
        </span>
      </BulletHeader>
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <td>{keypair.name}</td>
          </tr>
          <tr>
            <th>Public key</th>
            <td>
              <BreakText>{keypair.publicKey}</BreakText>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  )
}
