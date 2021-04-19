import { gql } from "@apollo/client";

export const GET_SEARCH_SUGGESTIONS = gql`
  query GetArtists($searchValue: String!) {
    search {
      artists(query: $searchValue, first: 8) {
        nodes {
          id
          mbid
          name
        }
      }
    }
  }
`;

export const SEARCH_ARTISTS = gql`
  query GetArtists($searchValue: String!, $endCursor: String!) {
    search {
      artists(query: $searchValue, first: 18, after: $endCursor) {
        pageInfo {
          startCursor
          endCursor
          hasNextPage
          hasPreviousPage
        }
        edges {
          cursor
          node {
            id
            mbid
            name
            disambiguation
            type
          }
        }
      }
    }
  }
`;

export const ARTIST_DETAILS_QUERY = gql`
  query GetArtistDetails($artistMBID: MBID!) {
    lookup {
      artist(mbid: $artistMBID) {
        name
        id
        mbid
        mediaWikiImages {
          url
          descriptionHTML
        }
        country
        disambiguation
        lifeSpan {
          begin
          end
        }
        rating {
          value
        }
        tags {
          edges {
            node {
              count
              name
            }
          }
        }
        gender
        type
        releases {
          edges {
            node {
              mbid
              id
              title
              date
              media {
                trackCount
                format
              }
            }
          }
        }
      }
    }
  }
`;
export const ALBUM_DETAILS_QUERY = gql`
  query GET_ALBUM_DETAILS($albumMBID: MBID!) {
    lookup {
      release(mbid: $albumMBID) {
        id
        date
        title
        media {
          trackCount
          format
          title
          tracks {
            mbid
            title
            length
            position
          }
        }
        coverArtArchive {
          front
        }
      }
    }
  }
`;
