import { Button } from "@/components/ui/button";
import React, { useState } from "react";

const AdminPanelPage = () => {
    return (
        <div className="flex">
            <div className="w-1/4 bg-gray-100 h-screen p-4">
                <div className="space-y-4">
                    <Button variant="destructive" className="w-full py-2 px-4">
                        Add halls
                    </Button>
                    <Button variant="outline" className="w-full py-2 px-4">
                        List halls
                    </Button>
                </div>
            </div> 
        </div>
    );
};

export default AdminPanelPage;
