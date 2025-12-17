import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
} from "typeorm";
import { Project } from "./Project";

@Entity()
export class ProjectVersion {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @ManyToOne(() => Project, {
    onDelete: "CASCADE",
  })
  project!: Project;

  @Column("simple-json")
  files!: Record<string, string>;

  @CreateDateColumn()
  createdAt!: Date;
}
