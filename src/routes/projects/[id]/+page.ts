import { error } from '@sveltejs/kit';

export const load = async ({ params }) => {
  try{
    const project = await import(`../../../projects/${params.id}.md`);

    return {
        content: project.default,
        meta: project.metadata,
        id: params.id
    }
  }
  catch (e) {
    throw error(404, `Could not not find project`)
  }
}