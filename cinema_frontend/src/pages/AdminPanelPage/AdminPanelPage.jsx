import AddFilm from "@/components/AdminOptionComponents/AddFilm/AddFilm";
import AddHall from "@/components/AdminOptionComponents/AddHall/AddHall";
import AddSession from "@/components/AdminOptionComponents/AddSession/AddSession";
import ListOfHalls from "@/components/AdminOptionComponents/ListOfHalls/ListOfHalls";
import ListOfSessions from "@/components/AdminOptionComponents/ListOfSessions/ListOfSessions";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";

const AdminPanelPage = () => {
    const [activeComponent, setActiveComponent] = useState(null);

    const renderComponent = () => {
        switch (activeComponent) {
            case "addHall":
                return <AddHall />;
            case "listOfHalls":
                return <ListOfHalls />;
            case "addSession":
                return <AddSession />;
            case "listOfSessions":
                return <ListOfSessions />;
            case "addFilm":
                return <AddFilm />
            default:
                return <p className="text-gray-500">Select an action from the sidebar.</p>;
        }
    };

    return (
        <div className="flex">
            <div className="w-1/4 bg-gray-100 h-screen p-4">
                <div className="space-y-4">
                    <Button
                        variant={activeComponent === "addHall" ? "destructive" : "outline"}
                        className="w-full py-2 px-4"
                        onClick={() => setActiveComponent("addHall")}
                    >
                        Add halls
                    </Button>
                    <Button
                        variant={activeComponent === "listOfHalls" ? "destructive" : "outline"}
                        className="w-full py-2 px-4"
                        onClick={() => setActiveComponent("listOfHalls")}
                    >
                        List halls
                    </Button>
                    <Button
                        variant={activeComponent === "addSession" ? "destructive" : "outline"}
                        className="w-full py-2 px-4"
                        onClick={() => setActiveComponent("addSession")}
                    >
                        Add sessions
                    </Button>
                    <Button
                        variant={activeComponent === "listOfSessions" ? "destructive" : "outline"}
                        className="w-full py-2 px-4"
                        onClick={() => setActiveComponent("listOfSessions")}
                    >
                        List sessions
                    </Button>
                    <Button
                        variant={activeComponent === "addFilm" ? "destructive" : "outline"}
                        className="w-full py-2 px-4"
                        onClick={() => setActiveComponent("addFilm")}
                    >
                        Add films
                    </Button>
                    <Button variant="outline" className="w-full py-2 px-4">
                        List films
                    </Button>
                    <Button variant="outline" className="w-full py-2 px-4">
                        List tickets
                    </Button>
                    <Button variant="outline" className="w-full py-2 px-4">
                        List users
                    </Button>
                </div>
            </div>

            <div className="w-3/4 p-8">{renderComponent()}</div>
        </div>
    );
};

export default AdminPanelPage;
