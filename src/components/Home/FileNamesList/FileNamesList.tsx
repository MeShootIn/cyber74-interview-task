import { FileName } from '../../../utils/file-types';
import FileNamesListItem from './FileNamesListItem/FileNamesListItem';

export type FileNamesListProps = {
  fileNames: FileName[];
};

export default function FileNamesList({ fileNames }: FileNamesListProps) {
  return (
    <ul>
      {fileNames.map((fileName: FileName) => (
        <li key={fileName.id}>
          <FileNamesListItem fileName={fileName} />
        </li>
      ))}
    </ul>
  );
}
