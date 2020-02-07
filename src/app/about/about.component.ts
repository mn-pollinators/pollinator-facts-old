import { Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(public updates: SwUpdate) { }

  public doc = document;

  public env = environment;

  public repoURL = "https://github.com/mn-pollinators/pollinator-facts";


  ngOnInit(): void {
  }

}
