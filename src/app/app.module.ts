import { NgModule } from '@angular/core';
import { BrowserModule, EVENT_MANAGER_PLUGINS, HammerGestureConfig, HammerModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UxButtonModule } from '@netcracker/ux-ng2/button';
import { UxHammerPluginPatchA6 } from '@netcracker/ux-ng2/patches';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { UxSearchFieldModule } from '@netcracker/ux-ng2/search-field';
import { UxPopoverModule } from '@netcracker/ux-ng2/popover';
import { UxDropdownMenuModule } from '@netcracker/ux-ng2/dropdown-menu';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { NewPostComponent } from './components/new-post/new-post.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UxLabelModule } from '@netcracker/ux-ng2/label';
import { UxTextFieldModule } from '@netcracker/ux-ng2/text-field';
import { UxTextAreaFieldModule } from '@netcracker/ux-ng2/textarea-field';
import { FooterComponent } from './components/footer/footer.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';

@NgModule({
    declarations: [AppComponent, LoginComponent, HeaderComponent, HomeComponent, NewPostComponent, FooterComponent, SearchResultsComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HammerModule,
        UxButtonModule,
        AppRoutingModule,
        ReactiveFormsModule,
        UxSearchFieldModule,
        UxPopoverModule,
        UxDropdownMenuModule,
        UxLabelModule,
        UxTextFieldModule,
        UxTextAreaFieldModule,
    ],
    providers: [
        HammerGestureConfig,
        {
            provide: EVENT_MANAGER_PLUGINS,
            useClass: UxHammerPluginPatchA6,
            multi: true,
        },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
