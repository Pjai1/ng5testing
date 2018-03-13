import { Component, OnChanges, Input, EventEmitter, Output } from "@angular/core";

@Component({
    selector: "star",
    templateUrl: "./star.component.html",
    styleUrls: ["./star.component.css"]
})

export class StarComponent implements OnChanges{
    @Input() rating: number;
    starWidth: number;
    @Output() starClicked: EventEmitter<string> = new EventEmitter<string>();

    ngOnChanges(): void {
        this.starWidth = this.rating * 108/5;
    }

    onClick(): void {
        this.starClicked.emit(`Thank you for rating`);
    }
}