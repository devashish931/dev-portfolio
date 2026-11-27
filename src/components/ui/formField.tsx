import cn from "@/lib/utils";
import { Field } from "formik";

export function FormField({
  name,
  label,
  placeholder,
  type = "text",
  as = "input",
  error,
  touched,
}: {
  name: string;
  label: string;
  placeholder: string;
  type?: string;
  as?: "input" | "textarea";
  error?: string;
  touched?: boolean;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="text-sm font-semibold text-white">
        {label}
      </label>

      <Field
        id={name}
        name={name}
        type={type}
        as={as}
        rows={as === "textarea" ? 5 : undefined}
        placeholder={placeholder}
        className={cn(
          "bg-background/70 placeholder:text-primary-text/60 focus:border-accent w-full border px-4 py-3 text-white outline-hidden transition-colors",
          error ? "border-red-500" : "border-brand/40",
        )}
      />

      {error && touched && (
        <span className="text-sm text-red-500">{error}</span>
      )}
    </div>
  );
}
