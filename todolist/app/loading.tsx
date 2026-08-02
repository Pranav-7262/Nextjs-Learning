export default function Loading() {
  return (
    <main className="min-h-screen bg-slate-950 p-8">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-8 text-center text-4xl font-bold text-white">
          My Todo App
        </h1>

        <div className="rounded-2xl bg-slate-900 p-8 shadow-xl">
          <div className="flex flex-col items-center justify-center gap-5">
            {/* Spinner */}
            <div className="h-14 w-14 animate-spin rounded-full border-4 border-slate-700 border-t-blue-400" />

            <p className="text-lg font-medium text-slate-300">
              Loading your todos...
            </p>

            {/* Skeleton preview */}
            <div className="mt-4 w-full space-y-3">
              <div className="h-14 animate-pulse rounded-xl bg-slate-800" />
              <div className="h-14 animate-pulse rounded-xl bg-slate-800" />
              <div className="h-14 animate-pulse rounded-xl bg-slate-800" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}