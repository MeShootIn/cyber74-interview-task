import { FileName } from '../../../utils/file-types';
import AddFileForm from './AddFileForm/AddFileForm';
import FileNamesListItem from './FileNamesListItem/FileNamesListItem';

type FileNamesListProps = {
  fileNames: FileName[];
};

export default function FileNamesList({ fileNames }: FileNamesListProps) {
  return (
    <ul>
      <li>
        <AddFileForm />
      </li>

      {fileNames.map((fileName: FileName) => (
        <li key={fileName.id}>
          <FileNamesListItem fileName={fileName} />
        </li>
      ))}
    </ul>
  );
}
