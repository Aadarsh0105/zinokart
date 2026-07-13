
type SectionHeadingProps = {
  label: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
};
export function SectionHeading({
  label,
  title,
  description,
  align = 'left'
}: SectionHeadingProps) {
  return (
    <div
      className={
      align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'
      }>
      
      <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#c57b00]">
        {label}
      </p>
      <h2 className="mt-4 text-3xl font-semibold tracking-[-0.045em] text-[#1a1a1a] sm:text-5xl">
        {title}
      </h2>
      {description &&
      <p className="mt-5 text-base leading-7 text-stone-600 sm:text-lg">
          {description}
        </p>
      }
    </div>);

}