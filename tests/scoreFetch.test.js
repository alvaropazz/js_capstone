import { get, save } from '../src/objects/scoreFetch';
jest.mock('../src/objects/scoreFetch');

describe('Score Service tests', () => {
  get.mockResolvedValue({
    data: {
      result: [
        { name: 'test1', score: 15 },
        { name: 'test2', score: 30 }
      ],
    },
  });

  save.mockImplementation((name, score) => new Promise((resolve, reject) => {
    if (!name) {
      reject({ result: 'Name not provided' });
    } else if (!score) {
      reject({ result: 'Score invalid' });
    } else {
      resolve({ result: 'Succcess' });
    }
  }));

  test('should fetch users', () => {
    get().then(response => expect(response).toEqual({
      data: {
        result: [
          { name: 'test1', score: 15 },
          { name: 'test2', score: 30 }
        ],
      },
    }));
  });

  test('should create new score', () => {
    save('test2', 15).then(response => expect(response)
      .toEqual({ result: 'Succcess' }));
  });

  test('When a name is not giving, it should reject', () => {
    save().catch(err => expect(err)
      .toEqual({ result: 'Name not provided' }));
  });

  test('When a score is not giving, it should reject', () => {
    save('test2').catch(err => expect(err)
      .toEqual({ result: 'Score invalid' }));
  });
});