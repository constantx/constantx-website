import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';

export async function GET(context) {
  const thoughts = await getCollection('thoughts');
  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: thoughts
      .filter((thought) => !thought.data.draft)
      .map((thought) => ({
        ...thought.data,
        link: `/thoughts/${thought.id}/`,
      })),
  });
}
