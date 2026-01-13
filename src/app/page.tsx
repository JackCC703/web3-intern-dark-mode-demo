import { Container, Title, Text, Paper, Stack } from '@mantine/core';
import { ThemeToggle } from './ThemeToggle';

export default function HomePage() {
  return (
    <Container size="sm" py="xl" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <Paper shadow="md" p="xl" withBorder radius="md" style={{ width: '100%' }}>
        <Stack align="center">
          <Title order={1} style={{ textAlign: 'center' }}>
            Web3 实习计划
          </Title>
          <Title order={3} c="blue">
            夜间模式演示 Demo
          </Title>
          <Text size="lg" ta="center">
            这个网站使用的是 Mantine UI。通过上面的代码，我们已经实现了全站的主题自适应。
          </Text>
          <Text c="dimmed" ta="center">
            点击下方按钮，你将看到背景、文字、甚至边框阴影都会自动切换。
          </Text>
          <ThemeToggle />
        </Stack>
      </Paper>
    </Container>
  );
}