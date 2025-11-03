import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { SearchForm } from './SearchForm';

describe('SearchForm', () => {
  it('renders input and buttons', () => {
    render(<SearchForm onSearch={() => {}} onRandom={() => {}} />);

    expect(screen.getByPlaceholderText('Pokemon Name or ID')).toBeInTheDocument();
    expect(screen.getByText('Search')).toBeInTheDocument();
    expect(screen.getByText('Random')).toBeInTheDocument();
  });

  it('handles search button click', async () => {
    const handleSearch = jest.fn();
    const user = userEvent.setup();

    render(<SearchForm onSearch={handleSearch} onRandom={() => {}} />);

    const input = screen.getByPlaceholderText('Pokemon Name or ID');
    await user.type(input, 'pikachu');
    await user.click(screen.getByText('Search'));

    expect(handleSearch).toHaveBeenCalledWith('pikachu');
  });

  it('handles random button click', async () => {
    const handleRandom = jest.fn();
    const user = userEvent.setup();

    render(<SearchForm onSearch={() => {}} onRandom={handleRandom} />);

    await user.click(screen.getByText('Random'));
    expect(handleRandom).toHaveBeenCalledTimes(1);
  });

  it('handles enter key press', async () => {
    const handleSearch = jest.fn();
    const user = userEvent.setup();

    render(<SearchForm onSearch={handleSearch} onRandom={() => {}} />);

    const input = screen.getByPlaceholderText('Pokemon Name or ID');
    await user.type(input, 'bulbasaur{Enter}');

    expect(handleSearch).toHaveBeenCalledWith('bulbasaur');
  });

  it('trims whitespace from query', async () => {
    const handleSearch = jest.fn();
    const user = userEvent.setup();

    render(<SearchForm onSearch={handleSearch} onRandom={() => {}} />);

    const input = screen.getByPlaceholderText('Pokemon Name or ID');
    await user.type(input, '  charmander  ');
    await user.click(screen.getByText('Search'));

    expect(handleSearch).toHaveBeenCalledWith('charmander');
  });

  it('disables search button when input is empty', () => {
    render(<SearchForm onSearch={() => {}} onRandom={() => {}} />);

    const searchButton = screen.getByText('Search');
    expect(searchButton).toBeDisabled();
  });

  it('disables all inputs when loading', () => {
    render(<SearchForm onSearch={() => {}} onRandom={() => {}} loading={true} />);

    expect(screen.getByPlaceholderText('Pokemon Name or ID')).toBeDisabled();
    expect(screen.getByText('Search')).toBeDisabled();
    expect(screen.getByText('Random')).toBeDisabled();
  });
});
