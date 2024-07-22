export class DragScrollHandler {
    private dragMouseIsDown = false;
    private dragScrollContainer: HTMLElement;
    private startX = 0;
    private startY = 0;
    private scrollLeftStart = 0;
    private scrollTopStart = 0;

    constructor(container: HTMLElement) {
        this.dragScrollContainer = container;
    }

    public dragMouseDown = (e: MouseEvent) => {
		e.preventDefault();
		this.dragMouseIsDown = true;
        this.startX = e.pageX;
        this.startY = e.pageY;
        this.scrollLeftStart = this.dragScrollContainer.scrollLeft;
        this.scrollTopStart = this.dragScrollContainer.scrollTop;
	};

	public dragMouseUp = (e: MouseEvent) => {
		e.preventDefault();
		this.dragMouseIsDown = false;
	};

    public dragMouseLeave = (e: MouseEvent) => {
        e.preventDefault();
        this.dragMouseIsDown = false;
    }

	public dragMouseScroll = (e: MouseEvent) => {
        e.preventDefault();
		if (this.dragMouseIsDown) {
			const deltaX = this.startX - e.pageX;
            const deltaY = this.startY - e.pageY;
            this.dragScrollContainer.scrollLeft = this.scrollLeftStart + deltaX;
            this.dragScrollContainer.scrollTop = this.scrollTopStart + deltaY;
            console.log(this.dragScrollContainer.scrollLeft, this.dragScrollContainer.scrollTop);
		}
	}
}