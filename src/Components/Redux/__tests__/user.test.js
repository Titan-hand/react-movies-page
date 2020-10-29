// types
import { 
    SET_CURRENT_USER_INFO,
    REMOVE_CURRENT_USER_INFO 
} from '../Types/usersTypes';
// actions
import { 
    SetCurrentUserInfo,
    RemoveCurrentUserInfo
} from '../Actions/UserActions';
// reducers
import UserInformation from '../Reducers/UserInformation';

const userData = {
    name: 'Fulano',
    lastName: 'De tal', 
    age: 20
};


describe('Redux -> user', () => {
    // actions
    describe('user actions', () => {
        it('SetCurrentUserInfo', () => {
            const userInfoAction = SetCurrentUserInfo(userData);
            expect(userInfoAction).toEqual({ 
                type: SET_CURRENT_USER_INFO,
                payload: userData
            })
        });

        it('RemoveCurrentUserInfo', () => {
            const userRemoved = RemoveCurrentUserInfo();
            expect(userRemoved).toEqual({ 
                type: REMOVE_CURRENT_USER_INFO
            })
        });
    });

    // reducers
    describe('user reducers', () => {
        it('UserInformation default', () => {
            const state = UserInformation(userData, {});
            expect(state).toEqual(userData); 
        });

        it('UserInformation set user data', () => {
            const action = SetCurrentUserInfo(userData);
            const state = UserInformation({}, action);
            expect(state).toEqual({
                currentUserInfo: userData,
                isLoggedUser: true
            }) 
        });

        it('UserInformation remove user data', () => {
            const action = RemoveCurrentUserInfo();
            const state = UserInformation(userData, action); 
            expect(state).toEqual({
                currentUserInfo: null,
                isLoggedUser: false
            })
        });
    })



});