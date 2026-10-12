// Opens every collapsible section so printed output includes all content,
// then invokes the browser's native print dialog.
export function printPage(): void {
  document.querySelectorAll("details").forEach((d) => d.setAttribute("open", ""));
  window.print();
}

// Triggers a download of in-memory text. Called only from explicit user clicks.
export function downloadText(filename: string, text: string, mime: string): void {
  const url = URL.createObjectURL(new Blob([text], { type: mime }));
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 0);
}
