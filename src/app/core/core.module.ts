// core模块：核心模块
// 说明：只加载一次

// ng g m(module) core(name) 创建模块指令

import {NgModule, SkipSelf, Optional} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SharedModule} from '../shared/shared.module';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {loadSvgResources} from '../utils/svg.util';

@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
        SidebarComponent
    ],
    exports: [
        HeaderComponent,
        FooterComponent,
        SidebarComponent
    ],
    imports: [
        HttpClientModule,
        BrowserAnimationsModule,
        SharedModule
    ]
})

export class CoreModule {
    /*************************************************
     *  Optional可选 SkipSelf跳过自身，避免无限循环
     *  loadSvgResources工具类导入一次，一劳永逸
     *
     **************************************************/

    constructor(
        @Optional() @SkipSelf() parent: CoreModule,
        ir: MatIconRegistry,
        ds: DomSanitizer
    ) {
        if (parent) {
            throw new Error('模块已经存在,不能再次加载！');
        }
        loadSvgResources(ir, ds);
    }
}
