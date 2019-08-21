import { Component, Input } from '@angular/core';
import { Item } from '../../model/Item';
@Component({
 selector: 'item',
 templateUrl: 'item.html',
})
export class ItemComponent {
 @Input() item: Item;
}
