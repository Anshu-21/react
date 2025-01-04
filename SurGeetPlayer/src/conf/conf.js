const conf = {
    appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwriteTracksCollectionId: String(import.meta.env.VITE_APPWRITE_TRACKS_COLLECTION_ID),
    appwritePlaylistsCollectionId: String(import.meta.env.VITE_APPWRITE_PLAYLISTS_COLLECTION_ID),
    appwriteReactionsCollectionId: String(import.meta.env.VITE_APPWRITE_REACTIONS_COLLECTION_ID),
    appwriteRecordingsCollectionId: String(import.meta.env.VITE_APPWRITE_RECORDINGS_COLLECTION_ID),
    appwriteHistoryCollectionId: String(import.meta.env.VITE_APPWRITE_HISTORY_COLLECTION_ID),
    appwriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID)
};

export default conf;
