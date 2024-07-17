import React from "react";
import { deleteContact } from "../contacts";
import { redirect } from "react-router-dom";

export async function action({ params }) {
    await deleteContact(params.contactId);
    return redirect("/");
}

export default function DeleteContact() {
    return <div>Deleted!</div>;
}
