// types
import { SET_MOVIES } from '../Types/moviesTypes';
// actions
import { SetMovies } from '../Actions/MoviesActions';
// reducers
import Movies from '../Reducers/Movies';

const moviesData = [
    {name: 'movie1', year: 2019},
    {name: 'movie2', year: 2020}
];

describe('Redux -> movies', () => {
    describe('movies actions', () => {
        it('SetMovies', () => {
            const moviesAction = SetMovies(moviesData);
            expect(moviesAction).toEqual({ 
                type: SET_MOVIES,
                payload: moviesData
            })
        });
    })

    describe('movies reducers', () => {
        it('Movies default type', () => {
            const state = Movies(moviesData, {});
            expect(state).toEqual(moviesData);
        });

        it('Movies set movies', () => {
            const action = SetMovies(moviesData);
            const state = Movies([], action);
            expect(state).toEqual({
                movies: moviesData
            });
        })
    })

});