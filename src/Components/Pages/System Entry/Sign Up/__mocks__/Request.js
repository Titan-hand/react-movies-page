import Request from '../../../../Helpers/Resquests';

Request.signup = jest.fn().mockResolvedValue({
    data: {
        ok: true,
        data: {}
    }
});


export default Request;