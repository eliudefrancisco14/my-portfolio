import { serialize } from 'next-mdx-remote/serialize';
import { remark } from 'remark';
import html from 'remark-html';

// Assuming the correct type is MDXRemoteSerializeResultType
type MDXRemoteSerializeResultType = ReturnType<typeof serialize>;

export async function mdxToHtml(source: string): Promise<string> {
  const result = await remark().use(html).process(source);
  return result.toString();
}

export async function getMdxContent(source: string): Promise<MDXRemoteSerializeResultType> {
  const mdxSource = await serialize(source);
  return mdxSource;
}