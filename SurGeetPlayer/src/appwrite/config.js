import { Client, Databases, Storage, Query, ID } from "appwrite";
import conf from '../conf/conf.js'; 

export class Service {
    client = new Client();
    databases;
    bucket;

    constructor() {
       
        this.client
            .setEndpoint(conf.appwriteUrl)  
            .setProject(conf.appwriteProjectId);  
        this.databases = new Databases(this.client); 
        this.bucket = new Storage(this.client); 
    }

    async createPlaylist({ userId, name, description }) {
        try {
            const response = await this.databases.createDocument(
                conf.appwriteDatabaseId, 
                conf.appwritePlaylistsCollectionId,  
                ID.unique(), 
                { userId, name, description, createdAt: new Date() }
            );
            return response;
        } catch (error) {
            console.error("Error creating playlist:", error);
            throw error;
        }
    }


    async addTrack({ playlistId, trackData }) {
        try {
            const response = await this.databases.createDocument(
                conf.appwriteDatabaseId,  
                conf.appwriteTracksCollectionId,  
                ID.unique(),
                { playlistId, ...trackData, addedAt: new Date() }
            );
            return response;
        } catch (error) {
            console.error("Error adding track:", error);
            throw error;
        }
    }

   
    async addReaction({ trackId, userId, reactionType }) {
        try {
            const response = await this.databases.createDocument(
                conf.appwriteDatabaseId,  
                conf.appwriteReactionsCollectionId, 
                ID.unique(),  
                { trackId, userId, reactionType, createdAt: new Date() }
            );
            return response;
        } catch (error) {
            console.error("Error adding reaction:", error);
            throw error;
        }
    }

    async addRecording({ userId, file }) {
        try {
            const fileResponse = await this.bucket.createFile(
                conf.appwriteBucketId,  
                ID.unique(),  
                file  
            );

            const response = await this.databases.createDocument(
                conf.appwriteDatabaseId,  
                conf.appwriteRecordingsCollectionId, 
                ID.unique(), 
                { userId, fileId: fileResponse.$id, fileUrl: fileResponse.url, uploadedAt: new Date() }
            );

            return response;
        } catch (error) {
            console.error("Error adding recording:", error);
            throw error;
        }
    }

   
    async addPlaybackHistory({ userId, trackId }) {
        try {
            const response = await this.databases.createDocument(
                conf.appwriteDatabaseId,  
                conf.appwriteHistoryCollectionId,  
                ID.unique(),  
                { userId, trackId, playedAt: new Date() }
            );
            return response;
        } catch (error) {
            console.error("Error adding playback history:", error);
            throw error;
        }
    }

   
    async uploadFile(file) {
        try {
            const response = await this.bucket.createFile(
                conf.appwriteBucketId,  
                ID.unique(),  
                file 
            );
            return response;
        } catch (error) {
            console.error("Error uploading file:", error);
            throw error;
        }
    }
}

const service = new Service();
export default service;
