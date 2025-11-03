# Pokedex App

A modern, fully-featured Pokedex application built with Next.js 15, TypeScript, and Tailwind CSS. Search for Pokemon, view detailed stats, types, and evolution chains.

## Features

- Search Pokemon by name or ID
- Random Pokemon selector
- Dynamic background colors based on Pokemon type
- Detailed Pokemon information including:
  - Official artwork
  - Type badges with appropriate colors
  - Stats visualization with progress bars
  - Evolution chain with clickable navigation
  - Pokemon description
- Fully responsive design
- Error handling with custom 404 page
- Comprehensive test coverage
- Storybook component documentation

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Testing**: Jest + React Testing Library
- **Documentation**: Storybook
- **API**: PokeAPI (REST)
- **HTTP Client**: Axios

## Project Structure

```
pokemon-app/
├── app/
│   ├── layout.tsx              # Root layout
│   ├── page.tsx                # Home page with search
│   ├── not-found.tsx           # 404 error page
│   └── pokemon/[id]/
│       └── page.tsx            # Pokemon detail page
├── components/
│   ├── common/                 # Primitive components
│   │   ├── Badge/
│   │   ├── Button/
│   │   ├── Card/
│   │   ├── ErrorBoundary/
│   │   ├── Input/
│   │   ├── Spinner/
│   │   ├── StatBar/
│   │   └── Tabs/
│   └── compound/               # Composed components
│       ├── EvolutionsTab/
│       ├── PokemonCard/
│       ├── SearchForm/
│       ├── StatsTab/
│       └── TypeBadges/
├── hooks/
│   ├── usePokemon.ts          # Fetch single Pokemon
│   ├── usePokemonSearch.ts    # Search Pokemon
│   └── useEvolutions.ts       # Fetch evolution chain
├── lib/
│   ├── pokeapi.ts             # PokeAPI REST client
│   ├── constants.ts           # Type colors and mappings
│   └── utils.ts               # Helper functions
├── types/
│   └── index.ts               # TypeScript interfaces
└── __tests__/                 # Test files

```

## Getting Started

### Prerequisites

- Node.js 20+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd pokemon-app
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

### Development
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
```

### Testing
```bash
npm run test         # Run tests
npm run test:watch   # Run tests in watch mode
npm run test:coverage # Run tests with coverage report
```

### Storybook
```bash
npm run storybook           # Start Storybook dev server on port 6006
npm run build-storybook     # Build Storybook for deployment
```

### Linting
```bash
npm run lint         # Run ESLint
```

## Component Documentation

All components are documented in Storybook. Run `npm run storybook` to explore:

### Common Components
- **Button**: Primary/secondary variants with multiple sizes
- **Input**: Text input with validation
- **Card**: Container with optional background color
- **Badge**: Type badges with dynamic colors
- **Tabs**: Tab navigation UI
- **StatBar**: Stat visualization with progress bars
- **Spinner**: Loading indicator

### Compound Components
- **SearchForm**: Search input with search and random buttons
- **PokemonCard**: Pokemon image and name display
- **TypeBadges**: Multiple type badges
- **StatsTab**: Complete stats display
- **EvolutionsTab**: Evolution chain with navigation

## API Integration

This app uses the [PokeAPI](https://pokeapi.co) REST API:

- `GET /pokemon/{id or name}` - Get Pokemon data
- `GET /pokemon-species/{id}` - Get Pokemon species data
- `GET /evolution-chain/{id}` - Get evolution chain

## Type Colors

Pokemon types use the following color scheme:

| Type      | Color   |
|-----------|---------|
| Normal    | #A8A878 |
| Fire      | #F08030 |
| Water     | #6890F0 |
| Electric  | #F8D030 |
| Grass     | #78C850 |
| Ice       | #98D8D8 |
| Fighting  | #C03028 |
| Poison    | #A040A0 |
| Ground    | #E0C068 |
| Flying    | #A890F0 |
| Psychic   | #F85888 |
| Bug       | #A8B820 |
| Rock      | #B8A038 |
| Ghost     | #705898 |
| Dark      | #705848 |
| Dragon    | #7038F8 |
| Steel     | #B8B8D0 |
| Fairy     | #EE99AC |

## Testing

The project includes comprehensive test coverage:

- Unit tests for all components
- Integration tests for compound components
- API client tests
- Test coverage reporting

Run tests with:
```bash
npm run test
```

## Deployment

### Build for Production

```bash
npm run build
npm run start
```

### Deploy to Vercel

```bash
vercel deploy
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT

## Acknowledgments

- [PokeAPI](https://pokeapi.co) for providing the Pokemon data
- [Next.js](https://nextjs.org) team for the amazing framework
- [Tailwind CSS](https://tailwindcss.com) for the utility-first CSS framework
