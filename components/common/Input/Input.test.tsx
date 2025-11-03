import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Input } from './Input';

describe('Input', () => {
  it('renders with placeholder', () => {
    render(<Input placeholder="Enter text" />);
    expect(screen.getByPlaceholderText('Enter text')).toBeInTheDocument();
  });

  it('handles value changes', async () => {
    const handleChange = jest.fn();
    const user = userEvent.setup();

    render(<Input onChange={handleChange} />);
    const input = screen.getByRole('textbox');

    await user.type(input, 'pikachu');
    expect(handleChange).toHaveBeenCalled();
  });

  it('renders controlled input', () => {
    const { rerender } = render(<Input value="bulbasaur" onChange={() => {}} />);
    const input = screen.getByRole('textbox') as HTMLInputElement;
    expect(input.value).toBe('bulbasaur');

    rerender(<Input value="charmander" onChange={() => {}} />);
    expect(input.value).toBe('charmander');
  });

  it('handles disabled state', () => {
    render(<Input disabled />);
    const input = screen.getByRole('textbox');
    expect(input).toBeDisabled();
  });

  it('applies custom className', () => {
    render(<Input className="custom-class" />);
    expect(screen.getByRole('textbox')).toHaveClass('custom-class');
  });

  it('supports different input types', () => {
    const { rerender } = render(<Input type="number" />);
    expect(screen.getByRole('spinbutton')).toBeInTheDocument();

    rerender(<Input type="email" />);
    const emailInput = document.querySelector('input[type="email"]');
    expect(emailInput).toBeInTheDocument();
  });
});
