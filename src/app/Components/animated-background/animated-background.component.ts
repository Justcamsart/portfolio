import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild
} from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'app-animated-background',
  templateUrl: './animated-background.component.html',
  styleUrls: ['./animated-background.component.scss'],
  standalone: true,
})
export class AnimatedBackgroundComponent implements OnInit, OnDestroy {
  @ViewChild('canvasRef', { static: true }) canvasRef!: ElementRef;

  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private renderer!: THREE.WebGLRenderer;
  private animationId!: number;
  private stars: THREE.Points[] = [];

  ngOnInit(): void {
    this.initThree();
    this.animate();
  }

  ngOnDestroy(): void {
    cancelAnimationFrame(this.animationId);
    this.renderer.dispose();
  }

  private initThree(): void {
    const canvas = this.canvasRef.nativeElement;

    // Taille réelle du canvas
const width = canvas.clientWidth;
const height = canvas.clientHeight;


    // Scene
    this.scene = new THREE.Scene();

    // Camera
    const sizes = { width: window.innerWidth, height: window.innerHeight };
    this.camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 1000);
    this.camera.position.z = 5;

    // Renderer
    this.renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
    this.renderer.setSize(sizes.width, sizes.height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Dégradé automnal via le parent
    canvas.parentElement.style.background = 'linear-gradient(180deg, #6B4C9A, #1B1F3B, #0B0C10)';
    canvas.parentElement.style.position = 'absolute';
    canvas.parentElement.style.top = '0';
    canvas.parentElement.style.left = '0';
    canvas.parentElement.style.width = '100%';
    canvas.parentElement.style.height = '100%';

    // Stars
    this.createStars();

    // Resize
    window.addEventListener('resize', () => {
      const width = canvas.clientWidth;
  const height = canvas.clientHeight;

  this.camera.aspect = width / height;
  this.camera.updateProjectionMatrix();
  this.renderer.setSize(width, height);
    });
  }

  private createStars(): void {
    const geometry = new THREE.BufferGeometry();
    const starCount = 1000;
    const positions = new Float32Array(starCount * 3);

    for (let i = 0; i < starCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 20;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.02,
      transparent: true,
      opacity: 0.8,
    });

    const stars = new THREE.Points(geometry, material);
    this.scene.add(stars);
    this.stars.push(stars);
  }

  private animate = (): void => {
    this.animationId = requestAnimationFrame(this.animate);

    this.stars.forEach(star => {
      star.rotation.y += 0.0005;
    });

    this.renderer.render(this.scene, this.camera);
  };
}
