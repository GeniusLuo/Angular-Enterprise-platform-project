// 导入自定义svg图标到material库中

// material注册构造函数
import {MatIconRegistry} from '@angular/material';

// 导入DomSanitizer来引入安全的url，这是angular的url安全策略
import {DomSanitizer} from '@angular/platform-browser';

export const loadSvgResources = (ir: MatIconRegistry, ds: DomSanitizer) => {
    ir.addSvgIcon('draw', ds.bypassSecurityTrustResourceUrl('assets/svg/draw.svg'));
    ir.addSvgIcon('day', ds.bypassSecurityTrustResourceUrl('assets/img/sidebar/day.svg'));
    ir.addSvgIcon('month', ds.bypassSecurityTrustResourceUrl('assets/img/sidebar/month.svg'));
    ir.addSvgIcon('project', ds.bypassSecurityTrustResourceUrl('assets/img/sidebar/project.svg'));
    ir.addSvgIcon('projects', ds.bypassSecurityTrustResourceUrl('assets/img/sidebar/projects.svg'));
    ir.addSvgIcon('week', ds.bypassSecurityTrustResourceUrl('assets/img/sidebar/week.svg'));
    const days = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
        13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
        23, 24, 25, 26, 27, 28, 29, 30, 31
    ];
    days.forEach(d => ir.addSvgIcon(`day${d}`, ds.bypassSecurityTrustResourceUrl(`assets/img/days/day${d}.svg`)));
};
