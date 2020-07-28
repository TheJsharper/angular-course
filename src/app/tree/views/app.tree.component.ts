import { AppDynamicDataSource } from '../sources/app.dynamic-data-source';
import { FlatTreeControl } from '@angular/cdk/tree';
import { DynamicDatabase, DynamicFlatNode } from './../services/app.dynamic-database.service';
import { Component } from '@angular/core';
@Component({
    selector: 'tree',
    templateUrl: './app.tree.component.html',
    styleUrls: ['./app.tree.component.scss']
  })
  export class AppTreeComponent {
    constructor(database: DynamicDatabase) {
      this.treeControl = new FlatTreeControl<DynamicFlatNode>(this.getLevel, this.isExpandable);
      this.dataSource = new AppDynamicDataSource(this.treeControl, database);
  
      this.dataSource.data = database.initialData();
    }
  
    treeControl: FlatTreeControl<DynamicFlatNode>;
  
    dataSource: AppDynamicDataSource;
  
    getLevel = (node: DynamicFlatNode) => node.level;
  
    isExpandable = (node: DynamicFlatNode) => node.expandable;
  
    hasChild = (_: number, _nodeData: DynamicFlatNode) => _nodeData.expandable;
  }