import { Box, Checkbox, FormControlLabel, Typography } from "@mui/material"
import AddressForm from "./AddressForm"

const Shipping = (
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    setFieldValue,
) => {
    return (
        <Box m="30px auto">
            {/* BILLING FORM */}
            <Typography sx={{ mb: "15px" }} fontSize="18px">
                Billing Information
            </Typography>
            <AddressForm
                type="billingAddress"
                value={values.billingAddress}
                errors={errors}
                touched={touched}
                handleChange={handleChange}
                handleBlur={handleBlur}
            />
        </Box>
    )
}
export default Shipping
