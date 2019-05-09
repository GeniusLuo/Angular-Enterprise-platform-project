// 导入自定义svg图标到material库中

// material注册构造函数
import {MatIconRegistry} from '@angular/material';

// 导入DomSanitizer来引入安全的url，这是angular的url安全策略
import {DomSanitizer} from '@angular/platform-browser';

export const loadSvgResources = (ir: MatIconRegistry, ds: DomSanitizer) => {
    ir.addSvgIcon('draw', ds.bypassSecurityTrustResourceUrl('assets/svg/draw.svg'));
};
