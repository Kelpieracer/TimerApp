import config from '../config'
import { IProject, IWorkItem, IProjectMember, ITopic } from '../types/models'

const apiUrl = config().apiUrl;
const projectUrl = `${apiUrl}/projects`
const workItemUrl = `${apiUrl}/workItems`
const topicUrl = `${apiUrl}/topics`
const projectMemberUrl = `${apiUrl}/project-members`

export async function fetchProject(id: number): Promise<IProject> {
    return (await fetch(`${projectUrl}/${id}`)).json();
}

export async function fetchWorkItem(id: number): Promise<IWorkItem> {
    return (await fetch(`${workItemUrl}/${id}`)).json();
}

export async function fetchTopic(id: number): Promise<ITopic> {
    return (await fetch(`${topicUrl}/${id}`)).json();
}

export async function fetchProjectMember(id: number): Promise<IProjectMember> {
    return (await fetch(`${projectMemberUrl}/${id}`)).json();
}


