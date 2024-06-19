import NextAuth from 'next-auth';
import authConfig from './auth.config';
import {
  publicRoutes,
  authRoutes,
  apiAuthPrefix,
  DEFAULT_LOGIN_REDIRECT,
  rootRoute,
} from './routes';

const { auth } = NextAuth(authConfig);

export default auth((req): any => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;

  const isRootRoute = rootRoute.includes(nextUrl.pathname);
  const isAPIAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);

  const isPublicRoute = publicRoutes.some((route) =>
    nextUrl.pathname.startsWith(route),
  );

  const isAuthRoute = authRoutes.includes(nextUrl.pathname);

  const isProtectedDynamicRoute = nextUrl.pathname.match(
    /^\/freelance-jobs\/[^\/]+\/apply$/,
  );

  if (isAPIAuthRoute) {
    return null;
  }

  if (isRootRoute) {
    return null;
  }

  if (isAuthRoute) {
    if (isLoggedIn) {
      return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
    }
    return null;
  }

  if (isProtectedDynamicRoute) {
    if (!isLoggedIn) {
      return Response.redirect(new URL('/login', nextUrl));
    }
    return null;
  }

  if (!isLoggedIn && !isPublicRoute) {
    return Response.redirect(new URL('/login', nextUrl));
  }

  return null;
});

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
