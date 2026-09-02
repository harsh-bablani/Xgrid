-- CreateTable
CREATE TABLE "blog_posts" (
    "id" UUID NOT NULL,
    "brand" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "category_label" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "hero_image" TEXT NOT NULL DEFAULT '',
    "image_alt" TEXT NOT NULL DEFAULT '',
    "author" TEXT NOT NULL DEFAULT '',
    "tags" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "date" TEXT NOT NULL DEFAULT '',
    "read_time" TEXT NOT NULL DEFAULT '5 MIN READ',
    "content" JSONB NOT NULL DEFAULT '[]',
    "published" BOOLEAN NOT NULL DEFAULT false,
    "published_at" TIMESTAMP(3),
    "previous_slugs" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "meta_title" TEXT NOT NULL DEFAULT '',
    "meta_description" TEXT NOT NULL DEFAULT '',
    "focus_keyword" TEXT NOT NULL DEFAULT '',
    "seo_keywords" TEXT NOT NULL DEFAULT '',
    "canonical_url" TEXT NOT NULL DEFAULT '',
    "og_title" TEXT NOT NULL DEFAULT '',
    "og_description" TEXT NOT NULL DEFAULT '',
    "og_image" TEXT NOT NULL DEFAULT '',
    "twitter_title" TEXT NOT NULL DEFAULT '',
    "twitter_description" TEXT NOT NULL DEFAULT '',
    "twitter_image" TEXT NOT NULL DEFAULT '',
    "no_index" BOOLEAN NOT NULL DEFAULT false,
    "no_follow" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "blog_posts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "blog_redirects" (
    "id" UUID NOT NULL,
    "from_slug" TEXT NOT NULL,
    "to_slug" TEXT NOT NULL,

    CONSTRAINT "blog_redirects_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "admin_sessions" (
    "token" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "user_email" TEXT NOT NULL,
    "user_name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "admin_sessions_pkey" PRIMARY KEY ("token")
);

-- CreateIndex
CREATE UNIQUE INDEX "blog_posts_slug_key" ON "blog_posts"("slug");

-- CreateIndex
CREATE INDEX "blog_posts_brand_idx" ON "blog_posts"("brand");

-- CreateIndex
CREATE INDEX "blog_posts_published_idx" ON "blog_posts"("published");

-- CreateIndex
CREATE UNIQUE INDEX "blog_redirects_from_slug_key" ON "blog_redirects"("from_slug");
