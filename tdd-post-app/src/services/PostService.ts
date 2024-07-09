import axios from "axios";
import { API_BASE_URL } from "../utils/constants";
import { Post } from "../models/Post";
import { IPostService } from "./IPostService";


// We can create a service layer PostService to handle API interactions, and then use this
// service within the custom hook (useFetch). 
// This approcah further separates concerns, making the code more modular and easier to test

class PostService implements IPostService {
    async getPosts(): Promise<Post[]> {
        const response = await axios.get<Post[]>(API_BASE_URL);
        return response.data;
    }
    
    async getPost(id: number): Promise<Post> {
        const response = await axios.get<Post>(`${API_BASE_URL}/${id}`);
        return response.data;
    }
}

export default PostService;

