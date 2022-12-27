import { useMediaQuery, TextField, Box } from "@mui/material"
import { getIn } from "formik"

const AddressForm = ({
    type,
    value,
    errors,
    touched,
    handleChange,
    handleBlur,
}) => {
    const isNonMobile = useMediaQuery("(min-width:600px)")

    //allows for better code readability
    const formattedName = (field) => `${type}.${field}`

    const formattedError = (field) =>
        Boolean(
            getIn(touched, formattedName(field)) &&
                getIn(errors, formattedName(field)),
        )

    const formattedHelper = (field) =>
        getIn(touched, formattedName(field)) &&
        getIn(errors, formattedName(field))
}
return <Box></Box>
export default AddressForm
