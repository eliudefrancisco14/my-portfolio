'use client';

import React from 'react';
import { MDXRemote } from 'next-mdx-remote';
import type { MDXRemoteSerializeResult } from 'next-mdx-remote';

interface MdxRendererProps {
  mdxSource: MDXRemoteSerializeResult;
}

const MdxRenderer: React.FC<MdxRendererProps> = ({ mdxSource }) => {
  return <MDXRemote {...mdxSource} />;
};

export default MdxRenderer;