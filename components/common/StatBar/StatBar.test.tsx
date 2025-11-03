import { render, screen } from '@testing-library/react';
import { StatBar } from './StatBar';

describe('StatBar', () => {
  it('renders stat name', () => {
    render(<StatBar name="HP" value={100} />);
    expect(screen.getByText('HP')).toBeInTheDocument();
  });

  it('renders stat value with padding', () => {
    render(<StatBar name="ATK" value={50} />);
    expect(screen.getByText('050')).toBeInTheDocument();
  });

  it('renders stat value without padding when 3 digits', () => {
    render(<StatBar name="DEF" value={150} />);
    expect(screen.getByText('150')).toBeInTheDocument();
  });

  it('calculates percentage correctly', () => {
    const { container } = render(<StatBar name="HP" value={127} maxValue={255} />);
    const progressBar = container.querySelector('.bg-gray-200 > div');
    expect(progressBar).toHaveStyle({ width: '50%' });
  });

  it('handles maxValue prop', () => {
    const { container } = render(<StatBar name="SPD" value={50} maxValue={100} />);
    const progressBar = container.querySelector('.bg-gray-200 > div');
    expect(progressBar).toHaveStyle({ width: '50%' });
  });

  it('handles zero value', () => {
    const { container } = render(<StatBar name="HP" value={0} />);
    const progressBar = container.querySelector('.bg-gray-200 > div');
    expect(progressBar).toHaveStyle({ width: '0%' });
  });

  it('handles max value', () => {
    const { container } = render(<StatBar name="ATK" value={255} maxValue={255} />);
    const progressBar = container.querySelector('.bg-gray-200 > div');
    expect(progressBar).toHaveStyle({ width: '100%' });
  });
});
