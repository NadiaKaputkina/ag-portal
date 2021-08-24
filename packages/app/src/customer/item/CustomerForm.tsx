import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import { Button } from "@material-ui/core";
import { useFormik } from 'formik';
import EditableTextInput from "./EditableTextInput";
import { ICustomerEntity } from "../CustomerStore";
import { observer } from "mobx-react";
import { toJS } from "mobx";

const CustomerForm = observer((props: any) => {
    const {
        store
    } = props;

    const massage = 'Кастомер успешно обновлен';
    const customer = store.item;
    
    const formik = useFormik({
        initialValues: {
            id: customer ? customer.id : null,
            firstName: customer ? customer.firstName : '',
            lastName: customer ? customer.lastName : '',
            age: customer ? customer.age : '1',
            isEnable: customer ? customer.isEnable : 1,
        },
        enableReinitialize: true,
        onSubmit: (values: ICustomerEntity) => {
            store.update(values, {}, massage)
        },
    });

    const [currentFieldName, setCurrentFieldName] = useState(null);

    if (!customer) return null;

    return (
        <div style={{ width: '100%'}}>
            <form onSubmit={formik.handleSubmit}>
                <Grid container spacing={1}>
                    <Grid container item xs={12} spacing={3}>
                        <Grid item xs={3}>
                            Id
                        </Grid>
                        <Grid item xs={6}>
                            {customer.id}
                        </Grid>
                    </Grid>
                    <Grid container item xs={12} spacing={3}>
                        <Grid item xs={3}>
                            Имя
                        </Grid>
                        <Grid item xs={6}>
                            <EditableTextInput
                                currentFieldName={currentFieldName}
                                setCurrentFieldName={setCurrentFieldName}
                                fieldName={'name'}
                                formik={formik}
                            />
                        </Grid>
                    </Grid>
                    <Grid container item xs={12} spacing={3}>
                        <Grid item xs={3}>
                            Возраст
                        </Grid>
                        <Grid item xs={6}>
                            {customer.age}
                        </Grid>
                    </Grid>
                    <Grid container item xs={12} spacing={3}>
                        <Button color="primary" variant="contained" fullWidth type="submit">
                            Submit
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </div>
    );
});

export default CustomerForm;
