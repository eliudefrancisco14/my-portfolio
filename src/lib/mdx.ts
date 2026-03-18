import { serialize } from 'next-mdx-remote/serialize';
import type { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { remark } from 'remark';
import html from 'remark-html';

export async function mdxToHtml(source: string): Promise<string> {
  const result = await remark().use(html).process(source);
  return result.toString();
}

export async function getMdxContent(source: string): Promise<MDXRemoteSerializeResult> {
  // blockDangerousJS: true previne execução de JS arbitrário no MDX (CVE-2026-0969)
  const mdxSource = await serialize(source, { blockDangerousJS: true });
  return mdxSource;
}