import { useMemo, useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ArrowUpRight, Calendar, FolderOpen } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import { BLOG_CATEGORIES, BLOG_POSTS } from '../data/editorial';

export default function BlogPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'All';
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);

  useEffect(() => {
    const paramCat = searchParams.get('category') || 'All';
    setSelectedCategory(paramCat);
  }, [searchParams]);

  const handleCategorySelect = (cat) => {
    setSelectedCategory(cat);
    if (cat === 'All') {
      setSearchParams({});
    } else {
      setSearchParams({ category: cat });
    }
  };

  const filteredPosts = useMemo(() => {
    if (selectedCategory === 'All') return BLOG_POSTS;
    return BLOG_POSTS.filter((post) => post.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div>
      <PageHeader
        eyebrow="News, Events & Ceremonies"
        title="Journal & Updates"
        subtitle="Signing ceremonies, Milad & Doa Mahfil gatherings, and milestone residential handovers across El Dorado Developments Ltd."
        breadcrumbs={[{ label: 'Blog' }]}
      />

      <section className="bg-alabaster py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Category Filter Strip */}
          <div className="flex flex-wrap items-center gap-2 border border-stone bg-surface p-4 shadow-card">
            <button
              type="button"
              onClick={() => handleCategorySelect('All')}
              className={`px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] transition ${
                selectedCategory === 'All'
                  ? 'bg-obsidian text-white dark:bg-white dark:text-obsidian'
                  : 'bg-alabaster text-charcoal hover:text-crimson-ink'
              }`}
            >
              All ({BLOG_POSTS.length})
            </button>
            {BLOG_CATEGORIES.map((cat) => {
              const count = BLOG_POSTS.filter((p) => p.category === cat).length;
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => handleCategorySelect(cat)}
                  className={`px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] transition ${
                    active
                      ? 'bg-crimson text-white'
                      : 'bg-alabaster text-concrete hover:text-charcoal'
                  }`}
                >
                  {cat} ({count})
                </button>
              );
            })}
          </div>

          {filteredPosts.length > 0 ? (
            <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredPosts.map((post) => (
                <article
                  key={post.id}
                  className="group flex flex-col overflow-hidden border border-stone bg-surface shadow-card transition hover:-translate-y-1 hover:shadow-editorial"
                >
                  <Link
                    to={`/blog-details/${post.id}`}
                    className="aspect-[16/10] overflow-hidden bg-obsidian"
                  >
                    <img
                      src={post.thumbnail}
                      alt={post.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </Link>

                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center justify-between gap-2 text-xs text-concrete">
                      <span className="font-semibold uppercase tracking-wider text-crimson-ink">
                        {post.category}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5" />
                        {post.date}
                      </span>
                    </div>

                    <h2 className="mt-3 font-serif text-2xl font-semibold leading-snug text-charcoal group-hover:text-crimson-ink">
                      <Link to={`/blog-details/${post.id}`}>{post.title}</Link>
                    </h2>

                    <p className="mt-2 flex-1 text-sm text-concrete">
                      {post.excerpt}
                    </p>

                    <Link
                      to={`/blog-details/${post.id}`}
                      className="mt-5 inline-flex items-center gap-1.5 border-t border-stone/70 pt-4 text-xs font-semibold uppercase tracking-[0.16em] text-charcoal group-hover:text-crimson-ink"
                    >
                      <span>Read Full Update</span>
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="mt-10 border border-stone bg-surface p-12 text-center">
              <FolderOpen className="mx-auto h-10 w-10 text-bronze-ink" />
              <h2 className="mt-4 font-serif text-2xl font-semibold text-charcoal">
                No Articles Published Under “{selectedCategory}” Yet
              </h2>
              <p className="mt-2 text-sm text-concrete">
                All currently published stories on El Dorado appear under{' '}
                <strong>Marketing</strong> and <strong>Logistic &amp; Legal</strong>.
              </p>
              <button
                type="button"
                onClick={() => handleCategorySelect('All')}
                className="mt-5 inline-flex items-center gap-2 border border-obsidian bg-obsidian px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.16em] text-white transition hover:border-crimson hover:bg-crimson dark:border-white/20 dark:bg-[#272D37] dark:hover:border-crimson dark:hover:bg-crimson"
              >
                Show All 6 Posts
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

