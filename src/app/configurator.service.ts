import {computed, inject, Injectable, signal, Signal} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {toSignal} from '@angular/core/rxjs-interop';
import {CarModel, Color} from './models.type';

@Injectable({
  providedIn: 'root'
})
export class ConfiguratorService {

  private http = inject(HttpClient);
  readonly allModels: Signal<CarModel[]> = toSignal(
    this.http.get<CarModel[]>("models"), {initialValue: []}
  );

  //cores selecionavéis
  readonly selectableColors = computed(() => this.currentCar()?.colors);

  //cor e carro atual
  readonly currentColor = signal<Color | undefined>(undefined);
  readonly currentCar = signal<CarModel | undefined>(undefined);

  //atualiza de acordo com o carro e cor atual
  readonly currentImage = computed(() => {
    const car = this.currentCar();
    const color = this.currentColor();
    if(car && color)
      return `https://interstate21.com/tesla-app/images/${car.code}/${color.code}.jpg`
      else return null;
  })

  //busca o modelo do carro de acordo com o código listado na lista
  selectModel(code: CarModel["code"]) {
    const model = this.allModels().find(model => model.code === code);
    this.currentCar.set(model);
    //setando a primeira cor encontrada na lista
    this.currentColor.set(model?.colors[0]);
  }

  //busca a cor do carro de acordo com o código na lista
  selectColor(code: Color["code"]) {
    const color = this.selectableColors()?.find(color => color.code === code);
    this.currentColor.set(color);
  }
}
