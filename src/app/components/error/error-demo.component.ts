import { Component } from '@angular/core';
import { SkyErrorModalService } from '../../../core';
import { ErrorModalConfig } from '../../../modules/error/error-modal-config';

@Component({
  selector: 'sky-error-demo',
  templateUrl: './error-demo.component.html',
  providers: [SkyErrorModalService]
})
export class ErrorDemoComponent {
  public errorType: string = 'broken';

  public customTitle: string = 'Custom error title';
  public customDescription: string = 'Custom error description';
  public customActionText: string = 'Custom action';

  constructor(private errorService: SkyErrorModalService) {}

  public customAction() {
    alert('action clicked!');
  }

  public openErrorModal() {
    const config: ErrorModalConfig = {
      errorTitle: 'A title thing.',
      errorDescription: 'Try to refresh this page, or come back later.',
      errorCloseText: 'OK'
    };

    this.errorService.open(config);
  }
}
