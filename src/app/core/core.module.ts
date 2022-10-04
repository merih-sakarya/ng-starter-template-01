import { NgModule, Optional, SkipSelf, APP_INITIALIZER } from '@angular/core';
import { CommonModule } from '@angular/common';

import { throwIfAlreadyLoaded } from '@core/module-import-guard';
import { SetupService } from './setup/setup.service';

export function StartupServiceFactory(setupService: SetupService): Function {
  return () => setupService.initialize();
}

@NgModule({
  imports: [CommonModule],
  declarations: [],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: StartupServiceFactory,
      deps: [SetupService],
      multi: true
    }
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
