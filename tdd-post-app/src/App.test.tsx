import PostsComponent from "./components/PostsComponent";
import PostDetailComponent from "./components/PostDetailComponent";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { IPostService } from "./services/IPostService";
import PostService from "./services/PostService";

jest.mock('./components/PostsComponent', () => () => <div>PostsComponent Mock</div>);
jest.mock('./components/PostDetailComponent', () => () => <div>PostDetailComponent Mock</div>);

describe('App', () => {
  const postService: IPostService = new PostService();
  
    test('renders PostsComponent at root path', () => {
        render(
            <MemoryRouter initialEntries={['/']}>
                <PostsComponent postService={postService} />
            </MemoryRouter>
        );
        expect(screen.getByText('PostsComponent Mock')).toBeInTheDocument();
    });
    test('renders PostDetailComponent at /posts/:id path', () => {
        render(
            <MemoryRouter initialEntries={['/posts/1']}>
                <PostDetailComponent />
            </MemoryRouter>
        );
        expect(screen.getByText('PostDetailComponent Mock')).toBeInTheDocument();
    });
})