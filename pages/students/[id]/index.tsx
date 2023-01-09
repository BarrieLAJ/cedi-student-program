import React from 'react';
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";

const Student = () => {
    return <Container>
        <Box
            sx={{
                my: 4,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            {/*Student Data*/}
            <Box sx={{
                boxShadow: (theme) => theme.shadows['2'],
                width: "100%",
                height: "fit-content",
                p: 3,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <Box sx={{width: "100%", display: "flex", gap: 3, alignItems: "start"}}>
                    <Avatar variant="square" sx={{
                        flex: 0.7,
                        mt: 1,
                        height: 250
                    }}/>
                    <Box flex={2}>
                        <Typography variant="h1" fontSize={"64px"} maxWidth={"60%"} component="h1" gutterBottom>
                            Fatmatu Bintu V kamara
                        </Typography>
                        <Stack spacing={1}>
                            {/*basic infos*/}
                            <Box sx={{
                                display: "flex",
                                gap: {md: 3},
                                justifyContent: {xs: "space-between", md: "start"}
                            }}>
                                <Typography fontWeight={400}>Address:</Typography>
                                <Typography fontWeight={600}>22 Main Road, Freetown</Typography>
                            </Box><Box sx={{
                                display: "flex",
                                gap: {md: 3},
                                justifyContent: {xs: "space-between", md: "start"}
                            }}>
                                <Typography fontWeight={400}>Date Of Birth:</Typography>
                                <Typography fontWeight={600}>{"2002/04/06"}</Typography>
                            </Box><Box sx={{
                                display: "flex",
                                gap: {md: 3},
                                justifyContent: {xs: "space-between", md: "start"}
                            }}>
                                <Typography fontWeight={400}>Contact:</Typography>
                                <Typography fontWeight={600}>078204398</Typography>
                            </Box>
                        </Stack>
                    </Box>
                </Box>
                <Divider sx={{
                    width: "100%",
                    mt: 3,
                    borderWidth: 2
                }
                } />
            </Box>
        </Box>
    </Container>

}

export default Student