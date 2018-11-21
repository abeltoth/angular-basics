import { Component, OnInit } from '@angular/core';
import * as d3 from '../../../../node_modules/d3';

const data = {
  'name': 'Eve',
  'children': [
    {
      'name': 'Cain'
    },
    {
      'name': 'Seth',
      'children': [
        {
          'name': 'Enos'
        },
        {
          'name': 'Noam'
        }
      ]
    },
    {
      'name': 'Abel'
    },
    {
      'name': 'Awan',
      'children': [
        {
          'name': 'Enoch'
        }
      ]
    },
    {
      'name': 'Azura'
    }
  ]
};

@Component({
  selector: 'app-tree-viewer',
  templateUrl: './tree-viewer.component.html',
  styleUrls: ['./tree-viewer.component.css']
})
export class TreeViewerComponent implements OnInit {

  canvas = d3.select('body').append('svg')
    .attr('width', 500)
    .attr('height', 500);

  diagonal = d3.svg.diagonal()
    .source({x: 10, y: 10})
    .target({x: 300, y: 300});

  constructor() { }

  ngOnInit() {
    this.canvas.append('path')
    .attr('fill', 'none')
    .attr('stroke', 'black')
    .attr('d', this.diagonal);
  }

}
