import Link from "next/link";
import Layout from "../../components/layout/Layout";
import { GetStaticProps } from "next";
import { getTags } from "@static-fns/blog";

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const tags = Object.keys(getTags());
  return {
    props: {
      tags,
    },
  };
};

type Props = {
  tags: string[];
};

export default function TagsRoute({ tags }: Props) {
  return (
    <Layout>
      <h1 className="inset">Tags</h1>
      <main className="inset">
        {tags.map((tag) => (
          <Link href={`/tag/${tag}`} key={tag}>
            <a>
              <span>{tag + " "}</span>
            </a>
          </Link>
        ))}
      </main>
    </Layout>
  );
}
