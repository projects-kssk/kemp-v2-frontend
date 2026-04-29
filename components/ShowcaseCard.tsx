interface ShowcaseCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export function ShowcaseCard({ title, description, icon }: ShowcaseCardProps) {
  return (
    <div className="card-themed p-6 rounded-xl hover:-translate-y-1 transition-all duration-300">
      <div className="flex items-center mb-8 gap-4">
        {icon && <div className="text-accent-primary">{icon}</div>}
        <h1 className="text-4xl font-semibold mb-2 ">{title}</h1>
      </div>
      <p>{description}</p>
    </div>
  );
}
