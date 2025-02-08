import AddHall from "@/components/AdminOptionComponents/AddHall/AddHall";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";

const AdminPanelPage = () => {
    const [activeComponent, setActiveComponent] = useState(null);

    const renderComponent = () => {
        switch (activeComponent) {
            case "addHall":
                return <AddHall />;
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
                    <Button variant="outline" className="w-full py-2 px-4">
                        List halls
                    </Button>
                    <Button variant="outline" className="w-full py-2 px-4">
                        Add sessions
                    </Button>
                    <Button variant="outline" className="w-full py-2 px-4">
                        List sessions
                    </Button>
                    <Button variant="outline" className="w-full py-2 px-4">
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
