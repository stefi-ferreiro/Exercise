import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render the colors catalogue', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Colors');
    expect(compiled.querySelectorAll('mv-color-palette')).toHaveLength(6);
    expect(compiled.querySelector('#typography-title')?.textContent).toContain('Typography');
    expect(compiled.querySelectorAll('.scale-row')).toHaveLength(8);
    expect(compiled.querySelector('#shadows-title')?.textContent).toContain('Shadows');
    expect(compiled.querySelectorAll('.shadow-card')).toHaveLength(7);
    expect(compiled.querySelector('#blurs-title')?.textContent).toContain('Blurs');
    expect(compiled.querySelectorAll('.blur-card')).toHaveLength(8);
    expect(compiled.querySelector('#primitives-title')?.textContent).toContain('Primitives');
    expect(compiled.querySelector('#semantic-title')?.textContent).toContain('Semantic');
    expect(compiled.querySelectorAll('mv-token-specimen')).toHaveLength(2);
  });
});
