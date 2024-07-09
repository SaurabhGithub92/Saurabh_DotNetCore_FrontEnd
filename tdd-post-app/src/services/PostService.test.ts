import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { getPosts, getPostById } from "../services/PostService";

const mock = new MockAdapter(axios);
const API_BASE_URL = "https://localhost:7245/api/Posts";

describe('PostService', () => {
    afterEach(() => {
        mock.reset();
    });

    test('getPosts should return data', async () => {
        const posts = [{userId: 1, id: 1, title: 'Post 1'}];
        mock.onGet(API_BASE_URL).reply(200, posts);

        const result = await getPosts();
        expect(result).toEqual(posts);
    });

    test('getPostById should return a single post', async () => {
        const post = {userId: 1, id: 1, title: 'Post 1'}
        mock.onGet(`${API_BASE_URL}/1`).reply(200, post);

        const result = await getPostById(1);
        expect(result).toEqual(post);
    });
});