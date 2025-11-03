import { render, screen, fireEvent } from '@testing-library/react';
import { BackButton } from './BackButton';

describe('BackButton', () => {
  it('renders as link by default', () => {
    render(<BackButton />);
    const link = screen.getByRole('link');
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/');
  });

  it('renders with custom href', () => {
    render(<BackButton href="/custom" />);
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/custom');
  });

  it('renders as button when onClick is provided', () => {
    const handleClick = jest.fn();
    render(<BackButton onClick={handleClick} />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  it('calls onClick when clicked', () => {
    const handleClick = jest.fn();
    render(<BackButton onClick={handleClick} />);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('displays back arrow symbol', () => {
    render(<BackButton />);
    expect(screen.getByText('<')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(<BackButton className="custom-class" />);
    const link = screen.getByRole('link');
    expect(link).toHaveClass('custom-class');
  });
});
