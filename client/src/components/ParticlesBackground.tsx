import {
  useParticleNetwork,
  type ParticleNetworkOptions,
} from "../types/useParticleNetwork";

interface ParticlesBackgroundProps extends ParticleNetworkOptions {
  className?: string;
}
export default function ParticlesBackground({
  className = "",
  ...options
}: ParticlesBackgroundProps) {
  const canvasRef = useParticleNetwork(options);

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-auto block h-full w-full ${className}`}
      aria-hidden="true"
    />
  );
}
