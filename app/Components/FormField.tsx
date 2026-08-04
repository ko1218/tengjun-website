type Props = {
  as?: "input" | "textarea";
  type?: string;
  placeholder: string;
  value: string;
  rows?: number;
  onChange: (value: string) => void;
};

const style =
  "rounded-xl border border-[#d8cec2] bg-white px-5 py-4 outline-none focus:border-[#8d7459]";

export default function FormField({
  as = "input",
  type = "text",
  placeholder,
  value,
  rows = 5,
  onChange,
}: Props) {
  if (as === "textarea") {
    return (
      <textarea
        rows={rows}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={style}
      />
    );
  }

  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={style}
    />
  );
}