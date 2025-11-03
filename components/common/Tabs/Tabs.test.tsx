import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Tabs } from './Tabs';

const mockTabs = [
  { id: 'stats', label: 'STATS' },
  { id: 'evolutions', label: 'EVOLUTIONS' },
  { id: 'moves', label: 'MOVES' },
];

describe('Tabs', () => {
  it('renders all tabs', () => {
    render(
      <Tabs tabs={mockTabs} activeTab="stats" onTabChange={() => {}}>
        Content
      </Tabs>
    );

    expect(screen.getByText('STATS')).toBeInTheDocument();
    expect(screen.getByText('EVOLUTIONS')).toBeInTheDocument();
    expect(screen.getByText('MOVES')).toBeInTheDocument();
  });

  it('highlights active tab', () => {
    render(
      <Tabs tabs={mockTabs} activeTab="stats" onTabChange={() => {}}>
        Content
      </Tabs>
    );

    const statsTab = screen.getByText('STATS');
    expect(statsTab).toHaveClass('bg-[#78C850]');
  });

  it('calls onTabChange when tab is clicked', async () => {
    const handleTabChange = jest.fn();
    const user = userEvent.setup();

    render(
      <Tabs tabs={mockTabs} activeTab="stats" onTabChange={handleTabChange}>
        Content
      </Tabs>
    );

    await user.click(screen.getByText('EVOLUTIONS'));
    expect(handleTabChange).toHaveBeenCalledWith('evolutions');
  });

  it('renders children content', () => {
    render(
      <Tabs tabs={mockTabs} activeTab="stats" onTabChange={() => {}}>
        <div>Tab content here</div>
      </Tabs>
    );

    expect(screen.getByText('Tab content here')).toBeInTheDocument();
  });

  it('applies inactive styles to non-active tabs', () => {
    render(
      <Tabs tabs={mockTabs} activeTab="stats" onTabChange={() => {}}>
        Content
      </Tabs>
    );

    const evolutionsTab = screen.getByText('EVOLUTIONS');
    expect(evolutionsTab).toHaveClass('text-gray-400');
    expect(evolutionsTab).not.toHaveClass('bg-[#78C850]');
  });
});
