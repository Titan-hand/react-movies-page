import Request from '../../../../Helpers/Resquests';

Request.login = jest.fn().mockResolvedValue({
    data: {
        ok: true,
        data: {
            token: 'token123'
        }
    }
});

Request.getInfoUserLogged = jest.fn().mockResolvedValue({
    name: 'John',
    lastName: 'Doe'
});

export default Request;