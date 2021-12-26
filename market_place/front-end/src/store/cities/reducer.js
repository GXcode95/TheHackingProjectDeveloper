import {
  FETCH_ALL_CITIES_SUCCESS,
} from './types'

const initialState = {
  cities: []
}

const citiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_CITIES_SUCCESS:
      return {
        ...state,
        cities: action.cities
      };
    default:
      return state;
  }
}
export default citiesReducer;