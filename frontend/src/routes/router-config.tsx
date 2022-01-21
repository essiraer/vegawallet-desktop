import { Network } from './network'
import { Wallet } from './wallet'
import { WalletImport } from './wallet-import'
import { Service } from './service'
import { Home } from './home'
import { NetworkImport } from './network-import'

export enum Paths {
  Home = '/',
  Service = '/service',
  Network = '/network',
  NetworkImport = '/network-import',
  Wallet = '/wallet',
  WalletImport = '/wallet-import'
}

const routerConfig = [
  {
    path: Paths.Service,
    name: 'Console',
    component: Service,
    exact: false
  },
  {
    path: Paths.NetworkImport,
    name: 'NetworkImport',
    component: NetworkImport,
    exact: false
  },
  {
    path: Paths.Network,
    name: 'Network',
    component: Network,
    exact: false
  },
  {
    path: Paths.WalletImport,
    name: 'WalletImport',
    component: WalletImport,
    exact: false
  },
  {
    path: Paths.Wallet,
    name: 'Wallet',
    component: Wallet,
    exact: false
  },
  {
    path: Paths.Home,
    name: 'Home',
    component: Home,
    exact: true
  }
]

export default routerConfig
