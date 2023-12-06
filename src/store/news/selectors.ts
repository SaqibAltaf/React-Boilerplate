export const getIsFetching = (state: { news: { isFetching: boolean } }) =>
  state.news.isFetching
export const getIsError = (state: { news: { isError: boolean } }) =>
  state.news.isError
export const getArticles = (state: { news: { articles: [] } }) =>
  state.news.articles
