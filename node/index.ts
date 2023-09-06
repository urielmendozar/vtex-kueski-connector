import { PaymentProviderService } from '@vtex/payment-provider'

import KueskiConnector from './connector'

export default new PaymentProviderService({
  connector: KueskiConnector,
})
