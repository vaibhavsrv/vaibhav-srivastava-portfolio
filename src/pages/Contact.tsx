import { useEffect, useState } from "react";
import { PageShell } from "@/components/PageShell";
import { PageHeader } from "@/components/PageHeader";
import { SITE } from "@/lib/site-data";
import { toast } from "sonner";

const Contact = () => {
  const [sending, setSending] = useState(false);
  useEffect(() => { document.title = `Contact — ${SITE.name}`; }, []);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      (e.target as HTMLFormElement).reset();
      toast.success("Message queued — I'll be in touch within 48h.");
    }, 900);
  };

  return (
    <PageShell>
      <PageHeader
        index="04 — Contact"
        title="Say"
        italicTitle="hello."
        intro="Got a project, a role, or a half-formed idea? I'd love to hear about it. I usually reply within a couple of days."
      />

      <section className="container-edge grid gap-12 md:grid-cols-12">
        {/* form */}
        <form onSubmit={onSubmit} className="md:col-span-7 space-y-6">
          {[
            { id: "name", label: "Your name", type: "text", placeholder: "Ada Lovelace" },
            { id: "email", label: "Email", type: "email", placeholder: "you@studio.com" },
            { id: "budget", label: "Budget (optional)", type: "text", placeholder: "$5k — $25k" },
          ].map((f) => (
            <div key={f.id} className="group">
              <label htmlFor={f.id} className="mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
                {f.label}
              </label>
              <input
                id={f.id}
                type={f.type}
                required={f.id !== "budget"}
                placeholder={f.placeholder}
                className="mt-2 w-full border-0 border-b border-border bg-transparent py-3 text-2xl text-foreground placeholder:text-muted-foreground/40 focus:border-primary focus:outline-none"
              />
            </div>
          ))}

          <div>
            <label htmlFor="message" className="mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
              Tell me about it
            </label>
            <textarea
              id="message"
              rows={4}
              required
              placeholder="A few sentences is plenty…"
              className="mt-2 w-full resize-none border-0 border-b border-border bg-transparent py-3 text-xl text-foreground placeholder:text-muted-foreground/40 focus:border-primary focus:outline-none"
            />
          </div>

          <button
            type="submit"
            disabled={sending}
            className="group inline-flex items-center gap-3 rounded-full bg-primary px-8 py-4 mono text-xs uppercase tracking-[0.25em] text-primary-foreground transition-all hover:shadow-neon disabled:opacity-50"
          >
            {sending ? "Sending…" : "Send message"}
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </button>
        </form>

        {/* meta */}
        <aside className="md:col-span-5 space-y-10">
          <div>
            <p className="mono text-xs uppercase tracking-[0.25em] text-muted-foreground">Email</p>
            <a href={`mailto:${SITE.email}`} className="display-serif mt-2 block text-3xl md:text-4xl link-underline">
              {SITE.email}
            </a>
          </div>
          <div>
            <p className="mono text-xs uppercase tracking-[0.25em] text-muted-foreground">Elsewhere</p>
            <ul className="mt-3 space-y-2">
              {SITE.socials.map((s) => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noreferrer" className="text-xl link-underline">
                    {s.label} ↗
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-border bg-card p-6">
            <p className="mono text-xs uppercase tracking-[0.25em] text-primary">● Now</p>
            <p className="mt-3 text-muted-foreground">
              Booking selectively for Q3 — most engagements run 3–8 weeks. Happy to chat about smaller scopes too.
            </p>
          </div>
        </aside>
      </section>
    </PageShell>
  );
};

export default Contact;
