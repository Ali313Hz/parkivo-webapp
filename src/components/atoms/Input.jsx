export function Input({ icon, ...props }) {
  return (
    <div className="input-wrapper">
      {icon && (
        <div className="input-icon-container">
          {icon}
        </div>
      )}
      <input
        className={`input ${icon ? 'input-with-icon' : ''}`}
        {...props}
      />
    </div>
  );
}
