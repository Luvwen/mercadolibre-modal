import { IconButton, Image, Stack, Text } from '@chakra-ui/react';
import { UserIcon } from './UserIcon';
import { ExitIcon } from './ExitIcon';

export const Navbar = () => {
    return (
        <Stack
            alignItems="center"
            bg="primary"
            direction="row"
            display="flex"
            height="8vh"
            justifyContent="space-between"
        >
            <Image
                boxSize={50}
                ml="50px"
                src="https://apprecs.org/ios/images/app-icons/256/94/463624852.jpg"
            />
            <Stack
                alignItems="center"
                direction="row"
                display="flex"
                justifyContent="space-evenly"
                pr="25px"
                width="20vw"
            >
                <Text>Melanie Aquino</Text>
                <IconButton
                    background="inherit"
                    cusor="pointer"
                    icon={<UserIcon />}
                />
                <IconButton
                    background="inherit"
                    cusor="pointer"
                    icon={<ExitIcon />}
                />
            </Stack>
        </Stack>
    );
};
