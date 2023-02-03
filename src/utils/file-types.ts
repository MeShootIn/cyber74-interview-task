export type File = FileName & FileContent;

export type FileName = {
  name: string;
  id: number;
};

export type FileContent = {
  content: string;
  id: number;
};
