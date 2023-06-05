import { Box, Divider, Flex, Heading, Stack } from "@chakra-ui/react";
import { ChangeEvent, FC, memo, useState } from "react";

import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { useAuth } from "../../hooks/useAuth";

export const Login: FC = memo(() => {
  const { login, loading } = useAuth();
  const [userId, setUserId] = useState("");
  const OnChangeUserId = (e: ChangeEvent<HTMLInputElement>) =>
    setUserId(e.target.value);
  const onClickLogin = () => login(userId);

  return (
    <Flex align="center" justify="center" height="100vh">
      <Box bg="white" w="sm" p={4} borderRadius="md" shadow="md">
        <Heading as="h1" size="lg" textAlign="center">
          ユーザ管理アプリ
        </Heading>
        <Divider my={4} />
        <Stack spacing={6} py={4} px={10}>
          <input
            placeholder="ユーザID"
            value={userId}
            onChange={OnChangeUserId}
          />
          <PrimaryButton
            disabled={userId === ""}
            loading={loading}
            children={"ログイン"}
            onClick={onClickLogin}
          />
        </Stack>
      </Box>
    </Flex>
  );
});
