import { Component ,EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  @Output('featureSelected') featureSelected = new EventEmitter<string>();

  currentFeature = 'recipe';
  onSelect(feature:string){
    this.currentFeature = feature;
    console.log(this.currentFeature);
    this.featureSelected.emit(feature);
  }
}
