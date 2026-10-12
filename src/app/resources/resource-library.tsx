"use client";

import { useId, useState } from "react";
import { Search, X } from "lucide-react";
import type { Resource, ResourceTopic, ResourceTopicId, ResourceType } from "@/lib/types";
import { ResourceCard } from "@/components/resource-card";

const selectClass =
  "mt-1.5 block w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 focus:border-indigo-500";

export function ResourceLibrary({
  resources,
  topics,
  careers,
}: {
  resources: Resource[];
  topics: ResourceTopic[];
  careers: { slug: string; title: string }[];
}) {
  const id = useId();
  const [query, setQuery] = useState("");
  const [topic, setTopic] = useState<ResourceTopicId | "">("");
  const [type, setType] = useState<ResourceType | "">("");
  const [career, setCareer] = useState("");

  const types = [...new Set(resources.map((r) => r.type))].sort();
  const topicLabel = (tid: ResourceTopicId) => topics.find((t) => t.id === tid)?.label ?? tid;
  const careerTitle = (slug: string) => careers.find((c) => c.slug === slug)?.title ?? slug;

  const q = query.trim().toLowerCase();
  const visible = resources.filter(
    (r) =>
      (!topic || r.topic === topic) &&
      (!type || r.type === type) &&
      (!career || r.careers.includes(career)) &&
      (!q || `${r.name} ${r.description} ${topicLabel(r.topic)}`.toLowerCase().includes(q)),
  );
  const filtered = !!(q || topic || type || career);

  return (
    <div>
      <div className="grid gap-4 md:grid-cols-[2fr_1fr_1fr_1fr]">
        <div>
          <label htmlFor={`${id}-q`} className="block text-sm font-medium text-slate-800">Search</label>
          <div className="relative mt-1.5">
            <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-slate-400" aria-hidden />
            <input
              id={`${id}-q`}
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="e.g. SQL, Kubernetes, linear algebra"
              className="block w-full rounded-lg border border-slate-300 bg-white py-2.5 pr-3 pl-9 text-sm placeholder:text-slate-400 focus:border-indigo-500"
            />
          </div>
        </div>
        <div>
          <label htmlFor={`${id}-topic`} className="block text-sm font-medium text-slate-800">Topic</label>
          <select id={`${id}-topic`} className={selectClass} value={topic} onChange={(e) => setTopic(e.target.value as ResourceTopicId | "")}>
            <option value="">All topics</option>
            {topics.map((t) => <option key={t.id} value={t.id}>{t.label}</option>)}
          </select>
        </div>
        <div>
          <label htmlFor={`${id}-type`} className="block text-sm font-medium text-slate-800">Resource type</label>
          <select id={`${id}-type`} className={selectClass} value={type} onChange={(e) => setType(e.target.value as ResourceType | "")}>
            <option value="">All types</option>
            {types.map((t) => <option key={t} value={t}>{t}</option>)}
          </select>
        </div>
        <div>
          <label htmlFor={`${id}-career`} className="block text-sm font-medium text-slate-800">Career path</label>
          <select id={`${id}-career`} className={selectClass} value={career} onChange={(e) => setCareer(e.target.value)}>
            <option value="">All career paths</option>
            {careers.map((c) => <option key={c.slug} value={c.slug}>{c.title}</option>)}
          </select>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-4">
        <p className="text-sm text-slate-600" role="status" aria-live="polite">
          Showing {visible.length} of {resources.length} resources
        </p>
        {filtered && (
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setTopic("");
              setType("");
              setCareer("");
            }}
            className="inline-flex items-center gap-1 text-sm font-semibold text-indigo-700 hover:text-indigo-800"
          >
            <X className="size-4" aria-hidden /> Clear filters
          </button>
        )}
      </div>

      {visible.length === 0 ? (
        <p className="mt-6 rounded-xl border border-dashed border-slate-300 p-10 text-center text-slate-600">
          No resources match these filters.
        </p>
      ) : (
        <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((r) => (
            <li key={r.name}>
              <ResourceCard resource={r} topicLabel={topicLabel(r.topic)} careerTitles={r.careers.map(careerTitle)} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
