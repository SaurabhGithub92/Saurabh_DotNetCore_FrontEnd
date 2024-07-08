import axios from "axios";

const API_URL = "https://localhost:7245/api/Posts";

export interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

axios.defaults.headers.get['Access-Control-Allow-Origin'] = "*";

export const getPosts = async (): Promise<Post[]> => {
    const response = await axios.get<Post[]>(API_URL);

    return response.data;
}

export const getPostById = async (id: number): Promise<Post> => {
    const response = await axios.get<Post>(`${API_URL}/${id}`);
    return response.data;
}