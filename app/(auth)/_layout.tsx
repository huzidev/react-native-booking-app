import { Stack } from "expo-router";

const routes = ["welcome", "sign-in", "sign-up"] as const;

export default function Layout() {
  return (
    <Stack>
      {routes.map((route) => (
        <Stack.Screen key={route} name={route} options={{ headerShown: false }} />
      ))}
    </Stack>
  );
}
