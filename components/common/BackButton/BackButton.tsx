import Link from 'next/link';

export interface BackButtonProps {
  href?: string;
  onClick?: () => void;
  className?: string;
}

export function BackButton({ href = '/', onClick, className = '' }: BackButtonProps) {
  const baseClasses = 'text-white text-5xl hover:opacity-80 transition-opacity';
  const combinedClasses = `${baseClasses} ${className}`;

  if (onClick) {
    return (
      <button onClick={onClick} className={combinedClasses}>
        &lt;
      </button>
    );
  }

  return (
    <Link href={href} className={combinedClasses}>
      &lt;
    </Link>
  );
}
