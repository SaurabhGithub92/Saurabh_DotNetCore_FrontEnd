import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import PostService from "../services/PostService";
import { API_BASE_URL } from "../utils/constants";

const mock = new MockAdapter(axios);

describe('PostService', () => {
    let postService: PostService;
    beforeEach(() => {
        postService = new PostService();
    })
    afterEach(() => {
        mock.reset();
    });

    test('getPosts should return data', async () => {
        const posts = [{userId: 1, id: 1, title: 'Post 1'}];
        mock.onGet(API_BASE_URL).reply(200, posts);

        const result = await postService.getPosts();
        expect(result).toEqual(posts);
    });

    test('getPost should return a single post', async () => {
        const post = {userId: 1, id: 1, title: 'Post 1'}
        mock.onGet(`${API_BASE_URL}/1`).reply(200, post);

        const result = await postService.getPost(1);
        expect(result).toEqual(post);
    });
});