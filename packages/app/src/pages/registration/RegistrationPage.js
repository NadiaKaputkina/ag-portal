import React from 'react'
import { DEFAULT_STYLES, useDefaultStyles } from "../../shared/styles/rootStyles";
import BlankLayout from "../../layouts/BlankLayout";

export default function RegistrationPage() {
    const classes = useDefaultStyles(DEFAULT_STYLES);

    return (
        <BlankLayout>
            <div className={classes.defaultPage}>
                Registrtion
            </div>
        </BlankLayout>
    )
}