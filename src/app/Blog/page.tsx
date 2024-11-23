import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import fs from "fs";
import path from "path";
import MdxRenderer from "@/components/MDXRendered";

async function getMdxContent(): Promise<MDXRemoteSerializeResult> {
  const filePath = path.join(process.cwd(), "src/content/about.mdx");
  const source = fs.readFileSync(filePath, "utf8");
  const mdxSource = await serialize(source);
  return mdxSource;
}

const Page = async () => {
  const mdxSource = await getMdxContent();
  return (
    <section>
      <div className="section-1 mt-5">
        <MdxRenderer mdxSource={mdxSource} />
      </div>
    </section>
  );
};

export default Page;
