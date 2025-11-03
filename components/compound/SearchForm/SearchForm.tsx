import React, { useState } from 'react';
import { Input } from '@/components/common/Input/Input';
import { Button } from '@/components/common/Button/Button';

export interface SearchFormProps {
  onSearch: (query: string) => void;
  onRandom: () => void;
  loading?: boolean;
  searchVariant?: 'primary' | 'secondary' | 'purple' | 'red';
  randomVariant?: 'primary' | 'secondary' | 'purple' | 'red';
}

export function SearchForm({
  onSearch,
  onRandom,
  loading = false,
  searchVariant = 'primary',
  randomVariant = 'purple'
}: SearchFormProps) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim());
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSubmit(e as any);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <Input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Pokemon Name or ID"
        disabled={loading}
        className="w-full"
      />
      <div className="flex gap-3">
        <Button type="submit" variant={searchVariant} disabled={loading || !query.trim()} className="flex-1">
          Search
        </Button>
        <Button type="button" variant={randomVariant} onClick={onRandom} disabled={loading} className="flex-1">
          Random
        </Button>
      </div>
    </form>
  );
}
