
import { SanityClient } from '@sanity/client';
import imageBuilder from '@sanity/image-url';

const client = SanityClient({
    projectId: '',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2023-10-21',


})
const builder = imageBuilder(client);

export const urlFor = source=> builder.image(source);

export default client;