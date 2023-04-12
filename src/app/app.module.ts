import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './home/home.component';
import { ServersComponent } from './servers/servers.component';
import { UsersComponent } from './users/users.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { FormsModule } from '@angular/forms';
import { ServersService } from './servers/servers.service';
import { UserComponent } from './users/user/user.component';
import { HttpClientModule } from '@angular/common/http';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    ServersComponent,
    ServerComponent,
    EditServerComponent,
    UsersComponent,
    UserComponent,
    PageNotFoundComponent,
  ],
  providers: [ServersService],
  bootstrap: [AppComponent]
})
export class AppModule { }