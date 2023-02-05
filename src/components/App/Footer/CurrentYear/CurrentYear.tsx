export default function CurrentYear() {
  const year = new Date().getFullYear();

  return <time dateTime={year.toString()}>{year}</time>;
}
