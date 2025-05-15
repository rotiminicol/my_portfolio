
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

interface SkillItemProps {
  imgSrc: string;
  label: string;
  desc: string;
  brandColor: string;
}

const SkillCard: React.FC<SkillItemProps> = ({ imgSrc, label, desc, brandColor }) => {
  return (
    <Card className="overflow-hidden border-none perspective hover-scale transform transition-all duration-300 hover:-translate-y-1">
      <CardContent className="p-6 flex items-center gap-4">
        <div 
          className="flex items-center justify-center w-12 h-12 rounded-md"
          style={{ backgroundColor: `${brandColor}20` }} // Using the brand color with transparency
        >
          <img src={imgSrc} alt={label} className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-lg font-medium">{label}</h3>
          <p className="text-sm text-muted-foreground">{desc}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default SkillCard;
