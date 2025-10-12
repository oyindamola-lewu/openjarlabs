export default function Work() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center py-32 text-black">
  <h1 className="text-5xl font-bold mb-4">Selected Work</h1>
  <p className=" max-w-xl">Experiments and collaborations that explore the boundary between art and interface.</p>
  <div className="mt-16 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl px-6">
    {/* Project cards will go here */}
  </div>
</section>
  );
}