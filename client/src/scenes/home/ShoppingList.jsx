import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Box, Tab, Tabs, Typography, useMediaQuery } from "@mui/material"
import Item from "../../components/Item"
import { setItems } from "../../state"
const ShoppingList = () => {
    const dispatch = useDispatch()
    const [value, setValue] = useState("all")
    const items = useSelector((state) => state.cart.items)
    const isNonMobile = useMediaQuery("(min-width:600px)")
}

export default ShoppingList
