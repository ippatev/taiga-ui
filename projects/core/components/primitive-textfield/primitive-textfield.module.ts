import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MutationObserverModule} from '@ng-web-apis/mutation-observer';
import {
    TuiAutofilledModule,
    TuiFocusableModule,
    TuiFocusedModule,
    TuiHoveredModule,
    TuiInputModeModule,
    TuiPreventDefaultModule,
} from '@taiga-ui/cdk';
import {TuiSvgModule} from '@taiga-ui/core/components/svg';
import {TuiTooltipModule} from '@taiga-ui/core/components/tooltip';
import {TuiWrapperModule} from '@taiga-ui/core/components/wrapper';
import {TuiBorderModule} from '@taiga-ui/core/directives/border';
import {TuiDescribedByModule} from '@taiga-ui/core/directives/described-by';
import {TuiMaskAccessorModule} from '@taiga-ui/core/directives/mask-accessor';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {TuiPrimitiveTextfieldComponent} from './primitive-textfield.component';
import {TuiValueDecorationComponent} from './value-decoration/value-decoration.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        TuiMaskAccessorModule,
        TuiFocusableModule,
        TuiFocusedModule,
        TuiHoveredModule,
        TuiInputModeModule,
        PolymorpheusModule,
        TuiWrapperModule,
        TuiSvgModule,
        TuiTooltipModule,
        TuiAutofilledModule,
        TuiDescribedByModule,
        TuiPreventDefaultModule,
        TuiBorderModule,
        MutationObserverModule,
    ],
    declarations: [TuiPrimitiveTextfieldComponent, TuiValueDecorationComponent],
    exports: [TuiPrimitiveTextfieldComponent],
})
export class TuiPrimitiveTextfieldModule {}
