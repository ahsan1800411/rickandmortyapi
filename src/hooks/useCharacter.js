import { gql, useQuery } from '@apollo/client';
const GET_CHARACTER = gql`
  query GetCharacterById($id: ID!) {
    character(id: $id) {
      name
      image
      episode {
        name
        episode
      }
    }
  }
`;

export const useCharacterById = (id) => {
  const { data, error, loading } = useQuery(GET_CHARACTER, {
    variables: {
      id,
    },
  });
  return { data, error, loading };
};
