import type { Project } from "$lib/types";
import { error } from "@sveltejs/kit";

export const load = async ({fetch}) => {
    const res = await fetch('api/projects');

    if (res.ok){
        const projects: Project[] = await res.json()
        return { projects }
    }

    throw error(404, 'Error when fetching projects')
};