import DateFns from "src/components/lib/date-fns";
import { getAllPostIds, getPostData } from "src/markdown";

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

const PostDinamico = ({ postData }) => {
  return (
    <div>
      {postData.title}
      <br />
      {postData.id}
      <br />
      <DateFns dateString={postData.date} />
      <br />
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </div>
  );
};

export default PostDinamico;
