export default function BackgroundFX() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {/* dot grid */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(0,0,0,0.07)_1px,transparent_1px)] [background-size:26px_26px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_78%)] dark:bg-[radial-gradient(circle,rgba(255,255,255,0.05)_1px,transparent_1px)]" />

      {/* drifting warm blobs */}
      <div className="absolute -left-40 top-10 h-[34rem] w-[34rem] animate-drift rounded-full bg-accent/10 blur-[130px]" />
      <div className="absolute -right-48 bottom-0 h-[30rem] w-[30rem] animate-drift-rev rounded-full bg-orange-400/10 blur-[130px]" />
    </div>
  );
}
