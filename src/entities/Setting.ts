import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryColumn,
} from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity('settings')
class Setting {
  @PrimaryColumn()
  id: string;

  @Column()
  username: string;

  @Column()
  chat: boolean;

  @UpdateDateColumn()
  updated_at: boolean;

  @CreateDateColumn()
  created_at: boolean;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Setting };
