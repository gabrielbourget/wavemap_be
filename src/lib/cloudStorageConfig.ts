import { Storage } from "@google-cloud/storage";

const { 
  GCP_PROJECT_ID, GCP_PRIVATE_KEY, GCP_CLIENT_EMAIL,
  GCP_BUCKET_ID
} = process.env;

const storage = new Storage({
  projectId: GCP_PROJECT_ID,
  credentials: {
    client_email: GCP_CLIENT_EMAIL,
    private_key: GCP_PRIVATE_KEY ? GCP_PRIVATE_KEY.replace(/\\n/g, '\n') : ''
  }
});

export const cloudStorageBucket = storage.bucket(GCP_BUCKET_ID || "");