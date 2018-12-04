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
  OnDestroy,
  EventEmitter
} from '@angular/core';

let tabId = 0

@Directive({selector: 'ng-template[azbTabTitle]'})
export class AzbTabTitle {
  constructor(public templateRef: TemplateRef<any>) {}
}


@Directive({selector: 'ng-template[azbTabContent]'})
export class AzbTabContent {
  constructor(public templateRef: TemplateRef<any>) {}
}


@Directive({selector: 'azb-tab'})
export class AzbTab {

  @Input() id = `azb-tab-id-${tabId++}`;

  @Input() title: string;
  @Input() disabled: boolean = false;
  @Input() closable: boolean = false;
  
  titleTpl: AzbTabTitle | null;
  contentTpl: AzbTabContent | null;

  @ContentChildren(AzbTabTitle, {descendants: false}) titleTpls: QueryList<AzbTabTitle>;
  @ContentChildren(AzbTabContent, {descendants: false}) contentTpls: QueryList<AzbTabContent>;

  ngAfterContentChecked() {
    this.titleTpl = this.titleTpls.first;
    this.contentTpl = this.contentTpls.first;
  }

  ngOnInit() {
    console.log(this, 'ngOnInit');
  }

  ngOnDestroy() {
    // Todo: why on does not  triggering
    console.log(this, 'tab');
  }
}

