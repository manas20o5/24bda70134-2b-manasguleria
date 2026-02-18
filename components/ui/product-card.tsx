import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type Props = {
  name: string;
  price: number;
  category: string;
};

export default function ProductCard({ name, price, category }: Props) {
  return (
    <Card className="bg-white border">
      <CardHeader>
        <CardTitle className="text-2xl">{name}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <p className="font-bold">${price.toFixed(2)}</p>
        <Badge variant={category === "clothing" ? "secondary" : "default"}>
          {category}
        </Badge>
      </CardContent>
    </Card>
  );
}
