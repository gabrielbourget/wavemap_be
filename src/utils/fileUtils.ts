import { Buffer } from 'buffer';
import { v4 as uuid } from 'uuid';
import { FileUpload } from "graphql-upload";
import { cloudStorageBucket } from '../lib/cloudStorageConfig';

export const checkFileSize = async (createReadStream: FileUpload["createReadStream"], maxSize: number) => {
  new Promise((resolve, reject) => {
    let filesize = 0;
    let stream = createReadStream();

    stream.on('data', (chunk: Buffer) => {
      filesize += chunk.length;

      if (filesize > maxSize) reject(filesize);
    });

    stream.on('end', () => resolve(filesize));
    stream.on('error', reject);
  });
};

export const generateUniqueFilename = (filename: string): string => {
  const trimmedFilename = filename.replace(/\s+/g, `-`);
  const unique = uuid()

  return `${unique}-${trimmedFilename}`;
};

export const uploadImgToCloudStorage =
  async (createReadStream: FileUpload["createReadStream"], fileName: string) => {

    return new Promise((resolve, reject) => {
      return createReadStream()
        .pipe(cloudStorageBucket.file(fileName).createWriteStream({
          resumable: true,
          gzip: true
        }))
        .on('error', (err: any) => reject(err))
        .on('finish', resolve);
    });
}