"use client"; // 必须添加，因为这是客户端交互组件

import { Button, Group, useMantineColorScheme } from '@mantine/core';

export function ThemeToggle() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <Group justify="center" mt="xl">
      <Button 
        onClick={() => toggleColorScheme()} 
        variant="filled"
        size="lg"
        radius="xl"
      >
        切换到 {colorScheme === 'dark' ? '☀️ 浅色模式' : '🌙 深色模式'}
      </Button>
    </Group>
  );
}