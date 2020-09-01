import React from 'react'
import { useQuery } from 'react-query'
import config from '../config'
import { IProject } from '../models/responseModels'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { fetchWrapper } from '../_helpers';
import { IUpdateProjectRequest } from '../models/updateRequests'

const baseUrl = config().apiUrl + "/projects/";

interface IProjectRequest {
    nameContains?: string,
    projectIds?: number[],
    customerId?: number,
    fetchFullTree?: boolean
}

const emptyProject: IProject = {
    projectId: -1,
    name: '',
    workItems: [],
    projectMembers: [],
    created: new Date(),
    rates: [],
    accountId: -1
}

const [project, setProject] = React.useState(emptyProject)

const Project = ({ projectId }: { projectId: number }) => {
    const { isLoading, error, data } = useQuery('readProject', () =>
        fetchWrapper.post(baseUrl + "fetch", { projectIds: [projectId] })
            .then((res: IProject[]) => {
                console.log(res)
                return res
            })
    )

    if (isLoading) return 'Loading...'
    if (error) return 'An error has occurred: ' + JSON.stringify(error)

    setProject(data !== undefined ? data : [])
    const clickHander = () => {
    }

    const saveClickHandler = () => {
        if (project !== undefined)
            fetchWrapper.post(baseUrl + "update", { projectId: projectId, name: }: IUpdateProjectRequest)
                .then((res: IProject[]) => {
                    console.log(res)
                    return res
                })
    }

    return project && project.length > 0 ? (
        <div>
            <Form>
                <Form.Group controlId="formProject">
                    <Form.Label>Project name</Form.Label>
                    <Form.Control placeholder="(no name yet)" defaultValue={project[0].name} onClick={clickHander} />
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlSelectProjectMember">
                    <Form.Label>Members</Form.Label>
                    <Form.Control as="select">
                        {project[0].projectMembers.map(member =>
                            <option key={member.projectMemberId}>{member.account?.firstName ?? ""} {member.account?.lastName ?? ""}</option>
                        )}
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelectWorkItem">
                    <Form.Label>Work Items</Form.Label>
                    <Form.Control as="select">
                        {project[0].workItems.map(workItem => <option key={workItem.workItemId}>{workItem.name}</option>)}
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect2">
                    <Form.Label>Example multiple select</Form.Label>
                    <Form.Control as="select" multiple>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Example textarea</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
            </Form>
            <Button variant="primary" onClick={saveClickHandler}>
                Save
            </Button>
        </div>
    ) : <></>
}
export default Project 