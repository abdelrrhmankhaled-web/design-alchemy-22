interface PageHeroProps {
  eyebrow?: string;
  title: string;
  description?: string;
}

export const PageHero = ({ eyebrow, title, description }: PageHeroProps) => {
  return (
    <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-secondary/40 to-background py-16 md:py-20">
      <div className="absolute -left-20 top-0 h-64 w-64 rounded-full bg-primary/15 blur-3xl" aria-hidden />
      <div className="absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-primary/10 blur-3xl" aria-hidden />
      <div className="container relative space-y-4 text-center">
        {eyebrow && <span className="text-sm font-medium text-primary">{eyebrow}</span>}
        <h1 className="mx-auto max-w-3xl text-4xl font-extrabold leading-tight md:text-5xl">{title}</h1>
        {description && <p className="mx-auto max-w-2xl text-base text-foreground/75 md:text-lg">{description}</p>}
      </div>
    </section>
  );
};
