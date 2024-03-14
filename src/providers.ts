import { InjectionToken, Provider, inject } from '@angular/core';

const MY_NAME = new InjectionToken<string>('MY_NAME');

export function provideName(name: string): Provider {
  return {
    provide: MY_NAME,
    useValue: name,
  };
}

export function injectName() {
  return inject(MY_NAME, { optional: true }) ?? 'Not Set';
}
