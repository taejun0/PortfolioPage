export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  description?: string;
  tags: string[];
  content: string;
  isVelogPost?: boolean;
  velogUrl?: string;
  velogDate?: string; // Velog에서 작성된 날짜
}

export interface BlogMetadata {
  slug: string;
  title: string;
  date: string;
  description?: string;
  tags: string[];
  isVelogPost?: boolean;
  velogUrl?: string;
  velogDate?: string;
}

