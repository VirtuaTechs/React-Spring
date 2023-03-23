/* eslint-disable */
import * as THREE from 'three'
import * as React from 'react'
import { Canvas, useThree } from '@react-three/fiber'
import { OrbitControls, useGLTF, Environment, useTexture, MeshRefractionMaterial } from '@react-three/drei'
import { MeshPhysicalMaterial } from 'three';
import { EffectComposer, Bloom, Vignette } from '@react-three/postprocessing';

export class ModelLoader extends React.Component {

	state: {
		shank: number;
		diamond: string;
		size: number;
		updated: boolean;
	};

	constructor(props: any) {
		super(props);
		this.state = { shank: 1, diamond: 'Round', size: 1, updated: true };
	}

	changeModel(name: string) {
		// this.state.updated = true;
		this.setState({ diamond: name });
	}

	changeShank(number: number) {
		this.state.shank = number;
		this.setState({ shank: number });
	}

	increaseSize() {
		if (this.state.size != 1000) {
			this.state.size++;
			this.state.updated = true;
		}
	}

	decreaseSize() {
		if (this.state.size != 1000) {
			this.state.size--;
			this.state.updated = true;
		}
	}

	Diamond({ ...props }) {
		let modelName = './assets/models/stones/' + props.model;
		modelName.replace(' ', '')

		const fbx = useGLTF(modelName as string);
		fbx.scene.position.set({ ...props }.position[0], { ...props }.position[1], { ...props }.position[2]);
		fbx.scene.scale.set({ ...props }.scale[0], { ...props }.scale[1], { ...props }.scale[2]);

		props.state.model = fbx.scene;
		fbx.scene.name = "Diamond";

		const texture = useTexture('./assets/images/env10.jpg');

		const config = {
			bounces: 2,
			aberrationStrength: 0.0,
			ior: props.ior,
			fresnel: 0,
			color: 'white',
			fastChroma: false
		}

		const scene = useThree((state) => state.scene);

		setTimeout(() => {
			let prevDiamond: unknown;
			scene.traverse((item) => {
				if (item.name == "Diamond") {
					prevDiamond = item;
				}
			});

			if (prevDiamond != undefined) {
				const mat = prevDiamond as unknown as THREE.Material;
				mat.needsUpdate = true;
			}
		}, 1000);

		let geom = new THREE.BufferGeometry();
		fbx.scene.traverse((item) => {
			if (item.type == "Mesh") {
				const child = item as unknown as THREE.Mesh;
				geom = child.geometry;
				// const mat = child.material as unknown as THREE.Material;
				// mat.needsUpdate = true;
			}
		});

		return <mesh name={'Diamond'} castShadow geometry={geom} {...props}> <MeshRefractionMaterial envMap={texture} {...config} toneMapped={false} /> </mesh>
	}

	Basket({ ...props }) {
		let basketName = './assets/models/baskets/' + props.model;

		const fbx = useGLTF(basketName as string);
		fbx.scene.position.set({ ...props }.position[0], { ...props }.position[1], { ...props }.position[2]);
		fbx.scene.scale.set({ ...props }.scale[0], { ...props }.scale[1], { ...props }.scale[2]);

		props.state.model = fbx.scene;
		fbx.scene.name = "Basket";

		fbx.scene.traverse((obj) => {
			if (obj.type == "Group") {
				obj.visible = true;
			}

			if (obj.type == "Mesh") {
				let material = (obj as THREE.Mesh).material as MeshPhysicalMaterial;
				if (props.state.shank == 1)
					material.color = new THREE.Color(0xcccccc);
				else if (props.state.shank == 2)
					material.color = new THREE.Color(0xFDBD01);
				else if (props.state.shank == 3)
					material.color = new THREE.Color(0xff9977);

				material.roughness = 0.1;
				material.metalness = 0.6;
				material.clearcoat = 0;
				material.clearcoatRoughness = 0.1;
				material.reflectivity = 0.0;
				material.ior = 2.333;

				(obj as THREE.Mesh).material = material;

			}
		});

		return <primitive object={fbx.scene} />
	}

	Shoulder({ ...props }) {
		let shoulderName = './assets/models/sholders/' + props.model;
		const fbx = useGLTF(shoulderName as string);

		fbx.scene.position.set({ ...props }.position[0], { ...props }.position[1], { ...props }.position[2]);
		fbx.scene.scale.set({ ...props }.scale[0], { ...props }.scale[1], { ...props }.scale[2]);

		props.state.model = fbx.scene;
		fbx.scene.name = "Shoulder";

		let milgrainTexture = new THREE.Texture;

		if (props.milgrainName)
			milgrainTexture = useTexture(props.milgrainName as string);

		fbx.scene.traverse((obj) => {
			if (obj.type == "Group") {
				obj.visible = true;
			}

			if (obj.type == "Mesh") {
				let material = (obj as THREE.Mesh).material as MeshPhysicalMaterial;
				if (props.state.shank == 1)
					material.color = new THREE.Color(0xcccccc);
				else if (props.state.shank == 2)
					material.color = new THREE.Color(0xFDBD01);
				else if (props.state.shank == 3)
					material.color = new THREE.Color(0xff9977);

				material.roughness = 0.1;
				material.metalness = 0.6;
				material.clearcoat = 0;
				material.clearcoatRoughness = 0.1;
				material.reflectivity = 1;
				material.ior = 2.333;

				if (props.milgrainName)
					material.map = milgrainTexture;

				(obj as THREE.Mesh).material = material;
			}
		});

		return <primitive object={fbx.scene} />
	}

