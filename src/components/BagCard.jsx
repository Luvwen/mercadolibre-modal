import { SmallCloseIcon } from '@chakra-ui/icons';
import { Box, Heading, Image, Stack, Text } from '@chakra-ui/react';

export const BagCard = () => {
    return (
        <Stack
            alignItems="center"
            bg="primary"
            borderRadius="6px"
            direction="row"
            height="25vh"
            m="25px auto 0"
            pl="50px"
            position="relative"
            spacing="10"
            width="30vw"
        >
            <Image
                boxSize="150"
                src="https://www.romipack.com.ar/img/productos-luna-med.png"
            />
            <Stack>
                <Text>Empaque sugerido: </Text>
                <Heading fontSize="2.5em">Bolsa</Heading>
            </Stack>
            <Box position="absolute" right="5" top="5">
                <SmallCloseIcon color="white" fontSize="24px" />
            </Box>
        </Stack>
    );
};
