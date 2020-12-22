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
import { ProjectsComponent } from './projects/projects.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

const routes: Routes = [
  { path: '', redirectTo: 'landing-page', pathMatch: 'full'},
  { path: 'landing-page', component: LandingPageComponent},
  { path: 'shop', component: ShopComponent},
  { path: 'cart', component: CartComponent},
  { path: 'projects', component: ProjectsComponent},
  { path: 'work-history', component: ResumeComponent},
  { path: 'checkout', component: CheckoutComponent}
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
    AttributeListComponent,
    ProjectsComponent,
    CheckoutComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, {useHash: true, scrollPositionRestoration: 'enabled'}),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
