import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { Divider } from "@/components/Ornaments";
import { FramedPhoto } from "@/components/Photo";
import { articles } from "@/lib/data";
import { fmtDate } from "@/lib/time";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const a = articles.find((x) => x.slug === slug);
  return { title: a?.title ?? "Article", description: a?.excerpt };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const idx = articles.findIndex((x) => x.slug === slug);
  if (idx < 0) notFound();
  const a = articles[idx];
  const related = articles.filter((x) => x.slug !== slug).slice(0, 2);

  return (
    <>
      <PageHero crumb={a.category} image={a.image} title={a.title} subtitle={`${fmtDate(a.date)} · ${a.read} read`} />
      <section className="section">
        <div className="container narrow">
          <div className="reveal" style={{ marginBottom: 50 }}><FramedPhoto id={a.image} ratio="16 / 9" sizes="(max-width: 860px) 100vw, 820px" /></div>
          <p className="lead reveal" style={{ fontStyle: "italic" }}>{a.excerpt}</p>
          <Divider className="divider" />
          <div className="prose" style={{ marginTop: 30 }}>
            {a.body.map((p, i) => <p key={i}>{p}</p>)}
          </div>
          <div className="center" style={{ margin: "50px 0 70px" }}>
            <p className="deva" style={{ color: "var(--crimson)", fontSize: "1.3rem" }}>॥ ॐ तत् सत् ॥</p>
            <Link href="/articles" className="btn btn-outline">← All Articles</Link>
          </div>
          <h3>Continue reading</h3>
          <div className="grid grid-2">
            {related.map((r) => (
              <Link key={r.slug} href={`/articles/${r.slug}`} className="card corner">
                <div className="meta" style={{ fontFamily: "var(--font-display)", fontSize: ".7rem", letterSpacing: ".18em", color: "var(--rose)", textTransform: "uppercase", marginBottom: 8 }}>{r.category}</div>
                <h4>{r.title}</h4>
                <p style={{ margin: 0 }}>{r.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
