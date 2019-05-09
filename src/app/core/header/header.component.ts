import {Component, OnInit, Output, EventEmitter} from '@angular/core';

// ng g c name --spec==false(不要生成测试文件)

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    @Output() toggle = new EventEmitter<void>();

    constructor() {
    }

    ngOnInit() {
    }

    openSidebar() {
        this.toggle.emit();
    }
}
