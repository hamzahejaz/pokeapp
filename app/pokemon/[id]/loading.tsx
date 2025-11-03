import { Spinner } from '@/components/common/Spinner/Spinner';

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Spinner size="lg" gradient />
    </div>
  );
}
