import { PokemonTypeName, StatName, StatDisplayName } from '@/types';

// Pokemon Type Colors
export const POKEMON_TYPE_COLORS: Record<PokemonTypeName, string> = {
  normal: '#A8A878',
  water: '#6890F0',
  fire: '#F08030',
  grass: '#78C850',
  electric: '#F8D030',
  ice: '#98D8D8',
  fighting: '#C03028',
  poison: '#A040A0',
  ground: '#E0C068',
  flying: '#A890F0',
  psychic: '#F85888',
  bug: '#A8B820',
  rock: '#B8A038',
  ghost: '#705898',
  dark: '#705848',
  dragon: '#7038F8',
  steel: '#B8B8D0',
  fairy: '#EE99AC',
};

// Stat name mapping for display
export const STAT_DISPLAY_NAMES: Record<StatName, StatDisplayName> = {
  hp: 'HP',
  attack: 'ATK',
  defense: 'DEF',
  'special-attack': 'SATK',
  'special-defense': 'SDEF',
  speed: 'SPD',
};

// Stat order for consistent display
export const STAT_ORDER: StatName[] = [
  'hp',
  'attack',
  'defense',
  'special-attack',
  'special-defense',
  'speed',
];

// Maximum stat value for progress bar calculation
export const MAX_STAT_VALUE = 255;

// Total number of Pokemon in the PokeAPI (Gen 1-9)
export const TOTAL_POKEMON_COUNT = 1025;

// Default Pokemon image when sprite is not available
export const DEFAULT_POKEMON_IMAGE = '/pokeball.png';
