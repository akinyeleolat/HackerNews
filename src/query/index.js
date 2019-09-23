import gql from "graphql-tag";

const getNewsQuery = gql`
  query($limit: Int, $offset: Int) {
    hn {
      topStories(limit: $limit, offset: $offset) {
        id
        type
        by {
          id
          createdISO
        }
        time
        url
        score
        title
        descendants
      }
    }
  }
`;

export default getNewsQuery;
