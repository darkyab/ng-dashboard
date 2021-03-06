import {Component} from "@angular/core";
import {IMGConfig} from "../../mgChart/mgConfigInterface";

@Component({
moduleId: module.id,
styleUrls: ['../pagStyles.css'],
template:`

<div class="page-scaleUpDown">
  <h5>Bars Charts</h5>
  <ml-card shadow="4">
    <ml-card-text>
      <div class="chart-title">Histogram</div>  
      <mg-chart [config]="config1" [urlData]="urlData1" [delay]="500"></mg-chart>
    </ml-card-text>
    <ml-card-menu>
      <ml-card-menu>
        <ml-menu position="top-right" class="menu-btn">
          <ml-menu-item>item 1</ml-menu-item>
          <ml-menu-item>item 2</ml-menu-item>
        </ml-menu>
      </ml-card-menu>
    </ml-card-menu>  
  </ml-card>
  <br>
  <ml-card shadow="4">
    <ml-card-text>
      <div class="chart-title">Bars</div>  
      <mg-chart [config]="config2" [data]="data2" delay="1000"></mg-chart>
    </ml-card-text>
    <ml-card-menu>
      <ml-card-menu>
        <ml-menu position="top-right" class="menu-btn">
          <ml-menu-item>item 1</ml-menu-item>
          <ml-menu-item>item 2</ml-menu-item>
        </ml-menu>
      </ml-card-menu>
    </ml-card-menu>  
  </ml-card>
  <br>
</div>

`//template
}) export class PagBarsChart {

  // Chart1 load data from url pointing to a json file
  urlData1 = 'assets/data/ufo-sightings.json';
  config1: IMGConfig = {
    chart_type: 'histogram',
    x_accessor: 'year',
    y_accessor: 'sightings',
    x_label: 'years',
    buffer: 5,
    height: 200,
    binned: true,
  };

  // Chart2 load data from code
  data2 = [
    {"year": "2000", "sightings": 2780},
    {"year": "2001", "sightings": 3105},
    {"year": "2002", "sightings": 3176},
    {"year": "2003", "sightings": 3896},
    {"year": "2004", "sightings": 4208},
    {"year": "2005", "sightings": 3996},
    {"year": "2006", "sightings": 3590},
    {"year": "2007", "sightings": 4195},
    {"year": "2008", "sightings": 4705},
    {"year": "2009", "sightings": 4297},
    {"year": "2010", "sightings": 2531}
  ];
  config2: IMGConfig = {
    chart_type: 'bar',
    x_accessor: 'year',
    y_accessor: 'sightings',
    buffer: 10,
    height: 200,
    rotate_x_labels: 90,
    binned: false
  };

}
