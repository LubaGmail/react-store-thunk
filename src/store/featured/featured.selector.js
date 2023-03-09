export const selectFeatured = (state) => {
    return state.featured
}
export const selectFeaturedItems = (state) => {
    return state.featured.featuredItems
}

export const selectIsLoading = (state) => {
    return state.featured.isLoading
}
