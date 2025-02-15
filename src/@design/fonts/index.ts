import localFont from "next/font/local";

export const aptosFont = localFont({
    variable: "--font-aptos",
    src: [
        // Regular
        {
            path: "./assets/aptos/Aptos.ttf",
            weight: "400",
            style: "normal",
        },
        {
            path: "./assets/aptos/Aptos-Italic.ttf",
            weight: "400",
            style: "italic",
        },
        // Light
        {
            path: "./assets/aptos/Aptos-Light.ttf",
            weight: "300",
            style: "normal",
        },
        {
            path: "./assets/aptos/Aptos-Light-Italic.ttf",
            weight: "300",
            style: "italic",
        },
        // Semi Bold
        {
            path: "./assets/aptos/Aptos-SemiBold.ttf",
            weight: "600",
            style: "normal",
        },
        {
            path: "./assets/aptos/Aptos-SemiBold-Italic.ttf",
            weight: "600",
            style: "italic",
        },
        // Bold
        {
            path: "./assets/aptos/Aptos-Bold.ttf",
            weight: "700",
            style: "normal",
        },
        {
            path: "./assets/aptos/Aptos-Bold-Italic.ttf",
            weight: "700",
            style: "italic",
        },
        // Extra Bold
        {
            path: "./assets/aptos/Aptos-ExtraBold.ttf",
            weight: "800",
            style: "normal",
        },
        {
            path: "./assets/aptos/Aptos-ExtraBold-Italic.ttf",
            weight: "800",
            style: "italic",
        },
        // Black
        {
            path: "./assets/aptos/Aptos-Black.ttf",
            weight: "900",
            style: "normal",
        },
        {
            path: "./assets/aptos/Aptos-Black-Italic.ttf",
            weight: "900",
            style: "italic",
        },
    ],
});

export const variableClassNames = [aptosFont.variable];
