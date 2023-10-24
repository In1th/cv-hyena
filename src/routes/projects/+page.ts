import { error } from '@sveltejs/kit';

/** @type {import('./$types').Load} */
export const load = async ({ params }) => {
  if (isId(params)) {
    return {
        title: params.title
    }
  }

  throw error(404, 'Not found');
}

function isId(obj: any): obj is {title: string}{
    return obj.id !== undefined;
}