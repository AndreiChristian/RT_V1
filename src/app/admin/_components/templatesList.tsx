"use client";

import { trpc } from "@/app/_trpc/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function TemplateList() {

  const getTemplates = trpc.getTemplates.useQuery()
  const createTemplate = trpc.createTemplate.useMutation({
    onSettled: () => {
      getTemplates.refetch()
    }
  })

  const [name, setName] = useState("Dummy template")
  const [description, setDescripition] = useState("Dummy description")
  const [price, setPrice] = useState(3200)

  return <section>
    <h1>Create a new template</h1>
    <div className="" >
      <Card>
        <CardHeader>
          <CardTitle>Create a new template</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center justify-center gap-4" >
            <Input
              placeholder="Title"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              placeholder="description"
              value={description}
              onChange={(e) => setDescripition(e.target.value)}
            />
            <Input
              type="number"
              placeholder="description"
              value={price}
              onChange={(e) => setPrice(e.target.valueAsNumber)}
            />
          </div>
        </CardContent>
        <CardFooter className="flex items-center justify-center" >
          <Button
            onClick={() => {
              createTemplate.mutate({
                name,
                description,
                price
              })
            }}
          >
            Create
          </Button>
        </CardFooter>
      </Card>
    </div>
  </section>
}
