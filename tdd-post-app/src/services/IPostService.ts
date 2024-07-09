import { Post } from "../models/Post";

export interface IPostService {
    getPosts(): Promise<Post[]>;
    getPost(id: number): Promise<Post>;
}