import type { ReactNode } from 'react'

interface AppLayoutProps {
  children: ReactNode
}


export function AppLayout({children}:AppLayoutProps){
    return (
        <div className= "flex min-h-screen flex-col bg-brand-background text-brand-text md:flex-row">
            <aside className="hidden border-r border-brand-border bg-brand-surface p-5 md:flex md:w-64 md:shrink-0 md:flex-col">
                {/* Marca: el cuadro dorado funciona como un símbolo simple de MovieLog. */}
                <div className="flex items-center gap-3">
                    <div className="grid size-10 place-items-center rounded-xl bg-brand-primary font-bold text-brand-ink">
                    M
                    </div>
                    <div>
                    <p className="text-lg font-bold tracking-tight text-brand-text">
                        MovieLog
                    </p>
                    <p className="text-xs text-brand-muted">Tu biblioteca de cine</p>
                    </div>
                </div>

                <nav aria-label="Navegación principal" className="mt-10 space-y-2">

                    {/* Catálogo aparece activo mientras esa sea la vista mostrada. */}
                    <a
                    href="#"
                    aria-current="page"
                    className="block rounded-md border-l-2 border-transparent px-3 py-2.5 text-sm text-brand-muted no-underline transition-colors hover:bg-white/5 hover:text-brand-text"
                    >
                    Catálogo de películas
                    </a>

                    {/* Inicio queda neutral hasta que sea la vista activa. */}
                    <a
                    href="#"
                    className="block rounded-md border border-brand-primary bg-brand-primary/5 px-3 py-2.5 text-sm font-medium text-brand-primary no-underline"
                    >
                    Inicio
                    </a>
                </nav>
            </aside>
            <header className="border-b border-brand-border bg-brand-surface p-4 md:hidden">
                <p className="font-bold">MovieLog</p>
            </header>
            <main className="min-w-0 flex-1 p-4 sm:p-6 md:p-8">
                {children}
            </main>
        </div>

    )

}