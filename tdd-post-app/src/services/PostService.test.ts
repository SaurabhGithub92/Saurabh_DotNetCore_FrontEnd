import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { getPosts, getPostById } from "../services/PostService";

const mock = new MockAdapter(axios);
const API_BASE_URL = "https://localhost:7245/api/Posts";

describe('PostService', () => {
    afterEach(() => {
        mock.reset();
    });

    test('fetchPosts should return data', async () => {
        const posts = [{userId: 1, id: 1, title: 'Post 1'}];
        mock.onGet(API_BASE_URL).reply(200, posts);

        const result = await getPosts();
        expect(result).toEqual(posts);
    });
});