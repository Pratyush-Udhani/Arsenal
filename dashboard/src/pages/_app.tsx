import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import { Ubuntu } from "next/font/google"
import { api } from "@/utils/api";
import "@/styles/globals.css";

const ubuntu = Ubuntu({ weight: '400', subsets: ['latin'] })

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
    return (
        <SessionProvider session={session}>
            <main className={ubuntu.className}>
                <Component {...pageProps} />
            </main>
        </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
