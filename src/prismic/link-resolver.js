/**
 * To learn more about Link Resolving check out the Prismic documentation
 * https://prismic.io/docs/vuejs/beyond-the-api/link-resolving
 */

export default function (doc) {
  console.log({ doc })
  if (doc.isBroken) {
    return '/not-found'
  }

  if (doc.type === 'home_page') {
    return '/'
  }

  if (doc.type === 'athlete_page') {
    return '/athletes/' + doc.uid
  }

  return '/not-found'
}
