import { IDomainEvent } from '../../../../shared/domain/events/IDomainEvents';
import { User } from '../user';
import { UniqueEntityID } from '../../../../shared/domain/UniqueEntityID';

export class UserCreated implements IDomainEvent {
    public dateTimeOccurred: Date;
    public user: User;
    constructor(user: User) {
        this.dateTimeOccurred = new Date();
        this.user = user;
    }
    getAggregateId(): UniqueEntityID {
        return this.user.id;
    }
}
