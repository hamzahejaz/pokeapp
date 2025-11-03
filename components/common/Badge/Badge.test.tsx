import { render, screen } from '@testing-library/react';
import { Badge } from './Badge';

describe('Badge', () => {
  it('renders label', () => {
    render(<Badge label="GRASS" color="#78C850" />);
    expect(screen.getByText('GRASS')).toBeInTheDocument();
  });

  it('applies background color', () => {
    render(<Badge label="FIRE" color="#F08030" />);
    const badge = screen.getByText('FIRE');
    expect(badge).toHaveStyle({ backgroundColor: '#F08030' });
  });

  it('renders different sizes', () => {
    const { rerender } = render(<Badge label="SMALL" color="#000" size="sm" />);
    expect(screen.getByText('SMALL')).toHaveClass('text-xs');

    rerender(<Badge label="MEDIUM" color="#000" size="md" />);
    expect(screen.getByText('MEDIUM')).toHaveClass('text-sm');

    rerender(<Badge label="LARGE" color="#000" size="lg" />);
    expect(screen.getByText('LARGE')).toHaveClass('text-base');
  });

  it('applies custom className', () => {
    render(<Badge label="TEST" color="#000" className="custom-class" />);
    expect(screen.getByText('TEST')).toHaveClass('custom-class');
  });

  it('uppercases the label', () => {
    render(<Badge label="electric" color="#F8D030" />);
    const badge = screen.getByText(/electric/i);
    expect(badge).toBeInTheDocument();
  });
});
