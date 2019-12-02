import React from "react";
import { Box, Card } from "@material-ui/core";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt } from "@fortawesome/free-solid-svg-icons";
const thing = () => {
    return (
        <Box>
            <Card className="component-card">
                some text
                <FontAwesomeIcon className="bolt" icon={faBolt}/>
            </Card>
        </Box>
    )


}
export default thing;