import "@mantine/core/styles.css";
import { ColorSchemeScript, MantineProvider, createTheme } from "@mantine/core";

const theme = createTheme({
  /* 这里可以留空，或者之后定义你的自定义颜色 */
});

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="zh" suppressHydrationWarning> 
      <head>
        <ColorSchemeScript defaultColorScheme="auto" />
      </head>
      <body>
        <MantineProvider theme={theme} defaultColorScheme="auto">
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}