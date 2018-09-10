import { BrowserModule } from '@angular/platform-browser';
import {Routes, RouterModule} from '@angular/router';

import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { JobsComponent } from './jobs/jobs.component';
import { JobComponent } from './job/job.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { TopnavComponent } from './topnav/topnav.component';
import { ShopComponent } from './shop/shop.component';
import { SkillListComponent } from './skill-list/skill-list.component';
import { CartIconComponent } from './cart-icon/cart-icon.component';
import { CartComponent } from './cart/cart.component';
import { ResumeComponent } from './resume/resume.component';
import { AttributeListComponent } from './attribute-list/attribute-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'landing-page', pathMatch: 'full'},
  { path: 'landing-page', component: LandingPageComponent},
  { path: 'shop', component: ShopComponent},
  { path: 'cart', component: CartComponent},
  { path: 'resume', component: ResumeComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    JobsComponent,
    JobComponent,
    SidenavComponent,
    LandingPageComponent,
    TopnavComponent,
    ShopComponent,
    SkillListComponent,
    CartIconComponent,
    CartComponent,
    ResumeComponent,
    AttributeListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, {useHash: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
