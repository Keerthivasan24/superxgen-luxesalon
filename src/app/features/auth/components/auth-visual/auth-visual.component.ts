import {
  Component, AfterViewInit, OnDestroy,
  ViewChild, ElementRef, NgZone
} from '@angular/core';
import * as THREE from 'three';
import { gsap } from 'gsap';

@Component({
  selector: 'app-auth-visual',
  templateUrl: './auth-visual.component.html',
  styleUrls:  ['./auth-visual.component.scss'],
})
export class AuthVisualComponent implements AfterViewInit, OnDestroy {
  @ViewChild('visualCanvas') canvasRef!: ElementRef<HTMLCanvasElement>;

  private renderer!: THREE.WebGLRenderer;
  private scene!:    THREE.Scene;
  private camera!:   THREE.PerspectiveCamera;
  private scissors!: THREE.Group;
  private particles!:THREE.Points;
  private animId!:   number;

  reviews = [
    { text: 'The most luxurious experience in Bangalore', author: 'Ananya S.' },
    { text: 'My bridal styling was absolutely flawless',  author: 'Meera T.'  },
    { text: 'World-class stylists, incredible results',   author: 'Priya K.'  },
    { text: 'LuxeSalon changed how I see beauty',         author: 'Divya R.'  },
  ];
  currentReview = 0;
  private reviewTimer!: ReturnType<typeof setInterval>;

  constructor(private ngZone: NgZone) {}

  ngAfterViewInit(): void {
    this.ngZone.runOutsideAngular(() => {
      this.initThree();
      this.buildScissors();
      this.buildParticles();
      this.animate();
    });

    this.reviewTimer = setInterval(() => {
      this.currentReview = (this.currentReview + 1) % this.reviews.length;
    }, 3200);

    gsap.from('.visual-brand', { y: 30, opacity: 0, duration: 1, delay: .2 });
    gsap.from('.visual-tagline', { y: 20, opacity: 0, duration: 1, delay: .5 });
    gsap.from('.trust-points', { y: 20, opacity: 0, duration: 1, delay: .8 });
  }

  private initThree(): void {
    const canvas = this.canvasRef.nativeElement;
    const w = canvas.clientWidth;
    const h = canvas.clientHeight;

    this.scene  = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(45, w / h, .1, 100);
    this.camera.position.set(0, 0, 5);

    this.renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    this.renderer.setSize(w, h);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.setClearColor(0x000000, 0);

    const ambient = new THREE.AmbientLight(0xffffff, .4);
    const gold    = new THREE.PointLight(0xc9a84c, 4, 20);
    gold.position.set(2, 2, 3);
    this.scene.add(ambient, gold);

    window.addEventListener('resize', this.onResize.bind(this));
  }

  private buildScissors(): void {
    this.scissors = new THREE.Group();
    const gold = new THREE.MeshStandardMaterial({
      color: 0xc9a84c, metalness: .9, roughness: .1
    });

    const buildBlade = () => {
      const g = new THREE.Group();

      const ring = new THREE.Mesh(
        new THREE.TorusGeometry(.25, .055, 10, 28), gold
      );
      ring.position.y = -.9;
      g.add(ring);

      const shape = new THREE.Shape();
      shape.moveTo(0, -.7);
      shape.lineTo(.1, -.5);
      shape.lineTo(.07, 1.1);
      shape.lineTo(0, 1.2);
      shape.lineTo(-.03, -.7);

      const blade = new THREE.Mesh(
        new THREE.ExtrudeGeometry(shape, {
          depth: .04, bevelEnabled: true,
          bevelThickness: .02, bevelSize: .02, bevelSegments: 2
        }), gold
      );
      g.add(blade);
      return g;
    };

    const b1 = buildBlade();
    const b2 = buildBlade();
    b1.rotation.z =  .3;
    b2.rotation.z = -.3;
    b2.scale.x = -1;

    this.scissors.add(b1, b2);
    this.scissors.position.set(.4, .2, 0);
    this.scene.add(this.scissors);
  }

  private buildParticles(): void {
    const count = 120;
    const pos   = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i*3]   = (Math.random() - .5) * 7;
      pos[i*3+1] = (Math.random() - .5) * 7;
      pos[i*3+2] = (Math.random() - .5) * 3;
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    const mat = new THREE.PointsMaterial({
      color: 0xc9a84c, size: .025, transparent: true, opacity: .45
    });
    this.particles = new THREE.Points(geo, mat);
    this.scene.add(this.particles);
  }

  private animate(): void {
    this.animId = requestAnimationFrame(() => this.animate());
    const t = Date.now() * .001;
    this.scissors.rotation.y = Math.sin(t * .5) * .2;
    this.scissors.rotation.z = Math.sin(t * .3) * .05;
    this.particles.rotation.y = t * .03;
    this.particles.rotation.x = t * .015;
    this.renderer.render(this.scene, this.camera);
  }

  private onResize(): void {
    const canvas = this.canvasRef.nativeElement;
    const w = canvas.clientWidth;
    const h = canvas.clientHeight;
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(w, h);
  }

  ngOnDestroy(): void {
    cancelAnimationFrame(this.animId);
    clearInterval(this.reviewTimer);
    window.removeEventListener('resize', this.onResize.bind(this));
    this.renderer.dispose();
  }
}