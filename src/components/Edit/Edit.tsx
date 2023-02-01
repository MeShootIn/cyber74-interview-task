import useFile, { ProviderFileValue } from '../FileContext/FileContext';

export default function Edit() {
  const file = useFile();

  return file !== null ? (
    <h2>
      Edit <mark>TODO</mark>
    </h2>
  ) : (
    <>
      <h2>Пока редактировать нечего(((</h2>
    </>
  );
}
