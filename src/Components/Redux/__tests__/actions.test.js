import { SetCurrentUserInfo } from '../Actions/UserActions';
import { SetMovies } from '../Actions/MoviesActions';
// types
import { SET_CURRENT_USER_INFO } from '../Types/usersTypes';
import { SET_MOVIES } from '../Types/moviesTypes';

describe('Actions', () => {
    it('SetCurrentUserInfo', () => {
        const userInfoAction = SetCurrentUserInfo({
            name: 'John',
            lastName: 'Doe'
        });
        expect(userInfoAction).toEqual({ 
            type: SET_CURRENT_USER_INFO,
            payload: {
                name: 'John',
                lastName: 'Doe'
            }
        })
    });

    it('SetMovies', () => {
        const moviesAction = SetMovies(['movie1', 'movie2']);
        expect(moviesAction).toEqual({ 
            type: SET_MOVIES,
            payload: ['movie1', 'movie2']
        })
    });
});