	Band({ ...props }) {
		let bandName = './assets/models/bands/' + props.model;

		const fbx = useGLTF(bandName as string);
		fbx.scene.position.set({ ...props }.position[0], { ...props }.position[1], { ...props }.position[2]);
		fbx.scene.scale.set({ ...props }.scale[0], { ...props }.scale[1], { ...props }.scale[2]);

		props.state.model = fbx.scene;
		fbx.scene.name = "Band";

		let milgrainTexture = new THREE.Texture;

		if (props.milgrainName)
			milgrainTexture = useTexture(props.milgrainName as string);

		fbx.scene.traverse((obj) => {
			if (obj.type == "Group") {
				obj.visible = true;
			}

			if (obj.type == "Mesh") {
				let material = (obj as THREE.Mesh).material as MeshPhysicalMaterial;
				if (props.state.shank == 1)
					material.color = new THREE.Color(0xcccccc);
				else if (props.state.shank == 2)
					material.color = new THREE.Color(0xFDBD01);
				else if (props.state.shank == 3)
					material.color = new THREE.Color(0xff9977);

				material.roughness = 0.1;
				material.metalness = 0.6;
				material.clearcoat = 1;
				material.clearcoatRoughness = 0.1;
				material.reflectivity = 1;
				material.ior = 2.333;

				if (props.milgrainName)
					material.map = milgrainTexture;

				(obj as THREE.Mesh).material = material;
			}
		});

		return <primitive object={fbx.scene} />
	}

	render() {
		const scale = [1000, 1000, 1000];

		let diamondName, basketName, shoulderName, bandName;
		let ior = 2;

		if (this.state.diamond == 'Round') {
			diamondName = 'Round.glb';
			basketName = 'RoundBasket.glb';
			shoulderName = 'RoundShoulder.glb';
			bandName = 'shank.glb';
			ior = 1.6;
		}
		if (this.state.diamond == 'Ashoka') {
			diamondName = 'Ashoka.glb';
			basketName = 'AshokaBasket.glb';
			shoulderName = 'AshokaShoulder.glb';
			bandName = 'shank.glb';
		}
		if (this.state.diamond == 'Emerald') {
			diamondName = 'Emerald.glb';
			basketName = 'EmeraldBasket.glb';
			shoulderName = 'EmeraldShoulder.glb';
			bandName = 'shank.glb';
		}
		if (this.state.diamond == 'FredRound') {
			diamondName = 'Fred.glb';
			basketName = 'FredBasket.glb';
			shoulderName = 'FredShoulder.glb';
			bandName = 'shank.glb';
			ior = 2.5;
		}
		if (this.state.diamond == 'Oval') {
			diamondName = 'Oval.glb';
			basketName = 'OvalBasket.glb';
			shoulderName = 'OvalShoulder.glb';
			bandName = 'shank.glb';
		}
		if (this.state.diamond == 'Cushion') {
			diamondName = 'Cushion.glb';
			basketName = 'CushionBasket.glb';
			shoulderName = 'CushionShoulder.glb';
			bandName = 'shank.glb';
			ior = 5;
		}
		if (this.state.diamond == 'Radiant') {
			diamondName = 'Radiant.glb';
			basketName = 'RadiantBasket.glb';
			shoulderName = 'RadiantShoulder.glb';
			bandName = 'shank.glb';
			ior = 5;
		}

		return (
			<Canvas shadows dpr={[1, 2]} camera={{ position: [-30, 40, 20], fov: 45 }}>
				<color attach="background" args={['#dfdfdf']} />

				<Environment preset="apartment" />

				<ambientLight intensity={0.5} />
				<pointLight position={[-40, -40, -10]} intensity={1} />
				<pointLight position={[40, -40, -10]} intensity={1} />
				<pointLight position={[-40, 40, 10]} intensity={1} />
				<pointLight position={[40, 40, 10]} intensity={1} />

				<React.Suspense fallback={null}>
					<this.Diamond position={[0, 0, 0]} scale={[1, 1, 1]} state={this.state} key={new Date().getTime()} ior={ior} model={diamondName} />
					<this.Band position={[0, 0, 0]} scale={scale} state={this.state} model={bandName} />
					<this.Shoulder position={[0, 0, 0]} scale={scale} state={this.state} model={shoulderName} />
					<this.Basket position={[0, 0, 0]} scale={scale} state={this.state} model={basketName} />
				</React.Suspense>
				<OrbitControls target={[0, 15, 0]} maxPolarAngle={Math.PI / 1.9} minPolarAngle={0.1} />

				<EffectComposer>
					{/* <Bloom luminanceThreshold={0.75} intensity={0.15} radius={0.1} levels={9} mipmapBlur /> */}
					<Vignette eskil={true} offset={0.3} darkness={0.4} />
				</EffectComposer>
			</Canvas >
		)
	}

}

export default ModelLoader;
