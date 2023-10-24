import type { Project } from "$lib/types";
import { json, type RequestHandler } from "@sveltejs/kit";

async function getProjects() {
    let projects: Project[] = []

	const paths = import.meta.glob('/src/projects/*.md', {eager: true})

	for (const path in paths) {
		const file = paths[path]
		const id = path.split('/').at(-1)?.replace('.md', '')
        // console.log(file, typeof file === 'object', 'metadata' in file, id)
		if (file && typeof file === 'object' && 'metadata' in file && id) {
			const metadata = file.metadata as Omit<Project, 'id'>
			const project = { ...metadata, id } satisfies Project
			projects.push(project)
		}
	}

	const map: Record<number, Project[]> = {
        1: projects.filter(p => p.weight === 1),
        2: projects.filter(p => p.weight === 2),
        3: projects.filter(p => p.weight === 3),
    }
    const res = [...map[3], ...shuffleProjects(map[1], map[2])];
    // console.log(res)
	return res
}

const shuffleProjects = (pr2: Project[], pr1: Project[]) => {
    let result: Project[] = []

    for (const pr of pr2) {
        result = [pr, ...result]

        if (pr1.length > 0){
            result = [pr1[0], ...result]
            pr1.shift();
        }

    }
    return [...result, ...pr1];
}

export const GET: RequestHandler = async () => {
    const projects = await getProjects();
    return json(projects);
};