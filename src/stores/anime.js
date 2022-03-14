import { types, flow } from "mobx-state-tree";
import makeApolloClient from '../graphql/apollo';
import { GET_ANIME_LIST, GET_ANIME_DETAIL } from '../constants/GraphQl';

export const AnimeModel = types.model("AnimeModel", {
  id: types.maybeNull(types.number),
  title: types.maybeNull(types.string, ""),
  image: types.maybeNull(types.string, ""),
})

export const CharacterModel = types.model("CharacterModel", {
    id: types.maybeNull(types.number),
    name: types.maybeNull(types.string, ""),
    image: types.maybeNull(types.string, ""),
    gender: types.maybeNull(types.string, ""),
    age: types.maybeNull(types.string, ""),
    dateOfBirth: types.maybeNull(types.string, "")
})

export const AnimeDetailModel = types.model("AnimeDetailModel", {
    title: types.maybeNull(types.string, ""),
    type: types.maybeNull(types.string, ""),
    bannerImage: types.maybeNull(types.string, ""),
    coverImage: types.maybeNull(types.string, ""),
    format: types.maybeNull(types.string, ""),
    episodes: types.maybeNull(types.number, ""),
    duration: types.maybeNull(types.number, ""),
    status: types.maybeNull(types.string, ""),
    popularity: types.maybeNull(types.number, ""),
    favourites: types.maybeNull(types.number, ""),
    description: types.maybeNull(types.string, ""),
    relations: types.optional(types.array(AnimeModel), []),
    characters: types.optional(types.array(CharacterModel), []),
})

export const AnimeStore = types.model("AnimeStore", {
    anime: types.array(AnimeModel),
    animeDetail: types.optional(AnimeDetailModel, {}),
    perPage: 24,
    lastPage: 0,
    currentPage: 1,
    state: 'pending'
  })
  .views(self => ({
    get getQlClient() {
        return makeApolloClient()
    }
  }))
  .actions(self => {
    const getAnimeList = flow(function* getAnimeList(page,genre) {
      try {
        self.state = 'pending'
        console.log('page',page,genre)
        const variables = {
            page: page,
            perPage: self.perPage,
            genre: genre
        }
        const response = yield self.getQlClient.query({
            query: GET_ANIME_LIST,
            variables
        })
        console.log('data', response)
        self.lastPage = response.data.Page.pageInfo.lastPage
        self.currentPage = response.data.Page.pageInfo.currentPage
        const data = response.data.Page.media.map((item) => {
            return {
                id: item.id,
                title: item.title.english || item.title.native,
                image: item.coverImage.large
            }
        })
        console.log('d',data)
        self.anime = data
        self.state = 'done'
        return response.data
      } catch (error) {
        console.log('er', error)
        self.state = 'error'
      }
    })
    const getAnimeDetail = flow(function* getAnimeDetail(id) {
        try {
          self.state = 'pending'
          const variables = {
              id
          }
          const response = yield self.getQlClient.query({
              query: GET_ANIME_DETAIL,
              variables
          })
          console.log('datadet', response)
          const resp = response.data.Media;
          const data = {
            title: resp.title.english || resp.title.native,
            type: resp.type,
            bannerImage: resp.bannerImage,
            coverImage: resp.coverImage.large,
            description: resp.description,
            format: resp.format,
            episodes: resp.episodes,
            duration: resp.duration,
            status: resp.status,
            popularity: resp.popularity,
            favourites: resp.favourites,
            relations: resp.relations.nodes.map((item) => {
                return {
                    id: item.id,
                    title: item.title.english || item.title.native,
                    image: item.coverImage.large
                }
            }),
            characters: resp.characters.nodes.map((item) => {
                return {
                    id: item.id,
                    name: item.name.full,
                    image: item.image.large,
                    gender: item.gender,
                    age: item.age,
                    dateOfBirth: `${item.dateOfBirth.day} - ${item.dateOfBirth.month} - ${item.dateOfBirth.year}`
                }
            })
          }
          console.log('d',data)
          self.animeDetail = data
          self.state = 'done'
          return response.data
        } catch (error) {
          console.log('er', error)
          self.state = 'error'
        }
      })
    return {
      getAnimeList,
      getAnimeDetail
    }
  });

let _animeStore
export const useAnime = () => {
  if (!_animeStore) {
    _animeStore = AnimeStore.create({
      anime: [],
      story: {},
      state: 'pending'
    })
  }

  return _animeStore;
}
