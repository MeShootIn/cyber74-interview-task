export type File = (FileName & FileContent) | null;

export type FileName = {
  name: string;
  id: number;
};

export type FileContent = {
  content: string;
  id: number;
};
