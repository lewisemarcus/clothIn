import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"
import { ThemeProvider } from "@mui/material/styles"
import { CssBaseline } from "@mui/material"
import { themes } from "./theme"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <React.StrictMode>
        <ThemeProvider theme={themes}>
            <CssBaseline />
            <App />
        </ThemeProvider>
    </React.StrictMode>,
)
