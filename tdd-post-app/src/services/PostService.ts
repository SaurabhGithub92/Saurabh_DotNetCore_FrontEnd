import axios from "axios";
import { API_BASE_URL } from "../utils/constants";

export interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

// We can create a service layer PostService to handle API interactions, and then use this
// service within the custom hook (useFetch). 
// This approcah further separates concerns, making the code more modular and easier to test

class PostService {
    static async getPosts(): Promise<Post[]> {
        const response = await axios.get<Post[]>(API_BASE_URL);
        return response.data;
    }
    
    static async getPostById(id: number): Promise<Post> {
        const response = await axios.get<Post>(`${API_BASE_URL}/${id}`);
        return response.data;
    }
}

export default PostService;

