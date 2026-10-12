"use client";

import { useSearchParams } from "next/navigation";
import { useId, useRef, useState, type FormEvent } from "react";
import {
  ArrowDown,
  ArrowUp,
  ChevronDown,
  ChevronUp,
  FileJson,
  FileText,
  Info,
  Minus,
  Plus,
  Printer,
  RotateCcw,
  Trash2,
  X,
} from "lucide-react";
import type { Career } from "@/lib/types";
import { readInitialChoices } from "@/lib/params";
import { focusOptions } from "@/data/degree";
import {
  addItem,
  addSection,
  buildLibrary,
  createCustomSection,
  defaultSelection,
  moveSection,
  removeItem,
  removeSection,
  updateSection,
  type WorkspaceSection,
} from "@/lib/workspace";
import { slugifyFilename, toExport, toJSON, toMarkdown } from "@/lib/export";
import { downloadText, printPage } from "@/lib/print";
import { RoadmapSetupForm, type SetupValue } from "@/components/roadmap-setup-form";
import { Badge, buttonStyles } from "@/components/ui";

const inputClass =
  "block w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-indigo-500";

const iconButton =
  "inline-flex size-8 items-center justify-center rounded-md text-slate-600 hover:bg-slate-100 hover:text-slate-900 disabled:cursor-not-allowed disabled:opacity-40";

