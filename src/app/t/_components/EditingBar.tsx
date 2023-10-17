"use client";

import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card";
import { useEditingStore } from "../state";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export default function EditingBar() {

  const { title, subtitle, aboutMe, setTitle, setSubtitle, setAboutMe } = useEditingStore((state) => state)

  return <Card className="w-64 absolute z-10 top-1/4 h-1/2 right-4" >
    <CardHeader>
      <CardDescription>Editing Bar</CardDescription>
      <Label htmlFor="title" >Title</Label>
      <Input
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Label htmlFor="subtitle" >Subtitle</Label>
      <Input
        id="subtitle"
        value={subtitle}
        onChange={(e) => setSubtitle(e.target.value)}
      />
      <Label htmlFor="aboutMe" >Subtitle</Label>
      <Input
        id="aboutMe"
        value={aboutMe}
        onChange={(e) => setAboutMe(e.target.value)}
      />
    </CardHeader>
  </Card>
}
