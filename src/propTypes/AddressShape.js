import PropTypes from 'prop-types'
import CountryType from './CountryType'

export default {
  addressId: PropTypes.string.isRequired,
  addressType: PropTypes.oneOf([
    'residential',
    'inStore',
    'commercial',
    'giftRegistry',
  ]).isRequired,
  city: PropTypes.string,
  complement: PropTypes.string,
  country: CountryType.isRequired,
  geoCoordinates: PropTypes.array,
  neighborhood: PropTypes.string,
  number: PropTypes.string,
  postalCode: PropTypes.string,
  receiverName: PropTypes.string,
  reference: PropTypes.string,
  state: PropTypes.string,
  street: PropTypes.string,
}