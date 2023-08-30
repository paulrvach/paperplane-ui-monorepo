import {
    ArticleCard,
    ArticleCardDescription,
    ArticleCardImage,
    ArticleCardTags,
    ArticleCardTitle,
  } from '../../components/ArticleCard';
  
  export const ExampleCard = () => {
    return (
      <ArticleCard>
        <ArticleCardImage
          src='https://images.unsplash.com/photo-1682686581740-2c5f76eb86d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80'
          alt='img'
          buttonText='website'
          href='https://images.unsplash.com/photo-1682686581740-2c5f76eb86d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80'
        />
        <ArticleCardTags></ArticleCardTags>
        <ArticleCardTitle children='Article Title' />
        <ArticleCardDescription children='Article Description' />
      </ArticleCard>
    );
  };