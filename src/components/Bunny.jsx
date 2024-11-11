import {useGLTF} from "@react-three/drei";
import {useRef} from "react";
import gsap from 'gsap';
import { useGSAP} from "@gsap/react"


const Bunny = (props) => {
    const targetRef = useRef();
    const { scene } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/bunny/model.gltf')

    useGSAP(() => {
        gsap.to(targetRef.current.rotation, {
            duration: 5,
            y: 2 * Math.PI,
            ease: 'linear',
            repeat: -1,
            yoyo: true

        });
    });
    return (
        <mesh {...props} ref={targetRef} rotation={[0, Math.PI /5, 0]}>
            <meshBasicMaterial color="#800080" vertexColors={false}/>
            <primitive object={scene}/>
            <hemisphereLight skyColor="#ffffff" groundColor="#ffffff" intensity={0.5} />
            <directionalLight position={[0, 5, 0]} intensity={1} castShadow />



        </mesh>
    )
}

export default Bunny
