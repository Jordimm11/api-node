const countryControllers = require('./countryRouteController');

describe('CountryRouteController tests', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('get method test', () => {
    it('should call res.status 200 if match country code', () => {
      const req = {
        params: {
          codeId: 'AR',
        },
      };
      const res = {
        json: jest.fn(),
        status: jest.fn(),
        send: jest.fn(),
      };

      countryControllers.get(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
    });

    it('should call res.status 404 if not found country code', () => {
      const req = {
        params: {
          codeId: null,
        },
      };
      const res = {
        json: jest.fn(),
        status: jest.fn(),
        send: jest.fn(),
      };

      countryControllers.get(req, res);

      expect(res.status).toHaveBeenCalledWith(404);
    });
  });
});
