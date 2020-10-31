// default mock for axios library

export default {
    get: jest.fn().mockResolvedValue({ data: {} }),

    post: jest.fn().mockResolvedValue({ data: {} }),

    CancelToken: {
        source: jest.fn( () => ({ token: 'cancelToken123' }))
    }
}