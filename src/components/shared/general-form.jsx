import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

export function GeneralForm() {
  return (
    <form className="space-y-8">
      {/* Title */}
      <div className="grid gap-2">
        <Label htmlFor="title">Title</Label>
        <Input id="title" placeholder="Enter title" />
      </div>

      {/* Placement Size */}
      <div className="grid gap-2">
        <Label>Placement Size</Label>
        <RadioGroup defaultValue="responsive" className="flex space-x-4">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="responsive" id="responsive" />
            <Label htmlFor="responsive">Responsive</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="fixed" id="fixed" />
            <Label htmlFor="fixed">Fixed</Label>
          </div>
        </RadioGroup>
      </div>

      {/* Select Responsive Ratio */}
      <div className="grid gap-2">
        <Label htmlFor="responsive-ratio">Select Responsive Ratio</Label>
        <Select defaultValue="16:9">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select a ratio" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="16:9">16:9</SelectItem>
            <SelectItem value="4:3">4:3</SelectItem>
            <SelectItem value="1:1">1:1</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Slider Mode */}
      <div className="flex items-center space-x-2">
        <Checkbox id="enable-slider" />
        <Label htmlFor="enable-slider">Enable</Label>
      </div>

      {/* Click-through URL */}
      <div className="grid gap-2">
        <Label htmlFor="click-through-url">Click-through URL</Label>
        <Input id="click-through-url" placeholder="Enter Click-through URL" />
      </div>
    </form>
  );
} 