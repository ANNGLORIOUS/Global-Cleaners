import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ title, description, icon, link }) => {
  return (
    <div className="bg-card rounded-lg shadow-md p-6 transition-all hover:shadow-lg">
      <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 font-libre">{title}</h3>
      <p className="text-darktext/80 mb-4">{description}</p>
      <Link to={link} className="flex items-center text-primary font-semibold hover:text-accent transition-colors">
        Learn More <ArrowRight size={16} className="ml-2" />
      </Link>
    </div>
  );
};

export default ServiceCard;