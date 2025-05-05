
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: "Como diversificar sua carteira de investimentos em 2025",
    excerpt: "Descubra as melhores estratégias para diversificar seus investimentos e reduzir riscos em um mercado volátil.",
    image: "https://images.unsplash.com/photo-1579532536935-619928decd08?auto=format&fit=crop&q=80",
    author: "João Silva",
    date: "05 Mai 2025",
    category: "Investimentos",
    featured: true
  },
  {
    id: 2,
    title: "Guia completo sobre Renda Fixa para iniciantes",
    excerpt: "Tudo o que você precisa saber sobre investimentos em renda fixa: tipos, riscos, rentabilidade e estratégias.",
    image: "https://images.unsplash.com/photo-1630570000986-c320fe073e8a?auto=format&fit=crop&q=80",
    author: "Maria Oliveira",
    date: "28 Abr 2025",
    category: "Renda Fixa"
  },
  {
    id: 3,
    title: "Análise: O impacto das taxas de juros no mercado de ações",
    excerpt: "Como as mudanças nas taxas de juros afetam o mercado de ações e quais setores costumam se beneficiar.",
    image: "https://images.unsplash.com/photo-1535320903710-d993d3d77d29?auto=format&fit=crop&q=80",
    author: "Carlos Santos",
    date: "15 Abr 2025",
    category: "Mercado"
  },
  {
    id: 4,
    title: "Fundos Imobiliários: vantagens e como escolher os melhores",
    excerpt: "Conheça as vantagens dos fundos imobiliários e aprenda a selecionar os melhores para o seu perfil.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80",
    author: "Ana Costa",
    date: "10 Abr 2025",
    category: "FIIs"
  },
  {
    id: 5,
    title: "A importância do planejamento financeiro para aposentadoria",
    excerpt: "Como começar a planejar sua aposentadoria desde cedo e garantir tranquilidade financeira no futuro.",
    image: "https://images.unsplash.com/photo-1586282391129-76a6df230234?auto=format&fit=crop&q=80",
    author: "Paulo Mendes",
    date: "02 Abr 2025",
    category: "Planejamento"
  },
  {
    id: 6,
    title: "Investimentos internacionais: como diversificar globalmente",
    excerpt: "Estratégias para investir no exterior, minimizar riscos e aproveitar oportunidades em diferentes mercados.",
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80",
    author: "Lucia Fernandes",
    date: "25 Mar 2025",
    category: "Internacional"
  }
];

const BlogGrid = () => {
  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);
  
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto">
        {/* Category Filters */}
        <div className="flex flex-wrap gap-3 mb-12 justify-center">
          <CategoryButton label="Todos" active={true} />
          <CategoryButton label="Investimentos" />
          <CategoryButton label="Renda Fixa" />
          <CategoryButton label="Mercado" />
          <CategoryButton label="FIIs" />
          <CategoryButton label="Planejamento" />
          <CategoryButton label="Internacional" />
        </div>
        
        {/* Featured Post */}
        {featuredPost && (
          <div className="mb-16">
            <FeaturedBlogPost post={featuredPost} />
          </div>
        )}
        
        {/* Regular Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularPosts.map(post => (
            <BlogPostCard key={post.id} post={post} />
          ))}
        </div>
        
        {/* Pagination */}
        <div className="flex justify-center mt-16">
          <nav className="inline-flex items-center">
            <button className="px-4 py-2 border border-gray-300 rounded-l-md bg-white hover:bg-gray-50">
              Anterior
            </button>
            <button className="px-4 py-2 border-t border-b border-gray-300 bg-white hover:bg-gray-50">
              1
            </button>
            <button className="px-4 py-2 border-t border-b border-gray-300 bg-jb3-gold text-white">
              2
            </button>
            <button className="px-4 py-2 border-t border-b border-gray-300 bg-white hover:bg-gray-50">
              3
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-r-md bg-white hover:bg-gray-50">
              Próxima
            </button>
          </nav>
        </div>
      </div>
    </section>
  );
};

const CategoryButton = ({ label, active = false }: { label: string; active?: boolean }) => (
  <button 
    className={`px-5 py-2 rounded-full transition-colors ${
      active 
        ? 'bg-jb3-gold text-white' 
        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
    }`}
  >
    {label}
  </button>
);

type BlogPost = {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  author: string;
  date: string;
  category: string;
  featured?: boolean;
};

const FeaturedBlogPost = ({ post }: { post: BlogPost }) => (
  <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-transform hover:translate-y-[-8px]">
    <div className="grid md:grid-cols-2 gap-6">
      <div className="h-64 md:h-full overflow-hidden">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-8 flex flex-col justify-center">
        <span className="inline-block bg-jb3-navy/10 text-jb3-navy rounded-full px-3 py-1 text-sm font-medium mb-4">
          {post.category}
        </span>
        <h3 className="text-2xl font-bold text-jb3-navy mb-4">{post.title}</h3>
        <p className="text-gray-600 mb-6">{post.excerpt}</p>
        
        <div className="flex items-center text-sm text-gray-500 mb-6">
          <div className="flex items-center mr-4">
            <User size={16} className="mr-1" />
            <span>{post.author}</span>
          </div>
          <div className="flex items-center">
            <Calendar size={16} className="mr-1" />
            <span>{post.date}</span>
          </div>
        </div>
        
        <Link 
          to={`/blog/${post.id}`} 
          className="inline-flex items-center text-jb3-gold font-medium"
        >
          Ler artigo completo
          <ArrowRight size={16} className="ml-1" />
        </Link>
      </div>
    </div>
  </div>
);

const BlogPostCard = ({ post }: { post: BlogPost }) => (
  <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-transform hover:translate-y-[-8px]">
    <div className="h-48 overflow-hidden">
      <img 
        src={post.image} 
        alt={post.title} 
        className="w-full h-full object-cover transition-transform hover:scale-110"
      />
    </div>
    <div className="p-6">
      <span className="inline-block bg-jb3-navy/10 text-jb3-navy rounded-full px-3 py-1 text-sm font-medium mb-4">
        {post.category}
      </span>
      <h3 className="text-xl font-bold text-jb3-navy mb-3">{post.title}</h3>
      <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
      
      <div className="flex items-center text-sm text-gray-500 mb-4">
        <div className="flex items-center mr-4">
          <User size={16} className="mr-1" />
          <span>{post.author}</span>
        </div>
        <div className="flex items-center">
          <Calendar size={16} className="mr-1" />
          <span>{post.date}</span>
        </div>
      </div>
      
      <Link 
        to={`/blog/${post.id}`} 
        className="inline-flex items-center text-jb3-gold font-medium"
      >
        Ler artigo
        <ArrowRight size={16} className="ml-1" />
      </Link>
    </div>
  </div>
);

export default BlogGrid;
