import { Compass } from "lucide-react";
import { ButtonLink, Container } from "@/components/ui";

export default function NotFound() {
  return (
    <Container className="flex flex-col items-center py-24 text-center">
      <span className="flex size-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-700">
        <Compass className="size-6" aria-hidden />
      </span>
      <p className="mt-6 text-sm font-semibold text-indigo-700">404</p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">This page is off the roadmap</h1>
      <p className="mt-3 max-w-md text-slate-600">
        The page you are looking for does not exist. Try one of the main sections instead.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <ButtonLink href="/careers">Explore career paths</ButtonLink>
        <ButtonLink href="/" variant="secondary">Go to home page</ButtonLink>
      </div>
    </Container>
  );
}
