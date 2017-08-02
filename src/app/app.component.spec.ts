import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { EventsComponent } from './events/events.component';
import { PastorsComponent } from './pastors/pastors.component';
import { SeremonsComponent } from './seremons/seremons.component';
import { FamiliesComponent } from './families/families.component';
import { PageNotFoundComponent } from './404/404.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent, AboutComponent, ContactComponent, EventsComponent, PastorsComponent,
        FamiliesComponent, SeremonsComponent,
        PageNotFoundComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('St. Patrick\'s Church');
  }));
});
