// ascending sort
// export const sortByDate = (a, b) => {
//     return new Date(a.frontmatter.date) - new Date(b.frontmatter.date);
// }


// descending sort
export const sortByDate = (a, b) => {
    return new Date(b.frontmatter.date) - new Date(a.frontmatter.date);
}