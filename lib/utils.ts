import { PokemonTypeName, StatName } from '@/types';
import { POKEMON_TYPE_COLORS, STAT_DISPLAY_NAMES } from './constants';

export function getTypeColor(typeName: string): string {
  const normalizedType = typeName.toLowerCase() as PokemonTypeName;
  return POKEMON_TYPE_COLORS[normalizedType] || '#A8A878';
}

export function getStatDisplayName(statName: string): string {
  return STAT_DISPLAY_NAMES[statName as StatName] || statName.toUpperCase();
}

export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function formatPokemonName(name: string): string {
  return name
    .split('-')
    .map(word => capitalize(word))
    .join(' ');
}

export function padNumber(num: number, length: number): string {
  return num.toString().padStart(length, '0');
}

export function formatPokemonId(id: number): string {
  return padNumber(id, 3);
}

// Extract Pokemon ID from species/pokemon URLs
export function getPokemonIdFromUrl(url: string): number {
  const matches = url.match(/\/pokemon(?:-species)?\/(\d+)\//);
  return matches ? parseInt(matches[1], 10) : 0;
}

export function getEvolutionChainIdFromUrl(url: string): number {
  const matches = url.match(/\/evolution-chain\/(\d+)\//);
  return matches ? parseInt(matches[1], 10) : 0;
}

export function getEnglishFlavorText(flavorTextEntries: any[]): string {
  const englishEntry = flavorTextEntries.find(
    (entry) => entry.language.name === 'en'
  );
  return englishEntry
    ? englishEntry.flavor_text.replace(/\f/g, ' ').replace(/\n/g, ' ')
    : 'No description available.';
}

export function calculateStatPercentage(value: number, maxValue: number = 255): number {
  return Math.min(Math.round((value / maxValue) * 100), 100);
}

export function isValidPokemonIdentifier(value: string): boolean {
  if (!value || value.trim() === '') return false;

  const numValue = parseInt(value, 10);
  if (!isNaN(numValue) && numValue > 0 && numValue <= 1025) {
    return true;
  }

  return /^[a-zA-Z0-9-]+$/.test(value);
}

// Color manipulation utilities
export function lightenColor(hex: string, percent: number): string {
  const num = parseInt(hex.replace('#', ''), 16);
  const amt = Math.round(2.55 * percent);
  const R = (num >> 16) + amt;
  const G = (num >> 8 & 0x00FF) + amt;
  const B = (num & 0x0000FF) + amt;

  return '#' + (
    0x1000000 +
    (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 +
    (G < 255 ? (G < 1 ? 0 : G) : 255) * 0x100 +
    (B < 255 ? (B < 1 ? 0 : B) : 255)
  ).toString(16).slice(1);
}

export function darkenColor(hex: string, percent: number): string {
  const num = parseInt(hex.replace('#', ''), 16);
  const amt = Math.round(2.55 * percent);
  const R = (num >> 16) - amt;
  const G = (num >> 8 & 0x00FF) - amt;
  const B = (num & 0x0000FF) - amt;

  return '#' + (
    0x1000000 +
    (R > 0 ? R : 0) * 0x10000 +
    (G > 0 ? G : 0) * 0x100 +
    (B > 0 ? B : 0)
  ).toString(16).slice(1);
}

export function getContrastTextColor(hexColor: string): string {
  const hex = hexColor.replace('#', '');
  const r = parseInt(hex.substr(0, 2), 16);
  const g = parseInt(hex.substr(2, 2), 16);
  const b = parseInt(hex.substr(4, 2), 16);

  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

  return luminance > 0.5 ? '#000000' : '#FFFFFF';
}
