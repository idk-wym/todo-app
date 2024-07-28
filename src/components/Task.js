import { getRandomTaskId } from './../utils/auxFunctions'

export default class {
    constructor(title, desc, dueDate, priority) {
        this._id = getRandomTaskId();
        this._title = title;
        this._desc = desc;
        this._dueDate = dueDate;
        this._priority - priority;
        this._completed = false;
    }
    get id() {
        return this._id;
    }

    set title(value) {
        this._title = value;
    }
    get title() {
        return this._title;
    }

    set desc(desc) {
        this._desc = desc;
    }
    get desc() {
        return this._desc;
    }

    set dueDate(dueDate) {
        this._dueDate = dueDate;
    }
    get dueDate() {
        return this._dueDate;
    }

    set priority(priority) {
        this._priority = priority;
    }
    get priority() {
        return this._priority;
    }

    set completed(completed) {
        this._completed = completed;
    }
    get completed () {
        return this._completed;
    }
}