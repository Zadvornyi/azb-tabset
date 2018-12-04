import {
  Component,
  Input,
  ContentChildren,
  QueryList,
  Directive,
  TemplateRef,
  ContentChild,
  AfterContentChecked,
  Output,
  EventEmitter
} from '@angular/core';

import { AzbTab } from './azb-tab';
enum tabsetDefalutConfig {
  justify = 'start',
  orientation = 'horizontal',
  type = 'tabs',
  variant = 'info'
};

@Component({
  selector: 'azb-tabset',
  templateUrl: './azb-tabset.component.html',
  styleUrls: ['./azb-tabset.component.sass']
})
export class AzbTabSetComponent {

  justifyClass: string;

  @ContentChildren(AzbTab) tabs: QueryList<AzbTab>;

  @Input() activeTabId: string;

  @Input() destroyOnHide = true;

  @Input()
  set justify(className: 'start' | 'center' | 'end' | 'fill' | 'justified') {
    if (className === 'fill' || className === 'justified') {
      this.justifyClass = `nav-${className}`;
    } else {
      this.justifyClass = `justify-content-${className}`;
    }
  }

  @Input() orientation: 'horizontal' | 'vertical';

  @Input() type: 'tabs' | 'pills' | string;

  @Input() variant: 'info' | 'warning' | 'danger';

  @Output() tabChange = new EventEmitter<any>();
  @Output() beforeCloseTab = new EventEmitter<any>();
  @Output() closeTab = new EventEmitter<any>();

  constructor() {
    this.type = tabsetDefalutConfig.type;
    this.justify = tabsetDefalutConfig.justify;
    this.variant = tabsetDefalutConfig.variant;
    this.orientation = tabsetDefalutConfig.orientation;
  }

  onSelectTab(tab: AzbTab) {
    let selectedTab = tab;
    if (tab && !tab.disabled && this.activeTabId !== tab.id) {
      let defaultPrevented = false;

      this.tabChange.emit(
        {activeTabId: this.activeTabId, nextId: tab.id, preventDefault: () => { defaultPrevented = true; }});

      if (!defaultPrevented) {
        this.activeTabId = tab.id;
      }
    }
  }
  
  onCloseTab(tab: AzbTab) {

    if (tab && tab.closable) {
      let defaultPrevented = false;

      this.beforeCloseTab.emit({deletedTab: tab, preventDefault: () => { defaultPrevented = true; }});

      if (!defaultPrevented) {
        let filtering = this.tabs.filter((item)=> tab.id !== item.id);
        this.tabs.reset(filtering)

        this.closeTab.emit({deletedTab: tab});
      }
    }
  }
  
  ngAfterContentChecked() {
    let activeTab = this._getTabById(this.activeTabId);
    this.activeTabId = activeTab ? activeTab.id : (this.tabs.length ? this.tabs.first.id : null);
  }

  private _getTabById(id: string): AzbTab {
    let tabsWithId: AzbTab[] = this.tabs.filter(tab => tab.id === id);
    return tabsWithId.length ? tabsWithId[0] : null;
  }

}

