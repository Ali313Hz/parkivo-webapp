export function Button({ children, variant = 'primary', fullWidth = false, ...props }) {
  let className = 'btn';

  if (variant === 'primary') {
    className += ' btn-primary';
  } else if (variant === 'secondary') {
    className += ' btn-secondary';
  } else if (variant === 'outline') {
    className += ' btn-outline';
  }

  if (fullWidth) {
    className += ' btn-full';
  }

  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
}
