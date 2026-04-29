interface AuthTextFieldProps {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
  autoComplete?: string;
  required?: boolean;
}

export function AuthTextField({
  id,
  label,
  type = "text",
  placeholder,
  autoComplete,
  required = true,
}: AuthTextFieldProps) {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="block text-sm font-medium text-text-secondary">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        required={required}
        className="w-full rounded-lg border border-border-primary bg-[var(--color-input-bg)] px-3 py-2.5 text-sm text-text-primary placeholder:text-text-muted border-focus"
      />
    </div>
  );
}
