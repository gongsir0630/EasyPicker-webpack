import ajax from '../ajax'

interface PeopleData {
    id: number,
    name: string,
    status: number,
    date: number
}

function getList(parent: string, child: string, username: string) {
    return ajax.get<any, BaseResponse<PeopleData[]>>('people/peopleList', {
        params: {
            parent,
            child,
            username
        }
    })
}

function checkIsLimited(username: string, parent: string, child: string, name: string) {
    return ajax.get<any, BaseResponse>('people/people', {
        params: {
            username,
            parent,
            child,
            name
        }
    })
}

function deletePeople(id:number){
    return ajax.delete<any, BaseResponse>('people/people',{
        params:{
            id
        }
    })
}
export default {
    getList,
    checkIsLimited,
    deletePeople
}