export interface FileInterface
  extends FileNameInterface,
    FileContentInterface {}

export interface FileNameInterface {
  name: string;
  id: number;
}

export interface FileContentInterface {
  content: string;
  id: number;
}
