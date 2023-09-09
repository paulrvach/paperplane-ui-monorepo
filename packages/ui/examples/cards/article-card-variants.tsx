import { Badge } from "../../components/badge";
import ArticleCard from "../../components/article-card";

function ExampleCard(): JSX.Element {
  return (
    <ArticleCard>
      <ArticleCard.Image
        alt="img"
        buttonText="website"
        href="https://images.unsplash.com/photo-1682686581740-2c5f76eb86d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
        src="https://images.unsplash.com/photo-1682686581740-2c5f76eb86d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
      />
      <ArticleCard.Tags>
        <Badge>Badge</Badge>
        <Badge>Badge</Badge>
        <Badge>Badge</Badge>
      </ArticleCard.Tags>
      <ArticleCard.Title>Article Title</ArticleCard.Title>
      <ArticleCard.Description>Article Description</ArticleCard.Description>
    </ArticleCard>
  );
}

export default ExampleCard;
