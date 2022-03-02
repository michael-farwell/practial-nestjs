import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import * as bcrypt from "bcrypt";
import { Repository } from "typeorm";
import { User } from "../models/user.entity";

@Injectable()
export class UsersService {
  constructor (@InjectRepository(User) private userRepository: Repository<User>) {}

  async createOrUpdate (user: User): Promise<User> {
    const hash = await bcrypt.hash(user.getPassword(), 10);
    user.setPassword(hash);
    return this.userRepository.save(user);
  }
}