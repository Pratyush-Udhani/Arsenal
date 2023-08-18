import { type AppType } from "next/app";
import { Ubuntu } from "next/font/google"
import { api } from "@/utils/api";
import "@/styles/globals.css";

const ubuntu = Ubuntu({ weight: '400', subsets: ['latin'] })

const MyApp: AppType = ({
  Component,
  pageProps: { ...pageProps },
}) => {
    return (
            <main className={ubuntu.className}>
                <Component {...pageProps} />
            </main>
  );
};

export default api.withTRPC(MyApp);
