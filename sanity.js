
import { SanityClient } from '@sanity/client';
import sanityClient from '@sanity/client';
import imageBuilder from '@sanity/image-url';

const client = sanityClient({
    projectId: 'sz3q5ya8',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2023-10-21',


})
const builder = imageBuilder(client);

export const urlFor = source=> builder.image(source);

export default client;