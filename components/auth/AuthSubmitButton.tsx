interface AuthSubmitButtonProps {
  children: React.ReactNode;
  disabled?: boolean;
}

export function AuthSubmitButton({ children, disabled }: AuthSubmitButtonProps) {
  return (
    <button
      type="submit"
      disabled={disabled}
      className="btn-primary w-full py-2.5 disabled:cursor-not-allowed disabled:opacity-60"
    >
      {children}
    </button>
  );
}
