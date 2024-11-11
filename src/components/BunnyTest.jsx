import {useGLTF} from "@react-three/drei";
import {useRef} from "react";

const BunnyTest = (props) => {
    const targetRef = useRef();
    const { scene } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/bunny/model.gltf')
    return (
        <mesh {...props} ref={targetRef}>
            <meshLambertMaterial color="#fff"/>
            <primitive object={scene}/>
        </mesh>
    )
}
export default BunnyTest
