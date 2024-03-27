export type Falsy = boolean | undefined | null | 0;

export const toClassName = (...classes: (string | Falsy)[]) => {
  return classes
    .filter(Boolean)
    .map((value) => `abjad-${value}`)
    .join(" ")
    .trim();
};

export const toCssVar = (name: string) => `--ms-${name}`;

export function classNames(...classes: (string | Falsy)[]) {
  return classes.filter(Boolean).join(" ").trim();
}
