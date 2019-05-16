import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    public darkTheme = false;

    switchTheme(flag) {
        this.darkTheme = flag;
    }
}
