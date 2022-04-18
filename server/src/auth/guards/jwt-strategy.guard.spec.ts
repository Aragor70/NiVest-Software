import { JwtStrategy } from './jwt.strategy';

describe('JwtStrategyGuard', () => {
  it('should be defined', () => {
    expect(new JwtStrategy()).toBeDefined();
  });
});
