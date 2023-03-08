export const selectFeatured = (state) => {
    return state.featuredReducer
}
export const selectFeaturedItems = (state) => {
    return state.featuredReducer.featuredItems
}