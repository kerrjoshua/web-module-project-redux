
import {ADD_FAVORITE} from '../actions/favoritesActions'
import { TOGGLE_FAVORITES } from '../actions/favoritesActions'

const initialState = {
    favorites: [{
        id: 0,
        title: "The Godfather",
        director: "Francis Ford Coppola",
        metascore: 100,
        genre: "Drama",
        description: "War hero Michael is the prodigal son of aging but fearsome crime patriarch Don Vito Corleone. When Michael returns home only to be thrust into an all-too-familiar world of hitmen, corrupt cops, and simmering mafia rivalries, he is forced to choose between his own path and the Corleone family legacy."
      }],
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
        default:
            return state;
    }
}

export default reducer;