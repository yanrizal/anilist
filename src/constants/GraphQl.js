import gql from 'graphql-tag';

export const GET_ANIME_LIST = gql`
query ($page: Int, $perPage: Int, $genre: String) {
    Page(page: $page, perPage: $perPage){
      pageInfo {
        total
        perPage
        currentPage
        lastPage
        hasNextPage
      }
      media(isAdult:false,genre:$genre) {
        id,
        isAdult
        coverImage {
          large
        },
        title {
          english
          native
        }
      }
    }
  }
`

export const GET_ANIME_DETAIL = gql`
query ($id: Int) {
    Media(id: $id){
        title {
          romaji
          english
          native
          userPreferred
        }
        type
        bannerImage
        coverImage {
          extraLarge
          large
        }
        format
        episodes
        duration
        status
        popularity
        favourites
        relations {
            nodes {
              id
              title {
                english
                native
              }
              coverImage {
                large
              }
            }
        }
        description(asHtml:false)
        characters {
          nodes {
            id
            gender
            age
            dateOfBirth {
              year
              month
              day
            }
            name {
              first
              middle
              last
              full
              native
              userPreferred
            }
            image {
              large
              medium
            }
          }
        } 
      }
  }
`