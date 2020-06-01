// CMSからのレスポンス結果の型定義
type CMS = {
  contents: {
    id: string;
    title: string;
    excerpt: string;
    date: string;
    slug: string;
    blogtext: string;
  }[];
  totalCount: string;
  offset: string;
  limit: string;
};

export default CMS;
