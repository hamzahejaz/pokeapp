import axios from 'axios';
import { getRandomPokemonId } from '@/lib/pokeapi';

jest.mock('axios');

describe('PokeAPI', () => {
  describe('getRandomPokemonId', () => {
    it('should return a random pokemon id between 1 and 1025', () => {
      const id = getRandomPokemonId();
      expect(id).toBeGreaterThanOrEqual(1);
      expect(id).toBeLessThanOrEqual(1025);
    });

    it('should return different values on multiple calls', () => {
      const ids = new Set();
      for (let i = 0; i < 100; i++) {
        ids.add(getRandomPokemonId());
      }
      expect(ids.size).toBeGreaterThan(1);
    });
  });

});
