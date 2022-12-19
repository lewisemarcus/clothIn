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
            <Box>
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
            <Box mb="20px">
                <FormControlLabel
                    label="Same for Shipping Address"
                    control={
                        <Checkbox
                            defaultChecked
                            value={values.shippingAddress.isSameAddress}
                            onChange={() => {
                                setFieldValue(
                                    "shippingAddress.isSameAddress",
                                    !values.shippingAddress.isSameAddress,
                                )
                            }}
                        />
                    }
                />
            </Box>
            {/* Shipping Form */}
            {!values.shippingAddress.isSameAddress && (
                <Box>
                    <Typography sx={{ mb: "15px" }} fontSize="18px">
                        Shipping Information
                    </Typography>
                    <AddressForm
                        type="shippingAddress"
                        value={values.shippingAddress}
                        errors={errors}
                        touched={touched}
                        handleChange={handleChange}
                        handleBlur={handleBlur}
                    />
                </Box>
            )}
        </Box>
    )
}
export default Shipping
