import {
  FETCH_ALL_CITIES_SUCCESS,
} from './types'

export const fetchAllCitiesSuccess = (cities) => {
  return {
    type: FETCH_ALL_CITIES_SUCCESS,
    cities
  }
}
