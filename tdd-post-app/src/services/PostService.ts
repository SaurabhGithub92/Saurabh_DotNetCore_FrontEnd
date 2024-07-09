import axios from "axios";
import { API_BASE_URL } from "../utils";

export interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

axios.defaults.headers.get['Access-Control-Allow-Origin'] = "*";

export const getPosts = async (): Promise<Post[]> => {
    const response = await axios.get<Post[]>(API_BASE_URL);

    return response.data;
}

export const getPostById = async (id: number): Promise<Post> => {
    const response = await axios.get<Post>(`${API_BASE_URL}/${id}`);
    return response.data;
}