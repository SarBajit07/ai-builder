import { NextResponse } from "next/server";
import { AppDataSource } from "@/lib/db/data-source";
import { Project } from "@/lib/db/entities/Project";

export async function POST(req: Request) {
  const body = await req.json();
  const db = await AppDataSource();

  const repo = db.getRepository(Project);

  const project = repo.create({
    name: body.name,
    files: body.files,
  });

  await repo.save(project);

  return NextResponse.json(project);
}

export async function GET() {
  const db = await AppDataSource();
  const projects = await db.getRepository(Project).find();
  return NextResponse.json(projects);
}
