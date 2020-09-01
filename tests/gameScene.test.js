import GameScene from '../src/scenes/gameScene';

let game;
beforeEach(() => {
  game = new GameScene();
});

describe('movePlayer', () => {
  it('Initially calls set velocity with 0', () => {
    game.player = {
      setVelocity: jest.fn(),
      setVelocityX: jest.fn(),
      setVelocityY: jest.fn(),
    };
    game.cursors = {
      left: { isDown: false },
      right: { isDown: false },
      up: { isDown: false },
      down: { isDown: false },
    };
    game.movePlayer();
    expect(game.player.setVelocity).toHaveBeenCalledWith(0);
  });

  it('Calls setVelocityX with negative speed if the left key is down', () => {
    game.player = {
      setVelocity: jest.fn(),
      setVelocityX: jest.fn(),
      setVelocityY: jest.fn(),
    };
    game.cursors = {
      left: { isDown: true },
      right: { isDown: false },
      up: { isDown: false },
      down: { isDown: false },
    };
    game.movePlayer();
    expect(game.player.setVelocityX).toHaveBeenCalledWith(-game.speed);
  });

  it('Calls setVelocityX with speed if the right key is down', () => {
    game.player = {
      setVelocity: jest.fn(),
      setVelocityX: jest.fn(),
      setVelocityY: jest.fn(),
    };
    game.cursors = {
      left: { isDown: false },
      right: { isDown: true },
      up: { isDown: false },
      down: { isDown: false },
    };
    game.movePlayer();
    expect(game.player.setVelocityX).toHaveBeenCalledWith(game.speed);
  });

  it('Calls setVelocityY with negative speed if the up key is down', () => {
    game.player = {
      setVelocity: jest.fn(),
      setVelocityX: jest.fn(),
      setVelocityY: jest.fn(),
    };
    game.cursors = {
      left: { isDown: false },
      right: { isDown: false },
      up: { isDown: true },
      down: { isDown: false },
    };
    game.movePlayer();
    expect(game.player.setVelocityY).toHaveBeenCalledWith(-game.speed);
  });

  it('Calls setVelocityY with speed if the up key is down', () => {
    game.player = {
      setVelocity: jest.fn(),
      setVelocityX: jest.fn(),
      setVelocityY: jest.fn(),
    };
    game.cursors = {
      left: { isDown: false },
      right: { isDown: false },
      up: { isDown: false },
      down: { isDown: true },
    };
    game.movePlayer();
    expect(game.player.setVelocityY).toHaveBeenCalledWith(game.speed);
  });
});