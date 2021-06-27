import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import * as dotenv from 'dotenv';

dotenv.config();

interface IPayload {
  sub: string;
}

export function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  //receber o authToken

  const authToken = request.headers.authorization;

  //validar se o authToken esta preenchido

  if (!authToken) {
    return response.status(401).json({
      message: 'Token Missing',
    });
  }

  // validar se token e valido
  const [, token] = authToken.split(' ');
  try {
    const { sub } = verify(token, process.env.JWT_SECRET) as IPayload;

    // recuperar infos do usuario
    request.user_id = sub;

    return next();
  } catch (error) {
    return response.status(401).json({
      message: 'Token problems',
    });
  }
}
