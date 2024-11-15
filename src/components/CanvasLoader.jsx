import { Html, useProgress } from "@react-three/drei";
import { motion } from 'framer-motion';

const CanvasLoader = () => {
    const { progress } = useProgress();

    return (
        <Html
            as='div'
            center
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
            }}
        >
            <span className="canvas-loader" />
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                style={{ fontSize: 14, color: '#f1f1f1', fontWeight: 800, marginTop: 40 }}
            >
                {progress !== 0 ? `${progress.toFixed(2)}%` : 'Loading...'}
            </motion.p>
        </Html>
    );
};

export default CanvasLoader;
