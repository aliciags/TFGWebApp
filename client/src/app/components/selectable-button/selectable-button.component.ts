import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-selectable-button',
  templateUrl: './selectable-button.component.html',
  styleUrls: ['./selectable-button.component.css']
})
export class SelectableButtonComponent implements OnInit {

  @Input() text: string;
  @Output() selected = new EventEmitter();
  public select: boolean;

  constructor() {
    this.select = false;
  }

  ngOnInit(): void {
  }

  onClick(): void {
    this.select ? this.select = false : this.select = true;
    this.selected.emit(this.text);
  }
}
