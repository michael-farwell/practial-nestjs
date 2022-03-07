import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Item } from "./item.entity";
import { User } from "./user.entity";

@Entity()
export class Order {
  @PrimaryGeneratedColumn() id: number;

  @Column() total: number;

  @CreateDateColumn() date: Date;

  @ManyToOne(() => User,
    (user) => user.orders)
  user: User;

  @OneToMany(() => Item,
    (item) => item.order,
    { cascade: ["insert"] })
  items: Item[];

  getId (): number {
    return this.id;
  }

  setId (id: number) {
    this.id = id;
  }

  getTotal (): number {
    return this.total;
  }

  setTotal (total: number) {
    this.total = total;
  }

  getDate (): Date {
    return this.date;
  }

  setDate (date: Date) {
    this.date = date;
  }

  getUser (): User {
    return this.user;
  }

  setUser (user: User) {
    this.user = user;
  }

  getItems (): Item[] {
    return this.items;
  }

  setItems (items: Item[]) {
    this.items = items;
  }
}