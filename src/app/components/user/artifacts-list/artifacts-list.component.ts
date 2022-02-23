import { Component, OnInit } from '@angular/core';
import artifactsData from './../../../data/artifactsData.json';
import { ArtifactsInterface } from './../../../interfaces/artifacts-interface';

@Component({
  selector: 'app-artifacts-list',
  templateUrl: './artifacts-list.component.html',
  styleUrls: ['./artifacts-list.component.scss']
})
export class ArtifactsListComponent implements OnInit {

  genshindb = require('genshin-db');
  artifacts: ArtifactsInterface[] = artifactsData;

  constructor() { 
    console.log(this.artifacts[0].flower[0].artifactName);
  }

  ngOnInit(): void {
  }

}
