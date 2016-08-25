import { Component, HostBinding } from '@angular/core';

/**
 * This example:
 * - Shows how to make a tab component with the tabs on the left side.
 */
@Component({
  selector: 'div[vertical-tabs-demo]',
  templateUrl: './tabs-vertical.demo.html'
})
export class TabsVerticalDemoComponent {

  /**
   * Have to make this 100% height or tab component won't display all the way to
   * the bottom of the screen.
   * @returns {string} the height of the style.height style.
   */
  @HostBinding('style.height') get tabsHeightStyle() { return '100%'; };

  onTabActivated(event: SohoTabsEvent) {
    console.log('TabsBasicDemoComponent.onTabActivated');
  }
}
