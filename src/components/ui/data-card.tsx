import { cn } from "@/lib/utils";

interface DataCardProps {
  children: React.ReactNode;
  className?: string;
}

const DataCard = ({ children, className }: DataCardProps) => {
  return (
    <div
      className={cn(
        "bg-card rounded-lg border border-border/60 shadow-card p-6 transition-shadow hover:shadow-card-hover",
        className
      )}
    >
      {children}
    </div>
  );
};

interface DataCardHeaderProps {
  title: string;
  subtitle?: string;
  action?: React.ReactNode;
  className?: string;
}

const DataCardHeader = ({ title, subtitle, action, className }: DataCardHeaderProps) => {
  return (
    <div className={cn("flex items-start justify-between mb-6", className)}>
      <div>
        <h2 className="text-lg font-semibold text-foreground">{title}</h2>
        {subtitle && (
          <p className="text-sm text-muted-foreground mt-0.5">{subtitle}</p>
        )}
      </div>
      {action && <div>{action}</div>}
    </div>
  );
};

interface DataFieldProps {
  label: string;
  value: React.ReactNode;
  className?: string;
}

const DataField = ({ label, value, className }: DataFieldProps) => {
  return (
    <div className={cn("space-y-1", className)}>
      <label className="form-label">{label}</label>
      <div className="form-value">{value || <span className="text-muted-foreground">—</span>}</div>
    </div>
  );
};

interface DataFieldInputProps {
  label: string;
  value: string;
  disabled?: boolean;
  className?: string;
}

const DataFieldInput = ({ label, value, disabled = true, className }: DataFieldInputProps) => {
  return (
    <div className={cn("space-y-1.5", className)}>
      <label className="form-label">{label}</label>
      <input
        type="text"
        value={value}
        disabled={disabled}
        className="w-full px-3 py-2 text-sm bg-secondary/50 border border-border rounded-md text-foreground disabled:cursor-default"
        readOnly
      />
    </div>
  );
};

export { DataCard, DataCardHeader, DataField, DataFieldInput };
