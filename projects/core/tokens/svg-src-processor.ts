import {InjectionToken} from '@angular/core';
import {identity, TuiStringHandler} from '@taiga-ui/cdk';

export const TUI_SVG_SRC_PROCESSOR: InjectionToken<TuiStringHandler<string>> =
    new InjectionToken<TuiStringHandler<string>>('Source path processor for svg', {
        factory: () => identity,
    });
