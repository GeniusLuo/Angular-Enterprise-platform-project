// core模块：核心模块
// 说明：只加载一次

// ng g m(module) core(name) 创建模块指令

import {NgModule, SkipSelf, Optional} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {SidebarComponent} from './sidebar/sidebar.component';

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
        CommonModule
    ]
})
export class CoreModule {
    // Optional可选 SkipSelf跳过自身，避免无限循环
    constructor(@Optional() @SkipSelf() parent: CoreModule) {
        if (parent) {
            throw new Error('模块已经存在,不能再次加载！');
        }
    }
}
