import { render, screen } from "@testing-library/react";
import { mocked } from "ts-jest/utils";
import Post, { getServerSideProps } from "../../pages/posts/[slug]";
import { getPrismicClient } from "../../services/prismic";
const post = {
  slug: "my-new-post",
  title: "My New post",
  content: "<p>Post ecerpt</p>",
  updated: "10 de Abril",
};

jest.mock("../../services/prismic");

describe("Posts page", () => {
  it("renders correctly", () => {
    render(<Post post={post} />);

    expect(screen.getByText("My New post")).toBeInTheDocument();
    expect(screen.getByText("Post ecerpt")).toBeInTheDocument();
  });

  // it("loads initial data", async () => {
  //   const getPrimiscClientMocked = mocked(getPrismicClient)

  //   getPrimiscClientMocked.mockReturnValueOnce({
  //     query: jest.fn().mockResolvedValueOnce({
  //       results: [
  //         {
  //           uid: 'my-new-post',
  //           data: {
  //             title:  [
  //               {type: 'heading', text: 'My new post'}
  //             ],
  //             content: [
  //               {type: 'paragraph', text: 'Post excerpt'}
  //             ]
  //           },
  //           last_publication_date: '04-01-2021'
  //         }
  //       ]
  //     })
  //   } as any)

  //   const response = await getStaticProps({});

  //   expect(response).toEqual(
  //     expect.objectContaining({
  //       props: {
  //         posts: [{
  //           slug: 'my-new-post',
  //           title: 'My new post',
  //           excerpt: 'Post excerpt',
  //           updatedAt: '01 de abril de 2021'
  //         }]
  //       },
  //     })
  //   );
  // });
});
