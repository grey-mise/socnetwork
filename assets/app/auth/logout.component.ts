import {Component} from "@angular/core";

@Component({
    signature: 'app-logout',
    template: `
        <div class="col-md-8 com-md-offset-2">
            <button class="btn btn-danger" (click)="onLogout()">Logout</button>
        </div>
    `
})

export class LogoutComponent {
    onLogout() {}
}