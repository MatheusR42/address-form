import { NEIGHBORHOOD } from '../constants'

export default {
  postalCodeFrom: NEIGHBORHOOD,
  fields: [
    {
      name: 'street',
      label: 'street',
      required: true,
      size: 'xlarge',
    },
    {
      name: 'number',
      label: 'number',
      required: true,
      size: 'mini',
    },
    {
      name: 'complement',
      label: 'complement',
      size: 'large',
    },
    {
      name: 'state',
      label: 'department',
      required: true,
      size: 'large',
      isUpperCase: false,
    },
    {
      name: 'city',
      label: 'province',
      required: true,
      size: 'large',
    },
    {
      name: 'neighborhood',
      label: 'district',
      required: true,
      size: 'large',
    },
  ],
}