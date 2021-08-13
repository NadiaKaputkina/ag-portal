import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { TextField } from "@material-ui/core";

const EditableTextInput = (props) => {
    const {
        currentFieldName,
        setCurrentFieldName,
        fieldName,
        formik,
    } = props;

    const isEdit = currentFieldName === fieldName;

    const handleEditClick = (e) => {
        const newFieldName = e.target.dataset.for;
        if (newFieldName) {
            return setCurrentFieldName(newFieldName)
        }
    }
    const handleOnBlur = () => {
        setCurrentFieldName(null)
    }

    return (
        <Grid item xs={6} data-for={fieldName} onClick={handleEditClick}>
            { isEdit
                ? <TextField
                    variant="outlined"
                    fullWidth
                    id={fieldName}
                    name={fieldName}
                    label=""
                    autoFocus={true}
                    value={formik.values[fieldName]}
                    onChange={formik.handleChange}
                    onBlur={handleOnBlur}
                />
                : formik.values[fieldName]
            }
        </Grid>
    );
};

export default EditableTextInput;
