import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { getCustomRepository } from 'typeorm';
import { UsersRepositories } from '../repositories/UserRepositories';
import * as dotenv from 'dotenv';
dotenv.config();

interface IAuthenticateRequest {
  email: string;
  password: string;
}

class AuthenticateUserService {
  async execute({ email, password }: IAuthenticateRequest) {
    // verificar se email existe

    const usersRepositories = getCustomRepository(UsersRepositories);

    const user = await usersRepositories.findOne({
      email,
    });

    if (!user) {
      throw new Error('Email/Passord incorrect');
    }

    //verificar se a senha esta correta

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new Error('Email/Passord incorrect');
    }

    // generate token
    const token = sign(
      {
        email: user.email,
      },
      process.env.JWT_SECRET,
      {
        subject: user.id,
        expiresIn: '1d',
      }
    );

    return token;
  }
}

export { AuthenticateUserService };
