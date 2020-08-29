interface ICommonResponse {
    created: Date,
    modified?: Date,
    accountId: number
}

export interface IProject extends ICommonResponse {
    projectId: number,
    name: string,
    customerId?: number,
    workItems: IWorkItem[],
    projectMembers: IProjectMember[],
    rates: IRate[],
}

export interface IWorkItem extends ICommonResponse {
    workItemId: number,
    name: string,
    topicTopicId?: number,
    topicName?: string,
    started?: number,
    ended?: number,
    rateId?: number,
    projectId?: number
}

export interface IProjectMember extends ICommonResponse {
    projectMemberId: number,
    // account: IAccountResponse,
    shortAccount: IShortAccount,
    projectId: number,
    projectName: string,
}

export interface IRate extends ICommonResponse {
    rateId: number,
    name: string,
    price: number,
    started?: Date,
    ended?: Date
}

export interface IShortAccount {
    accountId: number,
    title: string,
    firstName: string,
    lastName: string
}

export interface ITopic extends ICommonResponse {
    name: string,
}