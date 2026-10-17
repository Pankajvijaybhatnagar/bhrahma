"use client";

import { useState } from "react";
import { Icon } from "./Ornaments";

type Field = { name: string; label: string; type?: string; required?: boolean; options?: string[]; textarea?: boolean; half?: boolean; placeholder?: string };

// Generic enquiry form used by Contact, Volunteer and Annadanam pages.
export default function SimpleForm({ fields, submit, successTitle, successText }: { fields: Field[]; submit: string; successTitle: string; successText: string }) {
  const [done, setDone] = useState(false);

  if (done)
    return (
      <div className="form-panel success">
        <Icon.Check className="ok" />
        <h3>{successTitle}</h3>
        <p className="muted">{successText}</p>
        <button className="btn btn-outline btn-sm" onClick={() => setDone(false)}>Send another</button>
      </div>
    );

  // group consecutive half-width fields into rows
  const rows: Field[][] = [];
  fields.forEach((f) => {
    const last = rows[rows.length - 1];
    if (f.half && last && last.length === 1 && last[0].half) last.push(f);
    else rows.push([f]);
  });

  const render = (f: Field) => (
    <div className="field" key={f.name}>
      <label htmlFor={f.name}>{f.label}</label>
      {f.options ? (
        <select id={f.name} name={f.name} required={f.required}>
          {f.options.map((o) => <option key={o}>{o}</option>)}
        </select>
      ) : f.textarea ? (
        <textarea id={f.name} name={f.name} required={f.required} placeholder={f.placeholder} />
      ) : (
        <input id={f.name} name={f.name} type={f.type ?? "text"} required={f.required} placeholder={f.placeholder} />
      )}
    </div>
  );

  return (
    <form className="form-panel form" onSubmit={(e) => { e.preventDefault(); setDone(true); }}>
      {rows.map((r, i) => (r.length === 2 ? <div className="form-row" key={i}>{r.map(render)}</div> : render(r[0])))}
      <button className="btn btn-primary" type="submit">{submit}</button>
    </form>
  );
}