export function RoadmapWorkspace({ careers }: { careers: Career[] }) {
  const params = useSearchParams();
  const careerOptions = careers.map((c) => ({ slug: c.slug, title: c.title }));

  const [setup, setSetup] = useState<SetupValue>(() => {
    const initial = readInitialChoices(params, careers.map((c) => c.slug));
    return { ...initial, year: Math.ceil(initial.start / 2) as SetupValue["year"] };
  });
  const library = buildLibrary(setup, careers);

  const [sections, setSections] = useState<WorkspaceSection[]>(() => defaultSelection(library));
  const [expanded, setExpanded] = useState<Record<string, boolean>>(() =>
    sections[0] ? { [sections[0].id]: true } : {},
  );
  const primary = careers.find((c) => c.slug === setup.primary) ?? careers[0];
  const secondary = careers.find((c) => c.slug === setup.secondary);
  const [title, setTitle] = useState(`My ${primary.shortTitle} roadmap`);
  const [announcement, setAnnouncement] = useState("");
  const customCounter = useRef(0);
  const customDialog = useRef<HTMLDialogElement>(null);
  const resetDialog = useRef<HTMLDialogElement>(null);
  const titleId = useId();

  const selectedIds = new Set(sections.map((s) => s.id));
  const focusLabel = focusOptions.find((f) => f.id === setup.focus)?.label ?? setup.focus;

  function announce(message: string) {
    setAnnouncement(message);
  }

  function toggleLibrary(s: WorkspaceSection) {
    if (selectedIds.has(s.id)) {
      setSections((list) => removeSection(list, s.id));
      announce(`Removed “${s.title}” from your roadmap.`);
    } else {
      setSections((list) => addSection(list, s));
      setExpanded((e) => ({ ...e, [s.id]: true }));
      announce(`Added “${s.title}” to the end of your roadmap.`);
    }
  }

  function move(id: string, direction: -1 | 1) {
    const from = sections.findIndex((s) => s.id === id);
    const to = from + direction;
    if (to < 0 || to >= sections.length) return;
    setSections((list) => moveSection(list, id, direction));
    announce(`Moved “${sections[from].title}” to position ${to + 1} of ${sections.length}.`);
  }

  function remove(id: string) {
    const s = sections.find((x) => x.id === id);
    setSections((list) => removeSection(list, id));
    if (s) announce(`Removed “${s.title}”.`);
  }

  function addCustom(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    customCounter.current += 1;
    const s = createCustomSection(
      `custom-${customCounter.current}`,
      String(form.get("title") ?? ""),
      String(form.get("description") ?? ""),
    );
    setSections((list) => [...list, s]);
    setExpanded((x) => ({ ...x, [s.id]: true }));
    announce(`Added custom section “${s.title}”.`);
    e.currentTarget.reset();
    customDialog.current?.close();
  }

  function resetToDefaults() {
    const next = defaultSelection(library);
    setSections(next);
    setExpanded(next[0] ? { [next[0].id]: true } : {});
    setTitle(`My ${primary.shortTitle} roadmap`);
    announce("Roadmap replaced with the default sections for your current choices.");
    resetDialog.current?.close();
  }

  function buildExport() {
    return toExport(
      title,
      primary.title,
      secondary && secondary.slug !== primary.slug ? secondary.title : null,
      `Semester ${setup.start} to the beginning of Semester 7`,
      focusLabel,
      sections,
    );
  }

  function exportFile(kind: "md" | "json") {
    const doc = buildExport();
    const name = slugifyFilename(doc.title);
    if (kind === "md") downloadText(`${name}.md`, toMarkdown(doc), "text/markdown;charset=utf-8");
    else downloadText(`${name}.json`, toJSON(doc), "application/json;charset=utf-8");
  }

  return (
    <div>
      <p className="sr-only" role="status" aria-live="polite">{announcement}</p>

      <div className="flex gap-3 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-950 print:hidden">
        <Info className="mt-0.5 size-5 shrink-0 text-amber-600" aria-hidden />
        <p>
          <span className="font-semibold">Changes are not saved automatically.</span> Your roadmap exists only in this
          browser tab. Refreshing or leaving this page resets it. Use <em>Export</em> or <em>Print</em> to keep a copy.
        </p>
      </div>

      <details className="mt-6 rounded-xl border border-slate-200 bg-white shadow-sm print:hidden">
        <summary className="flex items-center justify-between gap-3 p-5">
          <span>
            <span className="block font-semibold text-slate-900">Roadmap choices</span>
            <span className="mt-0.5 block text-sm text-slate-600">
              Semester {setup.start} · {primary.title}
              {secondary ? ` + ${secondary.title}` : ""} · {focusLabel}
            </span>
          </span>
          <ChevronDown className="disclosure-icon size-4 shrink-0 text-slate-400 transition-transform" aria-hidden />
        </summary>
        <div className="border-t border-slate-100 p-5">
          <p className="mb-4 text-sm text-slate-600">
            Changing these updates the section library. Your current roadmap stays as it is until you choose to replace it.
          </p>
          <RoadmapSetupForm value={setup} onChange={setSetup} careers={careerOptions} />
          <button type="button" className={`${buttonStyles.secondary} mt-5`} onClick={() => resetDialog.current?.showModal()}>
            <RotateCcw className="size-4" aria-hidden /> Replace roadmap with defaults for these choices
          </button>
        </div>
      </details>

      <div className="mt-8 grid gap-8 lg:grid-cols-[320px_1fr]">
        {/* Section library */}
        <aside aria-labelledby="library-heading" className="print:hidden">
          <div className="lg:sticky lg:top-24 lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto lg:pr-1">
            <h2 id="library-heading" className="text-lg font-semibold text-slate-900">Section library</h2>
            <p className="mt-1 text-sm text-slate-600">Select which predefined sections appear in your roadmap.</p>
            <div className="mt-4 space-y-5">
              {library.map((group) => (
                <section key={group.label} aria-label={group.label}>
                  <h3 className="text-xs font-semibold tracking-wide text-slate-500 uppercase">{group.label}</h3>
                  <ul className="mt-2 space-y-1.5">
                    {group.sections.map((s) => {
                      const selected = selectedIds.has(s.id);
                      return (
                        <li key={s.id}>
                          <button
                            type="button"
                            aria-pressed={selected}
                            onClick={() => toggleLibrary(s)}
                            className={`flex w-full items-start gap-2 rounded-lg border px-3 py-2 text-left text-sm transition-colors ${
                              selected
                                ? "border-indigo-300 bg-indigo-50 text-indigo-950"
                                : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                            }`}
                          >
                            {selected ? (
                              <Minus className="mt-0.5 size-4 shrink-0 text-indigo-600" aria-hidden />
                            ) : (
                              <Plus className="mt-0.5 size-4 shrink-0 text-slate-400" aria-hidden />
                            )}
                            <span className="flex-1">{s.title}</span>
                            <span className="sr-only">{selected ? "(in roadmap — activate to remove)" : "(activate to add)"}</span>
                            <span aria-hidden className="text-xs whitespace-nowrap text-slate-500">
                              {selected ? "Added" : "Add"}
                            </span>
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </section>
              ))}
            </div>
          </div>
        </aside>

        {/* Selected roadmap */}
        <section aria-labelledby={titleId} className="min-w-0">
          <div className="print:hidden">
            <label htmlFor={titleId} className="text-sm font-medium text-slate-800">Roadmap title</label>
            <input
              id={titleId}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className={`${inputClass} mt-1.5 text-base font-semibold`}
            />
            <div className="mt-4 flex flex-wrap gap-2">
              <button type="button" className={buttonStyles.primary} onClick={() => customDialog.current?.showModal()}>
                <Plus className="size-4" aria-hidden /> Add custom section
              </button>
              <button type="button" className={buttonStyles.secondary} onClick={printPage} disabled={!sections.length}>
                <Printer className="size-4" aria-hidden /> Print
              </button>
              <button type="button" className={buttonStyles.secondary} onClick={() => exportFile("md")} disabled={!sections.length}>
                <FileText className="size-4" aria-hidden /> Export Markdown
              </button>
              <button type="button" className={buttonStyles.secondary} onClick={() => exportFile("json")} disabled={!sections.length}>
                <FileJson className="size-4" aria-hidden /> Export JSON
              </button>
            </div>
            <div className="mt-3 flex flex-wrap gap-3 text-sm">
              <button
                type="button"
                className="font-medium text-indigo-700 hover:text-indigo-800"
                onClick={() => setExpanded(Object.fromEntries(sections.map((s) => [s.id, true])))}
              >
                Expand all
              </button>
              <button type="button" className="font-medium text-indigo-700 hover:text-indigo-800" onClick={() => setExpanded({})}>
                Collapse all
              </button>
            </div>
          </div>

          {sections.length === 0 ? (
            <div className="mt-6 rounded-xl border border-dashed border-slate-300 p-10 text-center print:hidden">
              <p className="font-medium text-slate-900">Your roadmap is empty.</p>
              <p className="mt-1 text-sm text-slate-600">Add sections from the library or create a custom section.</p>
            </div>
          ) : (
            <ol className="mt-6 space-y-4 print:hidden">
              {sections.map((s, i) => (
                <li key={s.id}>
                  <SectionEditor
                    section={s}
                    position={i}
                    total={sections.length}
                    expanded={!!expanded[s.id]}
                    onToggle={() => setExpanded((e) => ({ ...e, [s.id]: !e[s.id] }))}
                    onMove={(dir) => move(s.id, dir)}
                    onRemove={() => remove(s.id)}
                    onChange={(patch) => setSections((list) => updateSection(list, s.id, patch))}
                    onAddItem={(field, text) => setSections((list) => addItem(list, s.id, field, text))}
                    onRemoveItem={(field, index) => setSections((list) => removeItem(list, s.id, field, index))}
                  />
                </li>
              ))}
            </ol>
          )}

          <PrintView
            title={title}
            meta={[
              `Career path: ${primary.title}`,
              ...(secondary ? [`Secondary path: ${secondary.title}`] : []),
              `Semester ${setup.start} to the beginning of Semester 7`,
              `Focus: ${focusLabel}`,
            ]}
            sections={sections}
          />
        </section>
      </div>

      {/* Add custom section dialog */}
      <dialog
        ref={customDialog}
        aria-labelledby="custom-dialog-title"
        className="m-auto w-[calc(100%-2rem)] max-w-lg rounded-xl p-0 shadow-xl"
      >
        <form onSubmit={addCustom} className="p-6">
          <div className="flex items-start justify-between gap-4">
            <h2 id="custom-dialog-title" className="text-lg font-semibold text-slate-900">Add a custom section</h2>
            <button type="button" className={iconButton} onClick={() => customDialog.current?.close()}>
              <X className="size-4" aria-hidden /><span className="sr-only">Close dialog</span>
            </button>
          </div>
          <label htmlFor="custom-title" className="mt-4 block text-sm font-medium text-slate-800">Section title</label>
          <input id="custom-title" name="title" required className={`${inputClass} mt-1.5`} placeholder="e.g. Open-source contributions" />
          <label htmlFor="custom-description" className="mt-4 block text-sm font-medium text-slate-800">
            Description <span className="font-normal text-slate-500">(optional)</span>
          </label>
          <textarea id="custom-description" name="description" rows={3} className={`${inputClass} mt-1.5`} />
          <p className="mt-2 text-xs text-slate-500">You can add learning topics, projects, and notes after creating it.</p>
          <div className="mt-6 flex justify-end gap-2">
            <button type="button" className={buttonStyles.secondary} onClick={() => customDialog.current?.close()}>Cancel</button>
            <button type="submit" className={buttonStyles.primary}>Add section</button>
          </div>
        </form>
      </dialog>

      {/* Reset confirmation dialog */}
      <dialog
        ref={resetDialog}
        aria-labelledby="reset-dialog-title"
        aria-describedby="reset-dialog-desc"
        className="m-auto w-[calc(100%-2rem)] max-w-md rounded-xl p-0 shadow-xl"
      >
        <div className="p-6">
          <h2 id="reset-dialog-title" className="text-lg font-semibold text-slate-900">Replace your roadmap?</h2>
          <p id="reset-dialog-desc" className="mt-2 text-sm text-slate-600">
            Your current sections, edits, and notes will be replaced with the default semester sections for your current
            choices. Export first if you want to keep a copy.
          </p>
          <div className="mt-6 flex justify-end gap-2">
            <button type="button" className={buttonStyles.secondary} onClick={() => resetDialog.current?.close()} autoFocus>
              Cancel
            </button>
            <button type="button" className={buttonStyles.primary} onClick={resetToDefaults}>Replace roadmap</button>
          </div>
        </div>
      </dialog>
    </div>
  );
}

function SectionEditor({
  section,
  position,
  total,
  expanded,
  onToggle,
  onMove,
  onRemove,
  onChange,
  onAddItem,
  onRemoveItem,
}: {
  section: WorkspaceSection;
  position: number;
  total: number;
  expanded: boolean;
  onToggle: () => void;
  onMove: (dir: -1 | 1) => void;
  onRemove: () => void;
  onChange: (patch: Partial<Omit<WorkspaceSection, "id">>) => void;
  onAddItem: (field: "topics" | "projects", text: string) => void;
  onRemoveItem: (field: "topics" | "projects", index: number) => void;
}) {
  const id = useId();
  const bodyId = `${id}-body`;
  return (
    <article className="rounded-xl border border-slate-200 bg-white shadow-sm">
      <header className="flex items-start gap-3 p-4">
        <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-slate-100 text-xs font-semibold text-slate-700">
          {position + 1}
        </span>
        <div className="min-w-0 flex-1">
          <h3 className="font-semibold break-words text-slate-900">{section.title || "Untitled section"}</h3>
          <div className="mt-1 flex flex-wrap items-center gap-2 text-xs text-slate-500">
            <Badge tone={section.source === "Custom" ? "indigo" : "slate"}>{section.source}</Badge>
            <span>{section.topics.length} topics · {section.projects.length} projects{section.notes.trim() ? " · has notes" : ""}</span>
          </div>
        </div>
        <div className="flex shrink-0 flex-wrap justify-end gap-0.5">
          <button type="button" className={iconButton} onClick={() => onMove(-1)} disabled={position === 0}>
            <ArrowUp className="size-4" aria-hidden /><span className="sr-only">Move “{section.title}” up</span>
          </button>
          <button type="button" className={iconButton} onClick={() => onMove(1)} disabled={position === total - 1}>
            <ArrowDown className="size-4" aria-hidden /><span className="sr-only">Move “{section.title}” down</span>
          </button>
          <button type="button" className={iconButton} onClick={onToggle} aria-expanded={expanded} aria-controls={bodyId}>
            {expanded ? <ChevronUp className="size-4" aria-hidden /> : <ChevronDown className="size-4" aria-hidden />}
            <span className="sr-only">{expanded ? "Collapse" : "Expand"} “{section.title}”</span>
          </button>
          <button type="button" className={`${iconButton} hover:bg-red-50 hover:text-red-700`} onClick={onRemove}>
            <Trash2 className="size-4" aria-hidden /><span className="sr-only">Remove “{section.title}”</span>
          </button>
        </div>
      </header>

      <div id={bodyId} hidden={!expanded} className="space-y-5 border-t border-slate-100 p-4 sm:p-5">
        <div>
          <label htmlFor={`${id}-title`} className="text-sm font-medium text-slate-800">Section title</label>
          <input
            id={`${id}-title`}
            value={section.title}
            onChange={(e) => onChange({ title: e.target.value })}
            className={`${inputClass} mt-1.5`}
          />
        </div>
        <div>
          <label htmlFor={`${id}-desc`} className="text-sm font-medium text-slate-800">Description</label>
          <textarea
            id={`${id}-desc`}
            value={section.description}
            onChange={(e) => onChange({ description: e.target.value })}
            rows={3}
            className={`${inputClass} mt-1.5`}
          />
        </div>
        <ItemList
          label="Learning topics"
          addLabel="Add a learning topic"
          placeholder="e.g. Practise graph problems on BFS"
          items={section.topics}
          onAdd={(t) => onAddItem("topics", t)}
          onRemove={(i) => onRemoveItem("topics", i)}
        />
        <ItemList
          label="Project ideas"
          addLabel="Add a project idea"
          placeholder="e.g. Build a URL shortener with tests"
          items={section.projects}
          onAdd={(t) => onAddItem("projects", t)}
          onRemove={(i) => onRemoveItem("projects", i)}
        />
        <div>
          <label htmlFor={`${id}-notes`} className="text-sm font-medium text-slate-800">Notes</label>
          <textarea
            id={`${id}-notes`}
            value={section.notes}
            onChange={(e) => onChange({ notes: e.target.value })}
            rows={3}
            placeholder="Your own notes for this section"
            className={`${inputClass} mt-1.5`}
          />
        </div>
      </div>
    </article>
  );
}

function ItemList({
  label,
  addLabel,
  placeholder,
  items,
  onAdd,
  onRemove,
}: {
  label: string;
  addLabel: string;
  placeholder: string;
  items: string[];
  onAdd: (text: string) => void;
  onRemove: (index: number) => void;
}) {
  const [draft, setDraft] = useState("");
  const inputId = useId();
  return (
    <div>
      <h4 className="text-sm font-medium text-slate-800">{label}</h4>
      {items.length > 0 ? (
        <ul className="mt-2 divide-y divide-slate-100 rounded-lg border border-slate-200">
          {items.map((item, i) => (
            <li key={`${i}-${item}`} className="flex items-start gap-2 px-3 py-2 text-sm text-slate-700">
              <span className="flex-1 break-words">{item}</span>
              <button
                type="button"
                onClick={() => onRemove(i)}
                className="inline-flex size-6 shrink-0 items-center justify-center rounded text-slate-400 hover:bg-red-50 hover:text-red-700"
              >
                <X className="size-3.5" aria-hidden /><span className="sr-only">Remove “{item}”</span>
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-1 text-sm text-slate-500">None yet.</p>
      )}
      <form
        className="mt-2 flex gap-2"
        onSubmit={(e) => {
          e.preventDefault();
          if (!draft.trim()) return;
          onAdd(draft);
          setDraft("");
        }}
      >
        <label htmlFor={inputId} className="sr-only">{addLabel}</label>
        <input
          id={inputId}
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          placeholder={placeholder}
          className={inputClass}
        />
        <button type="submit" className={`${buttonStyles.secondary} shrink-0 px-3`}>
          <Plus className="size-4" aria-hidden /> Add
        </button>
      </form>
    </div>
  );
}

function PrintView({ title, meta, sections }: { title: string; meta: string[]; sections: WorkspaceSection[] }) {
  return (
    <div className="hidden print:block">
      <h1 className="text-2xl font-bold">{title || "My placement roadmap"}</h1>
      <ul className="mt-2 text-sm">
        {meta.map((m) => (
          <li key={m}>{m}</li>
        ))}
      </ul>
      {sections.map((s, i) => (
        <section key={s.id} className="print-avoid-break mt-6">
          <h2 className="text-lg font-semibold">{i + 1}. {s.title}</h2>
          {s.description && <p className="mt-1 text-sm">{s.description}</p>}
          {s.topics.length > 0 && (
            <>
              <h3 className="mt-3 text-sm font-semibold">Learning topics</h3>
              <ul className="mt-1 list-disc pl-5 text-sm">
                {s.topics.map((t, j) => <li key={j}>{t}</li>)}
              </ul>
            </>
          )}
          {s.projects.length > 0 && (
            <>
              <h3 className="mt-3 text-sm font-semibold">Projects</h3>
              <ul className="mt-1 list-disc pl-5 text-sm">
                {s.projects.map((p, j) => <li key={j}>{p}</li>)}
              </ul>
            </>
          )}
          {s.notes.trim() && (
            <>
              <h3 className="mt-3 text-sm font-semibold">Notes</h3>
              <p className="mt-1 text-sm whitespace-pre-wrap">{s.notes}</p>
            </>
          )}
        </section>
      ))}
      <p className="mt-8 text-xs">Created with Placement Preparation Planner. Completing a roadmap does not guarantee a placement.</p>
    </div>
  );
}
