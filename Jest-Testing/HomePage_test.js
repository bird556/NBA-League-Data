import { getStaticProps } from '../pages/index';

jest.mock('../utils/.fetchApi', () => ({
  baseUrl: 'mocked-base-url',
  fetchApi: jest.fn(),
}));

describe('getStaticProps', () => {
  it('fetches recent games data from the API', async () => {
    const mockRecentGames = { events: [] };
    fetchApi.mockResolvedValueOnce(mockRecentGames);

    const props = await getStaticProps();

    expect(fetchApi).toHaveBeenCalledWith(
      'mocked-base-url/api/basketball/tournament/132/season/54105/matches/last/0'
    );
    expect(props).toEqual({
      props: {
        recentGames: mockRecentGames,
      },
      revalidate: 60,
    });
  });

  // Add more test cases as needed
});
