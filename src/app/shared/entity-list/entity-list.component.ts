import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Entity } from '@formulaone/types';

@Component({
  selector: 'fow-entity-list',
  templateUrl: './entity-list.component.html',
  styleUrls: ['./entity-list.component.scss']
})
export class EntityListComponent<T> {

  @Input() entityList: Entity<T>;
  @Output() next: EventEmitter<void>;
  @Output() previous: EventEmitter<void>;

  ready: boolean = false;

  constructor() {
    this.next = new EventEmitter<void>();
    this.previous = new EventEmitter<void>();
    this.ready = true;
  }

  get from(): number {
    return +this.entityList.offset + 1;
  }
  
  get to(): number {
    return +this.entityList.offset + +this.entityList.limit + 1;
  }

  get total(): string {
    return this.entityList.total;
  }
}
