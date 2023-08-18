import { api } from "@/utils/api";
import SideDrawer from "./components/navigation/side_drawer";

export default function Home() {

    return (
        <>
            <main className="h-screen w-screen">
                <SideDrawer className=""/>
            </main>
        </>
    );

}
