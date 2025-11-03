import { render, screen } from '@testing-library/react';
import { EvolutionsTab } from './EvolutionsTab';
import { useEvolutions } from '@/hooks/useEvolutions';

jest.mock('@/hooks/useEvolutions');
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => <img {...props} />,
}));
jest.mock('next/link', () => ({
  __esModule: true,
  default: ({ children, href }: any) => <a href={href}>{children}</a>,
}));

const mockUseEvolutions = useEvolutions as jest.MockedFunction<typeof useEvolutions>;

describe('EvolutionsTab', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('displays loading spinner when loading', () => {
    mockUseEvolutions.mockReturnValue({
      evolutions: [],
      loading: true,
      error: null,
    });

    render(<EvolutionsTab evolutionChainUrl="test-url" />);
    const spinner = document.querySelector('.animate-spin');
    expect(spinner).toBeInTheDocument();
  });

  it('displays error message when there is an error', () => {
    mockUseEvolutions.mockReturnValue({
      evolutions: [],
      loading: false,
      error: new Error('Failed to fetch'),
    });

    render(<EvolutionsTab evolutionChainUrl="test-url" />);
    expect(screen.getByText('Failed to load evolutions')).toBeInTheDocument();
  });

  it('displays evolutions when data is loaded', () => {
    mockUseEvolutions.mockReturnValue({
      evolutions: [
        { id: 1, name: 'bulbasaur', image: 'bulbasaur.png' },
        { id: 2, name: 'ivysaur', image: 'ivysaur.png' },
        { id: 3, name: 'venusaur', image: 'venusaur.png' },
      ],
      loading: false,
      error: null,
    });

    render(<EvolutionsTab evolutionChainUrl="test-url" />);

    expect(screen.getByText('Bulbasaur')).toBeInTheDocument();
    expect(screen.getByText('Ivysaur')).toBeInTheDocument();
    expect(screen.getByText('Venusaur')).toBeInTheDocument();
  });

  it('renders arrows between evolutions', () => {
    mockUseEvolutions.mockReturnValue({
      evolutions: [
        { id: 1, name: 'bulbasaur', image: 'bulbasaur.png' },
        { id: 2, name: 'ivysaur', image: 'ivysaur.png' },
      ],
      loading: false,
      error: null,
    });

    const { container } = render(<EvolutionsTab evolutionChainUrl="test-url" />);
    const arrows = container.querySelectorAll('svg');
    expect(arrows.length).toBe(1);
  });

  it('displays message when no evolutions available', () => {
    mockUseEvolutions.mockReturnValue({
      evolutions: [],
      loading: false,
      error: null,
    });

    render(<EvolutionsTab evolutionChainUrl="test-url" />);
    expect(screen.getByText('No evolution data available')).toBeInTheDocument();
  });
});
