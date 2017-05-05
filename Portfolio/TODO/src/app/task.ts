export class Task {
	completed: boolean;
	editing: boolean;
	_title: string;
	get title(): string {
		return this._title;
	}

	set title(value: string) {
		this._title = value.trim();
	}

	constructor(title: string) {
		this.completed = false;
		this.editing = false;
		this._title = title.trim();
	}
}