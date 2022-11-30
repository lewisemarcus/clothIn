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

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    const getItems = async () => {
        const items = await fetch(
            "http://localhost:1337/api/items?populate=image",
            { method: "GET" },
        )

        const itemsJson = await items.json()
        dispatch(setItems(itemsJson.data))

        useEffect(() => {
            getItems()
        }, [])

        const topRatedItems = items.fitler((item) => {
            item.attributes.category === "topRated"
        })
        const newArrivalsItems = items.fitler((item) => {
            item.attributes.category === "newArrivals"
        })
        const bestSellerItems = items.fitler((item) => {
            item.attributes.category === "bestSellers"
        })

        return <div>Shopping List</div>
    }
}

export default ShoppingList
