import { ExternalLink as ExternalIcon } from "lucide-react";
import type { Resource } from "@/lib/types";
import { Badge, ExternalLink } from "./ui";

export function ResourceCard({
  resource,
  topicLabel,
  careerTitles,
}: {
  resource: Resource;
  topicLabel: string;
  careerTitles: string[];
}) {
  return (
    <article className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex flex-wrap gap-1.5">
        <Badge tone="indigo">{resource.type}</Badge>
        <Badge>{topicLabel}</Badge>
      </div>
      <h3 className="mt-3 font-semibold text-slate-900">{resource.name}</h3>
      <p className="mt-1.5 text-sm text-slate-600">{resource.description}</p>
      {careerTitles.length > 0 && (
        <p className="mt-3 text-xs text-slate-500">
          <span className="font-medium text-slate-600">Relevant for:</span> {careerTitles.join(", ")}
        </p>
      )}
      <div className="mt-auto pt-4">
        {resource.url ? (
          <ExternalLink
            href={resource.url}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-700 hover:text-indigo-800"
          >
            Open resource <ExternalIcon className="size-3.5" aria-hidden />
          </ExternalLink>
        ) : (
          <p className="text-sm text-slate-500">No link listed — search for it by name or check your library.</p>
        )}
      </div>
    </article>
  );
}
