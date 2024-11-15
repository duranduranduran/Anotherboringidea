
import React, { useRef } from 'react'
import gsap from "gsap";
import { useGSAP} from "@gsap/react"
import { useGLTF } from '@react-three/drei';

useGLTF.preload('/models/neon/neon_signs.glb');

const Neon = (props) => {
    const targetRef = useRef();
    useGSAP(() => {
        gsap.to(targetRef.current.rotation, {
            y: Math.PI * 2, // rotate 360 degrees
            duration: 2,
            yoyo: true,
            repeat: -1, // repeat indefinitely
            ease: 'linear' // optional, but recommended for rotation
        });
    });

    const { nodes, materials } = useGLTF('/models/neon/neon_signs.glb')
    return (
        <group ref={targetRef} {...props} dispose={null}>
            <group rotation={[-Math.PI / 2, 0, 0]}>
                <mesh
                    castShadow={true}
                    receiveShadow={true}
                    geometry={nodes.Object_2.geometry}
                    material={materials.material}
                    emissive={[0.8, 0.8, 0.8]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_3.geometry}
                    material={materials.material}
                    emissive={[0.8, 0.8, 0.8]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_4.geometry}
                    material={materials.material}
                    emissive={[0.8, 0.8, 0.8]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_5.geometry}
                    material={materials.material}
                    emissive={[0.8, 0.8, 0.8]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_6.geometry}
                    material={materials.material}
                    emissive={[4, 0.8, 0.8]}
                />
            </group>
        </group>
    )
}

export default Neon

useGLTF.preload('/models/neon/neon_signs.glb')