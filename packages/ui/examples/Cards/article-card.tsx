import { Badge } from "../../components/Badge";
import ArticleCard from "../../components/ArticleCard";

const ExampleCard = () => {
  return (
    <ArticleCard >
      <ArticleCard.Image
        src="https://images.unsplash.com/photo-1682686581740-2c5f76eb86d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
        alt="img"
        buttonText="website"
        href="https://images.unsplash.com/photo-1682686581740-2c5f76eb86d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
      />
      <ArticleCard.Tags>
        <Badge children="badge" className=""/>
        <Badge children="badge" className=""/>
        <Badge children="badge" className=""/>
      </ArticleCard.Tags>
      <ArticleCard.Title children="Article Title" />
      <ArticleCard.Description children="Article Description" />
    </ArticleCard>
  );
};

export default ExampleCard
