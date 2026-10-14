import {
  ArrowRight,
  BarChart3,
  Book,
  BookMarked,
  BookOpen,
  Box,
  Calendar,
  Clock,
  FileText,
  Grid3x3,
  Home,
  Landmark,
  Layers,
  LayoutGrid,
  Mail,
  MapPin,
  Moon,
  Phone,
  Search,
  Send,
  Sliders,
  Star,
  Tag,
  Type,
} from "lucide-react";

// Traduce el nombre del icono (el mismo que usa el mock de datos) al componente de Lucide
const iconos = {
  "arrow-right": ArrowRight,
  "bar-chart-3": BarChart3,
  book: Book,
  "book-marked": BookMarked,
  "book-open": BookOpen,
  box: Box,
  calendar: Calendar,
  clock: Clock,
  "file-text": FileText,
  grid: Grid3x3,
  home: Home,
  landmark: Landmark,
  layers: Layers,
  "layout-grid": LayoutGrid,
  mail: Mail,
  "map-pin": MapPin,
  moon: Moon,
  phone: Phone,
  search: Search,
  send: Send,
  sliders: Sliders,
  star: Star,
  tag: Tag,
  type: Type,
};

function Icono({ nombre, className = "size-4.5" }) {
  const Componente = iconos[nombre];
  if (!Componente) return null;
  return <Componente className={className} />;
}

export default Icono;
