import {
  Stack,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalFooter
} from "@chakra-ui/react";
import { ChangeEvent, FC, memo, useEffect, useState } from "react";

import { User } from "../../../types/api/user";
import { PrimaryButton } from "../../atoms/button/PrimaryButton";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  isAdmin?: boolean;
  user: User | null;
};

export const UserDetailModal: FC<Props> = memo((props) => {
  const { user, isOpen, isAdmin = false, onClose } = props;
  const onClickUpdate = () => alert();
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    setUsername(user?.username ?? "");
    setName(user?.name ?? "");
    setEmail(user?.email ?? "");
    setPhone(user?.phone ?? "");
  }, [user]);

  const onChangeUserName = (e: ChangeEvent<HTMLInputElement>) =>
    setUsername(e.target.value);
  const onChangeName = (e: ChangeEvent<HTMLInputElement>) =>
    setUsername(e.target.value);
  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) =>
    setUsername(e.target.value);
  const onChangePhone = (e: ChangeEvent<HTMLInputElement>) =>
    setUsername(e.target.value);

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      autoFocus={false}
      motionPreset="slideInBottom"
    >
      <ModalOverlay />
      <ModalContent pb={2}>
        <ModalHeader>ユーザ詳細</ModalHeader>
        <ModalCloseButton />
        <ModalBody mx={4}>
          <Stack spacing={4}>
            <FormControl>
              <FormLabel>名前</FormLabel>
              <Input
                value={username}
                onChange={onChangeUserName}
                isReadOnly={!isAdmin}
              />
              <FormLabel>フルネーム</FormLabel>
              <Input
                value={name}
                onChange={onChangeName}
                isReadOnly={!isAdmin}
              />
              <FormLabel>Mail</FormLabel>
              <Input
                value={email}
                onChange={onChangeEmail}
                isReadOnly={!isAdmin}
              />
              <FormLabel>電話</FormLabel>
              <Input
                value={phone}
                onChange={onChangePhone}
                isReadOnly={!isAdmin}
              />
            </FormControl>
          </Stack>
        </ModalBody>
        {isAdmin && (
          <ModalFooter>
            <PrimaryButton onClick={onClickUpdate}>更新</PrimaryButton>
          </ModalFooter>
        )}
      </ModalContent>
    </Modal>
  );
});
