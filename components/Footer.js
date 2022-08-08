import { Box, Button, Grid, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

function Footer() {
    return (
        <footer
            style={{
                background: "#000",
                textAlign: "center",
                margin: "auto",
                paddingBlock: "40px",
            }}
        >
            <Typography
                style={{
                    fontWeight: "bold",
                    fontSize: "100px",
                    color: "rgb(7, 136, 255)",
                }}
                component="h4"
            >
                Start for free.
            </Typography>
            <Typography
                component="p"
                style={{
                    fontWeight: "bold",
                    fontSize: "40px",
                    marginBlock: "30px",
                    color: "#fff",
                }}
            >
                Design and publish your first <br /> free site with Framer today.
            </Typography>
            <Button
                style={{
                    boxShadow: "rgb(255 90 159 / 30%) 0px 0px 0px 0px",
                    background:
                        "linear-gradient(315deg, rgb(7, 222, 255) 0%, rgb(15, 151, 255) 100%)",
                    borderRadius: "12px",
                    color: "#fff",
                    fontWeight: "bold",
                    height: "60px",
                    width: "380px",
                }}
            >
                Try Framer for Free
            </Button>
            <Grid
                container
                style={{
                    justifyContent: "space-between",
                    overflow: "hidden",
                    marginBlock: "25px",
                    maxHeight: "700px",
                    width: "90%",
                    marginInline: "auto"
                }}
            >
                <Grid lg={8}>
                    <img
                        src="https://framerusercontent.com/images/kgbbDuMXQcrih1cAJ6ILx5WjUs.jpg"
                        alt="image"
                        style={{
                            borderRadius: "0 20px 0 0",
                            boxShadow: "rgb(8 8 8) 0px -1px 0px 0px",
                            width: "100%"
                        }}
                    />
                </Grid>
                <Grid lg={4}>
                    <img
                        src="https://framerusercontent.com/images/IQe6pB7tB2VbH0hxRBUyUO04OA.jpg"
                        alt="image"
                        style={{
                            borderRadius: "20px",
                            boxShadow: "rgb(8 8 8) 0px -1px 0px 0px",
                            width: "100%"
                        }}
                    />
                </Grid>
            </Grid>
            <Grid
                container
                style={{
                    justifyContent: "space-between",
                    marginTop: "55px",
                }}
            >
                <Grid lg={4}>
                    <Typography component="h2" style={{ fontWeight: "bold" }}>Framer</Typography>
                    <ul>
                        <li>
                            <Link href="/" passHref><Typography component="span">Learn</Typography></Link>
                        </li>
                        <li>
                            <Link href="/" passHref><Typography component="span">Gallery</Typography></Link>
                        </li>
                        <li>
                            <Link href="/" passHref><Typography component="span">Use Cases</Typography></Link>
                        </li>
                        <li>
                            <Link href="/" passHref><Typography component="span">Pricing</Typography></Link>
                        </li>
                    </ul>
                </Grid>
                <Grid lg={4}>
                    <Typography component="h2" style={{ fontWeight: "bold" }}>Resources</Typography>
                    <ul>
                        <li>
                            <Link href="/" passHref><Typography component="span">Plugins</Typography></Link>
                        </li>
                        <li>
                            <Link href="/" passHref><Typography component="span">Experts</Typography></Link>
                        </li>
                        <li>
                            <Link href="/" passHref><Typography component="span">Startups</Typography></Link>
                        </li>
                        <li>
                            <Link href="/" passHref><Typography component="span">Developers</Typography></Link>
                        </li>
                    </ul>
                </Grid>
                <Grid lg={4}>
                    <Typography component="h2" style={{ fontWeight: "bold" }}>Template</Typography>
                    <ul>
                        <li>
                            <Link href="/" passHref><Typography component="span">New</Typography></Link>
                        </li>
                        <li>
                            <Link href="/" passHref><Typography component="span">Free</Typography></Link>
                        </li>
                        <li>
                            <Link href="/" passHref><Typography component="span">Blog</Typography></Link>
                        </li>
                        <li>
                            <Link href="/" passHref><Typography component="span">Portfolio</Typography></Link>
                        </li>
                    </ul>
                </Grid>
            </Grid>
        </footer>
    );
}

export default Footer;
