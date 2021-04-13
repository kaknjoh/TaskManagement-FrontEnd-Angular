import { Collection } from "ngx-pagination/dist/paginate.pipe";
import { User } from "../_models/user.model";

export interface Task {
    taskUnitId: number,
    name: string,
    description:string,
    startDate: Date,
    endDate: Date,
    assignedUsers: Collection<User>
}