import { serialize, parse } from 'cookie';

export const MAX_AGE = 60 * 60 * 24 * 7; // 1 week

export function setCookie(res, name, value, options = {}) {
  const cookieOptions = {
    maxAge: MAX_AGE,
    expires: new Date(Date.now() + MAX_AGE * 1000),
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    sameSite: 'lax',
    ...options
  };

  res.setHeader('Set-Cookie', serialize(name, value, cookieOptions));
}

export function getCookie(req, name) {
  const cookies = parseCookies(req);
  return cookies[name];
}

export function parseCookies(req) {
  return parse(req.headers.cookie || '');
}