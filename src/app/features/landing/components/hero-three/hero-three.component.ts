import { Component, OnInit, OnDestroy, ElementRef, ViewChild, AfterViewInit, NgZone } from '@angular/core';
import * as THREE from 'three';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-hero-three',
  templateUrl: './hero-three.component.html',
  styleUrls: ['./hero-three.component.scss'],
})
export class HeroThreeComponent implements AfterViewInit, OnDestroy {
  @ViewChild('threeCanvas') canvasRef!: ElementRef<HTMLCanvasElement>;

  private renderer!: THREE.WebGLRenderer;
  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private scissors!: THREE.Group;
  private particles!: THREE.Points;
  private animId!: number;
  private scrollY = 0;

  constructor(private ngZone: NgZone) {}

  ngAfterViewInit() {
    this.ngZone.runOutsideAngular(() => {
      this.initThree();
      this.buildScissors();
      this.buildParticles();
      this.setupScrollTrigger();
      this.animate();
    });
  }

  private initThree() {
    const canvas = this.canvasRef.nativeElement;
    const w = canvas.clientWidth;
    const h = canvas.clientHeight;

    this.scene = new THREE.Scene();

    this.camera = new THREE.PerspectiveCamera(45, w / h, 0.1, 100);
    this.camera.position.set(0, 0, 6);

    this.renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    this.renderer.setSize(w, h);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.setClearColor(0x000000, 0);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    const goldLight = new THREE.PointLight(0xc9a84c, 3, 20);
    goldLight.position.set(2, 2, 4);
    const rimLight = new THREE.PointLight(0x4a3a1a, 1.5, 15);
    rimLight.position.set(-3, -1, 2);
    this.scene.add(ambientLight, goldLight, rimLight);

    window.addEventListener('resize', this.onResize.bind(this));
  }

  private buildScissors() {
    this.scissors = new THREE.Group();
    const gold = new THREE.MeshStandardMaterial({ color: 0xc9a84c, metalness: 0.9, roughness: 0.1 });
    const dark = new THREE.MeshStandardMaterial({ color: 0x2a2a1a, metalness: 0.7, roughness: 0.3 });

    const buildBlade = () => {
      const g = new THREE.Group();
      // handle ring
      const ring = new THREE.TorusGeometry(0.3, 0.06, 12, 32);
      const ringMesh = new THREE.Mesh(ring, gold);
      ringMesh.position.y = -1.1;
      g.add(ringMesh);
      // blade body
      const shape = new THREE.Shape();
      shape.moveTo(0, -0.8);
      shape.lineTo(0.12, -0.6);
      shape.lineTo(0.08, 1.2);
      shape.lineTo(0, 1.3);
      shape.lineTo(-0.02, 1.2);
      shape.lineTo(-0.04, -0.8);
      const extSettings = { depth: 0.04, bevelEnabled: true, bevelThickness: 0.02, bevelSize: 0.02, bevelSegments: 3 };
      const bladeGeo = new THREE.ExtrudeGeometry(shape, extSettings);
      const bladeMesh = new THREE.Mesh(bladeGeo, gold);
      g.add(bladeMesh);
      // pivot screw
      const screw = new THREE.CylinderGeometry(0.08, 0.08, 0.12, 16);
      const screwMesh = new THREE.Mesh(screw, dark);
      screwMesh.rotation.x = Math.PI / 2;
      screwMesh.position.set(0, -0.1, 0.06);
      g.add(screwMesh);
      return g;
    };

    const blade1 = buildBlade();
    const blade2 = buildBlade();
    blade1.rotation.z = 0.35;
    blade2.rotation.z = -0.35;
    blade2.scale.x = -1;

    this.scissors.add(blade1, blade2);
    this.scissors.position.set(1.8, 0.2, 0);
    this.scene.add(this.scissors);
  }

  private buildParticles() {
    const count = 180;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3]     = (Math.random() - 0.5) * 8;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 8;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 4;
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const mat = new THREE.PointsMaterial({ color: 0xc9a84c, size: 0.03, transparent: true, opacity: 0.5 });
    this.particles = new THREE.Points(geo, mat);
    this.scene.add(this.particles);
  }

  private setupScrollTrigger() {
    ScrollTrigger.create({
      trigger: '.hero-section',
      start: 'top top',
      end: 'bottom top',
      scrub: 1.5,
      onUpdate: (self) => {
        const p = self.progress;
        // scissor blades open/close on scroll
        if (this.scissors.children[0]) {
          (this.scissors.children[0] as THREE.Group).rotation.z = 0.35 - p * 0.9;
          (this.scissors.children[1] as THREE.Group).rotation.z = -0.35 + p * 0.9;
        }
        this.scissors.rotation.z = p * Math.PI * 0.25;
        this.scissors.position.y = 0.2 + p * -3;
        this.camera.position.z = 6 + p * 2;
      },
    });
  }

  private animate() {
    this.animId = requestAnimationFrame(() => this.animate());
    const t = Date.now() * 0.001;
    this.scissors.rotation.y = Math.sin(t * 0.4) * 0.15;
    this.particles.rotation.y = t * 0.04;
    this.particles.rotation.x = t * 0.02;
    this.renderer.render(this.scene, this.camera);
  }

  private onResize() {
    const canvas = this.canvasRef.nativeElement;
    const w = canvas.clientWidth;
    const h = canvas.clientHeight;
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(w, h);
  }

  ngOnDestroy() {
    cancelAnimationFrame(this.animId);
    ScrollTrigger.getAll().forEach(t => t.kill());
    window.removeEventListener('resize', this.onResize.bind(this));
    this.renderer.dispose();
  }
}