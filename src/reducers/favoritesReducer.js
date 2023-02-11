
import {ADD_FAVORITE} from '../actions/favoritesActions'
import { TOGGLE_FAVORITES } from '../actions/favoritesActions'
import { REMOVE_FAVORITE } from '../actions/favoritesActions'

const initialState = {
    favorites: [],
    displayFavorites: false
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_FAVORITE:
            return { ...state,
                favorites: [...state.favorites, action.payload]
            }
        case TOGGLE_FAVORITES:
            return { ...state,
                displayFavorites: !state.displayFavorites
            }
        case REMOVE_FAVORITE:
            return { ...state,
                favorites: state.favorites.filter(movie => !movie.id === action.payload)
            }
        default:
            return state;
    }
}

export default reducer;