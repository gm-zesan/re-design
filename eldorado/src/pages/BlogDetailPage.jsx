import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Calendar, Expand, Tag } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import LightboxModal from '../components/LightboxModal';
import { BLOG_CATEGORIES, BLOG_POSTS } from '../data/editorial';

export default function BlogDetailPage() {
  const { id } = useParams();
  const post = BLOG_POSTS.find((p) => String(p.id) === String(id));
  const [lightboxOpen, setLightboxOpen] = useState(false);

  if (!post) {
    return (
      <div>
        <PageHeader
          eyebrow="Blog"
          title="Story Not Found"
          subtitle="We could not locate a news story matching the requested ID."
          breadcrumbs={[
            { label: 'Blog', to: '/blog' },
            { label: 'Not Found' },
          ]}
        />
        <div className="mx-auto max-w-3xl px-4 py-20 text-center">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 bg-crimson px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to All News</span>
          </Link>
        </div>
      </div>
    );
  }

  const recentPosts = BLOG_POSTS.filter((p) => p.id !== post.id).slice(0, 4);

  return (
    <div>
      <PageHeader
        eyebrow={post.category}
        title={post.title}
        subtitle={`Published ${post.date}`}
        breadcrumbs={[
          { label: 'Blog', to: '/blog' },
          { label: post.title },
        ]}
      />

      <section className="bg-alabaster py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12">
            {/* Main Article */}
            <article className="lg:col-span-8 border border-stone bg-surface p-6 shadow-card sm:p-10">
              <div className="relative overflow-hidden border border-stone bg-obsidian">
                <img
                  src={post.detailImage || post.thumbnail}
                  alt={post.title}
                  className="max-h-[520px] w-full object-cover"
                />
                <button
                  type="button"
                  onClick={() => setLightboxOpen(true)}
                  aria-label="Expand story photo"
                  className="absolute right-4 top-4 inline-flex items-center gap-1.5 bg-obsidian/80 px-3 py-2 text-[11px] font-semibold uppercase tracking-wider text-white backdrop-blur-sm transition hover:bg-crimson"
                >
                  <Expand className="h-3.5 w-3.5" />
                  <span>Expand Photo</span>
                </button>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-5 border-b border-stone pb-5 text-xs text-concrete">
                <span className="inline-flex items-center gap-1.5 font-semibold uppercase tracking-wider text-crimson-ink">
                  <Tag className="h-3.5 w-3.5" />
                  {post.category}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5 text-bronze-ink" />
                  {post.date}
                </span>
              </div>

              <h2 className="mt-6 font-serif text-3xl font-semibold text-charcoal">
                {post.title}
              </h2>
              <p className="mt-4 whitespace-pre-line text-base leading-relaxed text-concrete sm:text-lg">
                {post.content}
              </p>

              <div className="mt-8 border-t border-stone pt-6">
                <Link
                  to="/blog"
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-charcoal hover:text-crimson-ink"
                >
                  <ArrowLeft className="h-4 w-4" />
                  <span>Back to Journal Archive</span>
                </Link>
              </div>
            </article>

            {/* Sidebar Categories & Recent Posts */}
            <aside className="lg:col-span-4 space-y-6">
              <div className="border border-stone bg-surface p-6 shadow-card">
                <h3 className="font-serif text-2xl font-semibold text-charcoal">
                  Categories
                </h3>
                <ul className="mt-4 divide-y divide-stone/70 text-sm">
                  {BLOG_CATEGORIES.map((cat) => {
                    const count = BLOG_POSTS.filter(
                      (p) => p.category === cat
                    ).length;
                    return (
                      <li key={cat}>
                        <Link
                          to={`/blog?category=${encodeURIComponent(cat)}`}
                          className="flex items-center justify-between py-2.5 text-concrete transition hover:text-crimson-ink"
                        >
                          <span>{cat}</span>
                          <span className="rounded bg-limestone px-2 py-0.5 text-xs font-semibold text-charcoal">
                            {count}
                          </span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className="border border-stone bg-surface p-6 shadow-card">
                <h3 className="font-serif text-2xl font-semibold text-charcoal">
                  Recent Posts
                </h3>
                <div className="mt-4 space-y-4">
                  {recentPosts.map((item) => (
                    <Link
                      key={item.id}
                      to={`/blog-details/${item.id}`}
                      className="group flex items-start gap-3"
                    >
                      <img
                        src={item.thumbnail}
                        alt={item.title}
                        className="h-16 w-20 shrink-0 object-cover border border-stone"
                      />
                      <div>
                        <p className="font-serif text-base font-semibold leading-snug text-charcoal group-hover:text-crimson-ink">
                          {item.title}
                        </p>
                        <p className="mt-1 text-xs text-concrete">
                          {item.date}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <LightboxModal
        images={[post.detailImage || post.thumbnail]}
        currentIndex={0}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        title={post.title}
      />
    </div>
  );
}

