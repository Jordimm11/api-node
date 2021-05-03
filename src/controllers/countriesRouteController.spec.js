const countriesControllers = require('./countriesRouteController');

describe('CountriesRouteController tests', () => {
  const res = {
    status: jest.fn(),
    json: jest.fn(),
  };
  const req = {
    body: {
      name: 'countryName',
      code: 'CC',
    },
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('get method test', () => {
    it('should call res.status 200', () => {
      countriesControllers.get(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
    });
  });

  describe('post method test', () => {
    it('should call res.status 400 if there is no req.body.name', () => {
      req.body.name = null;
      res.send = jest.fn();

      countriesControllers.post(req, res);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.send).toHaveBeenCalledWith('name is required!');
    });
    it('should call res.status 201 if there is req.body.name', () => {
      req.body.name = 'countryName';
      res.send = jest.fn();

      countriesControllers.post(req, res);

      expect(res.status).toHaveBeenCalledWith(201);
    });
  });

  describe('put method test', () => {
    it('should call res.status 400 if there is no req.body.name', () => {
      req.body.name = null;
      res.send = jest.fn();

      countriesControllers.put(req, res);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.send).toHaveBeenCalledWith('error');
    });
    it('should call res.status 200 if there is req.body.name', () => {
      req.body.name = 'countryName';
      res.send = jest.fn();

      countriesControllers.put(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
    });
  });

  describe('delete method test', () => {
    it('should call res.status 400 if there is no req.body.name', () => {
      req.body.name = null;
      res.send = jest.fn();

      countriesControllers.deleter(req, res);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.send).toHaveBeenCalledWith('error');
    });
    it('should call res.status 200 if there is req.body.name', () => {
      req.body.name = 'countryName';
      res.send = jest.fn();

      countriesControllers.deleter(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
    });
  });
});
