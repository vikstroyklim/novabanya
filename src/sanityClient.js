import {createClient} from '@sanity/client'

export default createClient({
  projectId: 'efy5t3gr',
  dataset: 'production',
  useCdn: true, // `false` if you want to ensure fresh data
  apiVersion: '2024-04-07', // use a UTC date string
})
