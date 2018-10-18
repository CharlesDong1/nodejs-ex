import { Location } from '@angular/common';

import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import * as _ from 'underscore';
import * as FastClick from 'fastclick';
import * as $ from 'jquery';

declare var particlesJS: any;

@Component({
  selector: 'app-d3-demo',
  templateUrl: './d3-demo.component.html',
  styleUrls: ['./d3-demo.component.css']
})
export class D3DemoComponent implements OnInit {
  private aa: number[];
  private bb: number[];

  private particlesConfig: any = {
  'particles': {
    'number': {
      'value': 380,
      'density': {
        'enable': true,
        'value_area': 350
      }
    },
    'color': {
      'value': '#0f0f0f'
    },
    'shape': {
      'type': 'circle',
      'stroke': {
        'width': 0,
        'color': '#000000'
      },
      'polygon': {
        'nb_sides': 5
      },
      'image': {
        'src': 'img/github.svg',
        'width': 50,
        'height': 50
      }
    },
    'opacity': {
      'value': 0.5,
      'random': false,
      'anim': {
        'enable': false,
        'speed': 1,
        'opacity_min': 0.1,
        'sync': false
      }
    },
    'size': {
      'value': 1.85,
      'random': true,
      'anim': {
        'enable': false,
        'speed': 40,
        'size_min': 0.5,
        'sync': false
      }
    },
    'line_linked': {
      'enable': false,
      'distance': 150,
      'color': '#ffffff',
      'opacity': 0.4,
      'width': 1
    },
    'move': {
      'enable': true,
      'speed': 0.75,
      'direction': 'none',
      'random': false,
      'straight': false,
      'out_mode': 'out',
      'bounce': false,
      'attract': {
        'enable': false,
        'rotateX': 600,
        'rotateY': 1200
      }
    }
  },
  'interactivity': {
    'detect_on': 'canvas',
    'events': {
      'onhover': {
        'enable': false,
        'mode': 'repulse'
      },
      'onclick': {
        'enable': false,
        'mode': 'push'
      },
      'resize': true
    },
    'modes': {
      'grab': {
        'distance': 400,
        'line_linked': {
          'opacity': 1
        }
      },
      'bubble': {
        'distance': 400,
        'size': 40,
        'duration': 2,
        'opacity': 8,
        'speed': 3
      },
      'repulse': {
        'distance': 200,
        'duration': 0.4
      },
      'push': {
        'particles_nb': 4
      },
      'remove': {
        'particles_nb': 2
      }
    }
  },
  'retina_detect': true
};


  constructor(private location: Location) {
  }
  ngOnInit() {
    this.test()
  }

  goBack(): void {
    this.location.back()
  }

  test() {
    this.buildSvg();
    this.testUnderScore();
    this.testParticle();
    this.testJquery()
    FastClick['attach'] (document.body)
  }

  testParticle() {
     particlesJS('particles-js', this.particlesConfig);
  }

  testJquery() {
    $("#jquery")
      .css("background-color", "yellow")
      .css('width', '30px')
      .css('height', '30px')
    $(".fi-account-login")
      .css("background-color", "yellow")
      .css('width', '30px')
      .css('height', '30px')
  }

  testUnderScore() {
    this.aa = [1,2,3];
    this.bb = _.map(this.aa, function(num){ return num * 3; });
  }

  buildSvg() {
    var data = [150, 230, 180, 90];
    var svg = d3.select("#d3-base")
            .append("svg")
            .attr("width", 300)
            .attr("height", 200);
    svg.selectAll(".bar")
      .data(data)
      .enter()
      .append("rect")
      .attr("class", "bar")
      .attr("width", function(d) {return d;})
      .attr("height", 40)
      .attr("y", function(d, i) {return i*50 + 10;})
      .attr('fill', 'steelblue')
      .on("mouseover", function(d) {
          d3.select(this).attr("fill", "orange");
        })
      .on("mouseout", function(d) {
          d3.select(this).attr("fill", "steelblue");
        })
  };

}
