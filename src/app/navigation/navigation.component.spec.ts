// Import necessary modules
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavigationComponent } from './navigation.component';

// Start describing the test suite
describe('NavigationComponent', () => {
  // Declare variables for the component and its fixture
  let component: NavigationComponent;
  let fixture: ComponentFixture<NavigationComponent>;

  // Before each test, set up the testing environment
  beforeEach(() => {
    // Configure the testing module
    TestBed.configureTestingModule({
      declarations: [NavigationComponent], // Declare the component to be tested
    });
    // Create the component
    fixture = TestBed.createComponent(NavigationComponent);
    // Get the instance of the component
    component = fixture.componentInstance;
    // Trigger change detection to update the component's view
    fixture.detectChanges();
  });

  // Define a test
  it('should create', () => {
    // Expect the component to be truthy (i.e., it exists)
    expect(component).toBeTruthy();
  });
});
