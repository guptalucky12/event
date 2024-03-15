import { authMiddleware } from "@clerk/nextjs";
 
export default authMiddleware({
//   publicRoutes: ['/anyone-can-visit-this-route'],
    publicRoutes: [
        "/",
        "eVenTO/:id",
        "/api/webhook/clerk",
        "/api/webhook/stripe",
        "/api/uploadthing"
    ],
//   ignoredRoutes: ['/no-auth-in-this-route'],
    ignoredRoutes: [
        "/api/webhook/clerk",
        "/api/webhook/stripe",
        "/api/uploadthing"
    ]
});
 
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};