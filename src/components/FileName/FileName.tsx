import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
  selectFileNameObject,
  setFileNameObject,
} from '../../features/file-name/file-name-slice';

// TODO
export default function FileName() {
  const fileNameType = useAppSelector(selectFileNameObject);
  const dispatch = useAppDispatch();
  const [fileName, setFileName] = useState<string>('kek.txt');

  return (
    <div>
      <div>
        <input
          type="text"
          aria-label="Set file name"
          placeholder="fileName.name: string"
          value={fileName}
          onChange={(e) => setFileName(e.target.value)}
        />

        <button
          aria-label="increment by 5"
          onClick={() =>
            dispatch(
              setFileNameObject({
                fileNameObject: {
                  id: 228,
                  name: fileName,
                },
              })
            )
          }
        >
          set file name
        </button>
      </div>

      <div>
        <p>{fileNameType.fileNameObject?.name || '???'}</p>
      </div>
    </div>
  );
}
