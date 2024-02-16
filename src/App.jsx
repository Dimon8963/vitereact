import React from "react";
import Link from "./components/Link.jsx"
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete'
function App() {
    return (
        <>
            <Link href="https://www.google.com" name="Google" />
            <br/>
            <Button
                variant="contained"
                color="primary"
                size="large"
                startIcon={<DeleteIcon/>}
            >
                Contained
            </Button>
        </>
    )
}

export default App;