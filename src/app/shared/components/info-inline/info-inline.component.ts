import { Component, HostBinding, Input } from "@angular/core";

@Component({
  selector: "info-inline",
  templateUrl: "./info-inline.component.html",
  styleUrls: ["./info-inline.component.scss"],
  host: { class: "inline-value" },
})
export class InfoInline {
  @Input() title: string | undefined;
  @Input() value: number | undefined;
  @Input() monetary: boolean | undefined;

  @HostBinding("attr.label") get attrLabel() {
    return this.title;
  }

  @HostBinding("attr.value") get attrValue() {
    return parseFloat(`${this.value || 0}`).toFixed(2);
  }
}
