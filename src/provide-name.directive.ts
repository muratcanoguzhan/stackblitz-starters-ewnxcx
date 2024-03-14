import {
  Directive,
  INJECTOR,
  Injector,
  Input,
  TemplateRef,
  ViewContainerRef,
  inject,
} from '@angular/core';
import { provideName } from './providers';

@Directive({
  standalone: true,
  selector: '[provideName]',
})
export class ProvideNameDirective {
  @Input({ required: true }) set provideName(name: string) {
    this.renderContentWithName(name);
  }

  private readonly viewRef = inject(ViewContainerRef);
  private readonly templateRef = inject(TemplateRef);
  private readonly injector = inject(INJECTOR);

  constructor() {}

  public renderContentWithName(name: string) {
    this.viewRef.clear();
    debugger;
    const injector = Injector.create({
      providers: [provideName(name)],
      parent: this.injector,
    });
    this.viewRef.createEmbeddedView(this.templateRef, {}, { injector });
  }
}
